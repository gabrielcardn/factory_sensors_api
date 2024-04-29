"use client"

import SensorChart from "@/components/SensorChart";
import { useEffect, useState } from "react";


export default function Analytics() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:5001/sensor_data", {
        method: "GET",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => res.json()).then(d => {
        setData(d)
        setLoading(false)
      });
    }
    fetchData();

    const interval = setInterval(fetchData, 5000); // Refetch data every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [])

  if (loading) return <a>Loading...</a>

  return (
    <div >
      <SensorChart data={data} />
    </div>
  );
}
