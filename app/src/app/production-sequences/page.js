"use client"

import Table from "@/components/Table";
import { useEffect, useState } from "react";


export default function ProductionSequences() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5001/production-sequences", {
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
            header: 'Sequência',
            cellRenderer: (row) => <div>{row.column2.join("->")}</div>,
            style: {
                width: '200px',
            },
        },
    ];

    const rows = data.map(productionSequence => {
        return {
            id: productionSequence.id,
            column1: productionSequence.name,
            column2: productionSequence.sequence,
        }
    })

    return (
        <div>
            <Table columns={columns} rows={rows} />
        </div>
    );
}
