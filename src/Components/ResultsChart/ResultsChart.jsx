import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": "dest_001",
    "place": "Paris",
    "Monthly": 5,
    "Quarterly": 12,
    "Yearly": 30,
    "Rarely": 10
  },
  {
    "id": "dest_002",
    "place": "Bali",
    "Monthly": 3,
    "Quarterly": 10,
    "Yearly": 25,
    "Rarely": 12
  },
  {
    "id": "dest_003",
    "place": "New York",
    "Monthly": 6,
    "Quarterly": 15,
    "Yearly": 28,
    "Rarely": 8
  },
  {
    "id": "dest_004",
    "place": "Tokyo",
    "Monthly": 4,
    "Quarterly": 9,
    "Yearly": 20,
    "Rarely": 15
  },
  {
    "id": "dest_005",
    "place": "Dubai",
    "Monthly": 5,
    "Quarterly": 14,
    "Yearly": 22,
    "Rarely": 10
  },
  {
    "id": "dest_006",
    "place": "Rome",
    "Monthly": 2,
    "Quarterly": 8,
    "Yearly": 18,
    "Rarely": 15
  },
  {
    "id": "dest_007",
    "place": "Sydney",
    "Monthly": 1,
    "Quarterly": 6,
    "Yearly": 14,
    "Rarely": 20
  }
]
const CustomTooltip =({active, payload, label}) =>{
    if(active&& payload && payload.length){
        return(
            <div style={{background: '', border: '1px solid #ccc', padding: '10px'}}>
               <strong>{label}</strong>
               <p>{payload[0].name}: {payload[0].value} % travel Monthly</p>
               <p>{payload[1].name}: {payload[1].value} % travel yearly</p>
               

            </div>
        );

    }
    return null;
};

const ResultsChart = () => {
    return (
        <div>
            <h2 className='text-3xl'>How Often People Travel to Popular Destinations</h2>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'place'}></XAxis>
                <YAxis ></YAxis>
                <Tooltip content={<CustomTooltip/>}></Tooltip>
                <Legend/>
                 <Line dataKey='Monthly' name="Monthly Travelers"></Line>
                 <Line dataKey='Yearly' stroke='red' name="Yearly Travelers"></Line>

            </LineChart>
        </div>
    );
};

export default ResultsChart;