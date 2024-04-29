"use client"

import Form from "@/components/Form";
import Modal from "@/components/Modal/Modal";
import Table from "@/components/Table";
import { useEffect, useState } from "react";


export default function Machines() {
    const [data, setData] = useState(null)
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(Date.now())

    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:5001/machines", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(d => {
            setData(d)
            setLoading(false)
        });
    }, [reload])

    const handleSubmit = (values) => {
        let sensors = []
        if (values.sensors)
            sensors = values.sensors.split(",").map(Number)
        fetch("http://localhost:5001/machines", {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: values.name,
                sensors: sensors
            })
        }).then(res => res.json()).then(d => {
            console.log(d)
            if (d.error) {
                alert(d.error)
                return
            }
            setReload(Date.now())
            setModal(false)
        });
    }


    if (loading) return <a>Loading...</a>

    const columns = [
        {
            header: 'Nome',
            cellRenderer: (row) => <div>{row.column1}</div>,
            style: {
                width: '200px',
            },
            clickable: true,
            onClick: (row) => {
                alert("ROW: " + row.id)
            },
        },
        {
            header: 'IDs dos Sensores',
            cellRenderer: (row) => <div>{"[" + row.column2 + "]"}</div>,
            style: {
                width: '200px',
            },
        },
    ];

    const rows = data.map(machine => {
        return {
            id: machine.id,
            column1: machine.name,
            column2: machine.sensors.toString(),
        }
    })

    return (
        <div>
            <button onClick={() => setModal(true)}>Criar</button>
            <Table columns={columns} rows={rows} />
            {modal ?
                <Modal
                    onClose={() => setModal(false)}
                    children={
                        <Form
                            onSubmit={handleSubmit}
                            onCancel={() => setModal(false)}
                            inputs={[
                                {
                                    id: "name",
                                    title: "Nome:",
                                    type: "text",
                                    initialValue: ""
                                },
                                {
                                    id: "sensors",
                                    title: "Sensores:",
                                    type: "text",
                                    initialValue: ""
                                },
                            ]}
                        />}
                />
                : null}
        </div>
    );
}
