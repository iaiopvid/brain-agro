import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import {
    fetchAreaEstado,
    changeStateTrue,
    changeStateFalse,
} from "../feature/areaEstadoSlice";
import { useEffect } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Area por Estados',
        },
    },
};

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

export default function AreaEstadoChart() {
    
    const dispatch = useDispatch();
    const { loading, areaEstadoList, error, updateState, response } = useSelector(
        (state) => state.areaEstadoKey
    );

    const [isInitialRender, setIsInitialRender] = useState(true);
    const [dataLabels, setDataLabels] = useState({
        labels: [],
        datasets: [],
    });

    const handleAreaEstadoChart = () => {
        setDataLabels({
            labels: areaEstadoList.map(data => data.estado),
            datasets: [
                {
                    label: '# Area',
                    data: areaEstadoList.map(data => data.somaareatotalporestado),
                    backgroundColor: areaEstadoList.map(data => `rgb(${randomBetween(0, 255)},${randomBetween(0, 255)},${randomBetween(0, 255)})`),
                    borderWidth: 1,
                },
            ],
        });
    };
    
    useEffect(() => {
        dispatch(fetchAreaEstado());
        if (areaEstadoList.length > 0) {
            if (isInitialRender) {
                setIsInitialRender(false);
                handleAreaEstadoChart();
            }
        }
    }, [dispatch, handleAreaEstadoChart]);

    return (
        <Box>
            <Pie options={options} data={dataLabels} />
        </Box>
    );
}