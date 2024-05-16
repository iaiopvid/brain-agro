import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from '@mui/material';

import {
    fetchArea,
    changeStateTrue,
    changeStateFalse,
} from "../feature/areaSlice";
import { useEffect } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
            position: 'top',
        },
        title: {
            display: true,
            text: 'Areas Chart',
        },
    },
};

export default function AreaChart() {
    
    const dispatch = useDispatch();
    const { loading, areaList, error, updateState, response } = useSelector(
        (state) => state.areaKey
    );

    const [isInitialRender, setIsInitialRender] = useState(true);
    const [dataLabels, setDataLabels] = useState({
        labels: [],
        datasets: [],
    });

    const handleAreaChart = () => {
        setDataLabels({
            labels: areaList.map(value => value.nome),
            datasets: [
                {
                    label: 'Area Total',
                    data: areaList.map(value => value.area_total),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
                {
                    label: 'Area Agricultavel',
                    data: areaList.map(value => value.area_agricultavel),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                },
                {
                    label: 'Area Vegetacao',
                    data: areaList.map(value => value.area_vegetacao),
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.8)',
                },
            ],
        });
    };
    
    useEffect(() => {
        dispatch(fetchArea());
        if (areaList.length > 0) {
            if (isInitialRender) {
                setIsInitialRender(false);
                handleAreaChart();
            }
        }
    }, [dispatch, handleAreaChart]);

    return (
        <Bar options={options} data={dataLabels} />
    );
}