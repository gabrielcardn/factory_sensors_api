from flask import Flask, g, request, jsonify
from flask_cors import CORS
import sqlite3
import requests
import time
import threading


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})


DATABASE = 'database.db'

# Script para criar as tabelas no banco de dados
def create_tables():
    conn = sqlite3.connect(DATABASE)
    cur = conn.cursor()

   # Tabela de máquinas
    cur.execute('''CREATE TABLE IF NOT EXISTS machines (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    sensors INTEGER[],
                    FOREIGN KEY(sensors) REFERENCES sensors(id) -- foreign key reference to 'sensors' table
                )''')

    # Tabela de sensores
    cur.execute('''CREATE TABLE IF NOT EXISTS sensors (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    external_name TEXT NOT NULL,
                    UNIQUE(external_name) -- ensure that each sensor has a unique external name
                )''')

    # Tabela de sequência de produção
    cur.execute('''CREATE TABLE IF NOT EXISTS production_sequences (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    sequence INTEGER[],
                    FOREIGN KEY(sequence) REFERENCES machines(id) -- foreign key reference to 'machines' table
                )''')

    # Tabela de dados dos sensores
    cur.execute('''CREATE TABLE IF NOT EXISTS sensor_data (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    sensor_id INTEGER,
                    sensor_value INTEGER,
                    timestamp INTEGER,
                    FOREIGN KEY (sensor_id) REFERENCES sensors(id)
                )''')


    conn.commit()
    conn.close()

# Função para inicializar o banco de dados
def initialize_database():
    create_tables()
    print("Banco de dados inicializado com sucesso!")

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


# Rota para listar todos os sensores cadastrados
@app.route('/sensors', methods=['GET'])
def list_sensors():
    db = get_db()
    cur = db.cursor()
    cur.execute('SELECT * FROM sensors')
    sensors = cur.fetchall()
    json = []
    for data in sensors:
        json.append({
            'id': data[0],
            'name': data[1],
            'external_name': data[2]
        })
    return jsonify(json)

# Rota para criar um novo sensor
@app.route("/sensors", methods=["POST"])
def add_sensor():
    data = request.json

    if 'name' not in data or 'external_name' not in data:
        return jsonify({'error': 'Missing required fields'}), 400
    
    sensor_name = data['name']
    external_name = data['external_name']

    db = get_db()
    cur = db.cursor()
    cur.execute('SELECT COUNT(*) FROM sensors WHERE name = ? OR external_name = ?', (sensor_name, external_name))
    count = cur.fetchone()[0]
    if count > 0:
        return jsonify({'error': 'A sensor with the same name or external name already exists'}), 400
    
    external_sensor = get_external_sensor(external_name)
    if not external_sensor:
        return jsonify({'error': f"No external sensor find for name: {external_name}"}), 400

    # Add the new sensor to the database (you can add this code after the if count > 0 statement)
    cur.execute('INSERT INTO sensors (name, external_name) VALUES (?, ?)', (sensor_name, external_name))
    db.commit()
    return jsonify({'message': 'Sensor added successfully'}), 201

# Pega dados do sensor (externo)
def get_external_sensor(name):
    # Make a GET request to the other Flask server
    request_url = f"http://localhost:5000/api/v1/sensors?name={name}"
    response = requests.get(request_url)
    # Check if the request was successful
    if response.status_code == 200:
        # Return the response as JSON
        return response.json()
    else:
        # Return an error message
        return None

# Rota para listar todas as máquinas cadastradas
@app.route('/machines', methods=['GET'])
def list_machines():
    db = get_db()
    cur = db.cursor()
    cur.execute('SELECT * FROM machines')
    machines = cur.fetchall()
    json = []
    for data in machines:
        sensors = []        
        if data[2]:
            sensors = data[2]
        json.append({
            'id': data[0],
            'name': data[1],
            'sensors': sensors
        })
    return jsonify(json)

# Rota para cadastrar uma nova máquina
@app.route('/machines', methods=['POST'])
def add_machine():
    data = request.json
    print("data: ", data)
    if 'name' not in data or 'sensors' not in data:
        return jsonify({'error': 'Missing required fields'}), 400

    machine_name = data['name']
    sensors = data['sensors']
    
    # Verificar se todos os sensores existem
    db = get_db()
    cur = db.cursor()
    cur.execute('SELECT COUNT(*) FROM machines WHERE name = ?', (machine_name,))
    count = cur.fetchone()[0]
    if count > 0:
        return jsonify({'error': 'A machine with the same name already exists'}), 400

    if(sensors):
        for sensor_id in sensors:
            cur.execute('SELECT id FROM sensors WHERE id = ?', (sensor_id,))
            sensor = cur.fetchone()    
            if sensor is None:
                return jsonify({'error': f'Sensor with ID {sensor_id} not found'}), 404

    # Inserir a máquina no banco de dados
    cur.execute('INSERT INTO machines (name, sensors) VALUES (?, ?)', (machine_name, ','.join(map(str, sensors))))
    machine_id = cur.lastrowid
    db.commit()
    return jsonify({'message': 'Machine added successfully', 'machine_id': machine_id}), 201

