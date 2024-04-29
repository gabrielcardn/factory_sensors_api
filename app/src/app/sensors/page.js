"use client"

import Table from "@/components/Table";
import { useEffect, useState } from "react";


export default function Sensors() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5001/sensors", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(d => {
            setData(d)
            setLoading(false)
        });
    },[])

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
            header: 'Nome externo',
            cellRenderer: (row) => <div>{row.column2}</div>,
            style: {
                width: '200px',
            },
        },
    ];

    const rows = data.map(sensor => {
        return {
            id: sensor.id,
            column1: sensor.name,
            column2: sensor.external_name,
        }
    })

    return (
        <div>
            <Table columns={columns} rows={rows} />
        </div>
    );
}
