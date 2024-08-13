import React from "react";
import { Bar, Line, Pie, Radar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, Filler, RadialLinearScale } from "chart.js";
import styles from "./Dashboard.module.css";
import {MapContainer, TileLayer, useMapEvent} from "react-leaflet";
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, Filler, RadialLinearScale);

const Dashboard = () => {
    // Datos para las gráficas
    const lineData = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [
            {
                label: "Usuarios Nuevos",
                data: [200, 300, 400, 500, 600, 700],
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                tension: 0.4,
                fill: true,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            },
            {
                label: "Usuarios Activos",
                data: [150, 250, 300, 450, 500, 650],
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                tension: 0.3,
                borderDash: [10, 5],
                pointStyle: 'rect',
                pointRadius: 5,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: "Usuarios Premium",
                data: [50, 100, 150, 200, 300, 400],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.2,
                borderDash: [5, 5],
                pointStyle: 'triangle',
                pointRadius: 6,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    const barData = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [
            {
                label: "Ventas",
                data: [65000, 59000, 80000, 81000, 56000, 55000],
                backgroundColor: "rgba(75, 192, 192, 0.3)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
            },
            {
                label: "Gastos",
                data: [28000, 48000, 40000, 19000, 86000, 27000],
                backgroundColor: "rgba(255, 99, 132, 0.3)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 2,
            },
        ],
    };

    const pieData = {
        labels: ["Online", "Tienda", "Mayorista"],
        datasets: [
            {
                label: "Distribución de Ventas",
                data: [300000, 150000, 100000],
                backgroundColor: [
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 99, 132, 0.6)",
                ],
                borderWidth: 1,
                borderColor: "#fff",
            },
        ],
    };

    const radarData = {
        labels: ["Usuarios Nuevos", "Usuarios Activos", "Usuarios Premium", "Ventas", "Gastos"],
        datasets: [
            {
                label: "Rendimiento",
                data: [60, 70, 50, 80, 65],
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(75, 192, 192, 1)",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: "#333",
                titleColor: "#fff",
                bodyColor: "#fff",
                borderColor: "#333",
                borderWidth: 1,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#666",
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#666",
                },
            },
        },
    };

    function MyComponent() {
        const map = useMapEvent('click', () => {
            map.setView([50.5, 30.5], map.getZoom())
        })
        return null
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Dashboard Administrativo</h1>
            <div className={styles.gridContainer}>
                <div className={styles.chartItem}>
                    <h2 className={styles.chartTitle}>Ventas y Gastos</h2>
                    <div className={styles.chartWrapper}>
                        <Bar data={barData} options={options} />
                    </div>
                </div>
                <div className={styles.chartItem}>
                    <h2 className={styles.chartTitle}>Crecimiento de Usuarios</h2>
                    <div className={styles.chartWrapper}>
                        <Line data={lineData} options={options} />
                    </div>
                </div>
                <div className={styles.chartItem}>
                    <h2 className={styles.chartTitle}>Distribución de Ventas</h2>
                    <div className={styles.chartWrapper}>
                        <Pie data={pieData} options={options} />
                    </div>
                </div>
                <div className={styles.chartItem}>
                    <h2 className={styles.chartTitle}>Rendimiento General</h2>
                    <div className={styles.chartWrapper}>
                        <Radar data={radarData} options={options} />
                    </div>
                </div>
            </div>
            <div className={styles.tableContainer}>
                <h2 className={styles.chartTitle}>Datos Empresariales</h2>
                <table className={styles.dataTable}>
                    <thead>
                    <tr>
                        <th>Mes</th>
                        <th>Usuarios Nuevos</th>
                        <th>Usuarios Activos</th>
                        <th>Usuarios Premium</th>
                        <th>Ventas (USD)</th>
                        <th>Gastos (USD)</th>
                        <th>Ventas Online (USD)</th>
                        <th>Ventas en Tienda (USD)</th>
                        <th>Ventas Mayoristas (USD)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {lineData.labels.map((month, index) => (
                        <tr key={index}>
                            <td>{month}</td>
                            <td>{lineData.datasets[0].data[index]}</td>
                            <td>{lineData.datasets[1].data[index]}</td>
                            <td>{lineData.datasets[2].data[index]}</td>
                            <td>{barData.datasets[0].data[index]}</td>
                            <td>{barData.datasets[1].data[index]}</td>
                            <td>{(pieData.datasets[0].data[0] * (barData.datasets[0].data[index] / barData.datasets[0].data.reduce((a, b) => a + b, 0))).toFixed(2)}</td>
                            <td>{(pieData.datasets[0].data[1] * (barData.datasets[0].data[index] / barData.datasets[0].data.reduce((a, b) => a + b, 0))).toFixed(2)}</td>
                            <td>{(pieData.datasets[0].data[2] * (barData.datasets[0].data[index] / barData.datasets[0].data.reduce((a, b) => a + b, 0))).toFixed(2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
          {/*  <div className={styles.mapContainer}>
                <h2 className={styles.chartTitle}>Ubicación en el Mapa</h2>
                <MapContainer center={[50.5, 30.5]} zoom={13} className={styles.mapContainer}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <MyComponent />
                </MapContainer>
            </div>*/}
        </div>
    );
};

export default Dashboard;