# Rota para listar a sequência de produção
@app.route('/production-sequences', methods=['GET'])
def get_production_sequences():
    db = get_db()
    cur = db.cursor()
    cur.execute('SELECT * FROM production_sequences')
    sequence = cur.fetchall()
    json = []
    for data in sequence:
        print(data)
        json.append({
            'id': data[0],
            'name': data[1],
            'sequence': [int(x) for x in data[2].split(',')]
        })
    return jsonify(json)

# Rota para atualizar a sequência de produção
@app.route('/production-sequences', methods=['POST'])
def add_production_sequences():
    data = request.json
    if 'name' not in data or 'sequence' not in data:
        return jsonify({'error': 'Missing required fields'}), 400

    sequence_name = data['name']
    sequence_list = data['sequence']

    db = get_db()
    cur = db.cursor()
    cur.execute('SELECT COUNT(*) FROM production_sequences WHERE name = ?', (sequence_name,))
    count = cur.fetchone()[0]
    if count > 0:
        return jsonify({'error': 'A sequence with the same name already exists'}), 400
    

    # Check if there are any machines in the new sequence that are already in another sequence
    cur.execute('SELECT sequence FROM production_sequences')
    existing_machines = [row[0] for row in cur.fetchall()]
    for machine_id in sequence_list:
        cur.execute('SELECT id FROM machines WHERE id = ?', (machine_id,))
        machine = cur.fetchone()    
        if machine is None:
            return jsonify({'error': f'Machine with ID {machine_id} not found'}), 404
        for string in existing_machines:
            array = [int(x) for x in string.split(',')]
            if machine_id in array:
                return jsonify({'error': 'Machine already exists in another production sequence'}), 400

    cur.execute('INSERT INTO production_sequences (name, sequence) VALUES (?, ?)', (sequence_name, ','.join(map(str, sequence_list))))
    db.commit()
    return jsonify({'message': 'Production sequence added successfully'}), 201

# Rota para listar a sequência de produção
@app.route('/sensor_data', methods=['GET'])
def get_sensor_data():
    db = get_db()
    cur = db.cursor()
    cur.execute('SELECT * FROM sensor_data')
    sensors_data = cur.fetchall()
    json = []
    for data in sensors_data:
        json.append({
            'id': data[0],
            'sensor_id': data[1],
            'sensor_value': data[2],
            'timestamp': data[3]
        })
    return jsonify(json)


# Rota para testar banco de dados e printar todas as tabelas
@app.route('/test-database')
def test_database():
    db = get_db()
    cur = db.cursor()

    # Consulta para obter todos os registros da tabela 'machines'
    cur.execute('SELECT * FROM machines')
    machines = cur.fetchall()

    # Consulta para obter todos os registros da tabela 'sensors'
    cur.execute('SELECT * FROM sensors')
    sensors = cur.fetchall()

    # Consulta para obter todos os registros da tabela 'production_sequences'
    cur.execute('SELECT * FROM production_sequences')
    production_sequences = cur.fetchall()

    cur.execute('SELECT * FROM sensor_data')
    sensor_data = cur.fetchall()

    db.close()

    # Retornar os registros de todas as tabelas
    return jsonify({
        'machines': machines,
        'sensors': sensors,
        'production_sequences': production_sequences,
        'sensor_data': sensor_data
    })

# Função para limpar os registros de uma tabela específica
def clear_table(table_name):
    db = get_db()
    cur = db.cursor()

    # Verificar se a tabela existe
    cur.execute("SELECT name FROM sqlite_master WHERE type='table' AND name=?", (table_name,))
    if not cur.fetchone():
        return jsonify({'error': f'Table "{table_name}" does not exist'})

    # Limpar a tabela específica
    cur.execute(f'DELETE FROM {table_name}')

    db.commit()
    db.close()

    return jsonify({'message': f'All records cleared from table "{table_name}" successfully'})

# Rota para limpar os registros de uma tabela específica
@app.route('/clear-table/<string:table_name>', methods=['DELETE'])
def clear_specific_table(table_name):
    return clear_table(table_name)

# Função 
def get_sensors_data():
    print("Function executed")
    with app.app_context():
        db = get_db()
        cur = db.cursor()
        cur.execute('SELECT * FROM sensors')
        current_sensors = cur.fetchall()
        while True:
            # Your code here            
            for sensor in current_sensors:
                data = get_external_sensor(sensor[2])
                data['id'] = sensor[0]
                print('inserting: ', data['id'],data['data'], data['timestamp'])
                cur.execute(
                    """INSERT INTO sensor_data (sensor_id, sensor_value, timestamp) VALUES (?, ?, ?)""", 
                    (data['id'],data['data'], data['timestamp'])
                    )
            db.commit()

            time.sleep(0.3)


# Crie e inicie uma nova thread para executar get_sensors_data()
# sensor_thread = threading.Thread(target=get_sensors_data)
# sensor_thread.daemon = True  # Define a thread como daemon para que ela seja encerrada quando o programa principal terminar
# sensor_thread.start()

# Main code
if __name__ == '__main__':
    initialize_database()
    app.run(debug=True,port=5001)

