import React from "react";
import "./home.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../Navbar/Navbar";
//   import faker from "faker"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const labels1 = [
  "label1",
  "label2",
  "label3",
  "label4",
  "label5",
  "label6",
  "label7",
]; // Replace with your actual labels
const randomNumbers = labels1.map(() => Math.floor(Math.random() * 1001));

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels1.map(() => Math.floor(Math.random() * 1001)),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels1.map(() => Math.floor(Math.random() * 1001)),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const Home = () => {
  return (
    <div>
      <Navbar />
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: "white", height: "100vh" }}>
            {" "}
            <Bar options={options} data={data} />
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Home;
