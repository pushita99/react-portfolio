import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"; // Importa los componentes necesarios
import styles from "./Dashboard.module.css";

// Registra las escalas y elementos que usarás
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    // Datos de ejemplo para el gráfico
    const data = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [
            {
                label: "Ventas",
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
            {
                label: "Gastos",
                data: [28, 48, 40, 19, 86, 27],
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className={styles.container}>
            <h1>Dashboard Administrativo</h1>
            <div className={styles.chartContainer}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Dashboard;
