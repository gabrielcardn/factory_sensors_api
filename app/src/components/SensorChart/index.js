import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SensorChart = ({ data }) => {
  // Group data by sensor_id
  const dataBySensorId = data.reduce((acc, curr) => {
    if (!acc[curr.sensor_id]) {
      acc[curr.sensor_id] = [];
    }
    acc[curr.sensor_id].push({
      timestamp: new Date(curr.timestamp),
      value: curr.sensor_value,
    });
    return acc;
  }, {});
  // Create an array of LineChart series
  const series = Object.entries(dataBySensorId).map(([sensorId, sensorData]) => {
    return {

      key: sensorId,
      data: sensorData,
      name: `Sensor ${sensorId}`,
    }
  });

  function getRandomColor(value) {
    const hash = String(value).split('').reduce((acc, char) => {
      acc = ((acc << 5) - acc) + char.charCodeAt(0);
      return acc & acc; // Convert to 32bit integer
    }, 0);

    const r = (hash & 0xFF0000) >> 16;
    const g = (hash & 0x00FF00) >> 8;
    const b = hash & 0x0000FF;

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  return (
    <LineChart
      width={900}
      height={300}
      data={series}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="timestamp" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      {series.map(({ key, data }) => {
        console.log(data)
        return <Line
          key={key}
          name={"Sensor " + key}
          type="monotone"
          dataKey="value"
          data={data}
          stroke={getRandomColor(key * 50)}
          activeDot={{ r: 8 }}
        />
      })}
    </LineChart>
  );
};

export default SensorChart;