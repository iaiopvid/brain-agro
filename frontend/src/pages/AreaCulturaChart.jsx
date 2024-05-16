import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import {
    fetchAreaCultura,
    changeStateTrue,
    changeStateFalse,
} from "../feature/areaCulturaSlice";
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
            text: 'Area por Culturas',
        },
    },
};

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

export default function AreaCulturaChart() {
    
    const dispatch = useDispatch();
    const { loading, areaCulturaList, error, updateState, response } = useSelector(
        (state) => state.areaCulturaKey
    );

    const [isInitialRender, setIsInitialRender] = useState(true);
    const [dataLabels, setDataLabels] = useState({
        labels: [],
        datasets: [],
    });

    const handleAreaCulturaChart = () => {
        setDataLabels({
            labels: areaCulturaList.map(data => data.culturasplantadas),
            datasets: [
                {
                    label: '# Area',
                    data: areaCulturaList.map(data => data.somaareatotalporcultura),
                    backgroundColor: areaCulturaList.map(data => `rgb(${randomBetween(0, 255)},${randomBetween(0, 255)},${randomBetween(0, 255)})`),
                    borderWidth: 1,
                },
            ],
        });
    };
    
    useEffect(() => {
        dispatch(fetchAreaCultura());
        if (areaCulturaList.length > 0) {
            if (isInitialRender) {
                setIsInitialRender(false);
                handleAreaCulturaChart();
            }
        }
    }, [dispatch, handleAreaCulturaChart]);

    return (
        <Box>
            <Pie options={options} data={dataLabels} />
        </Box>
    );
}