import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const PassengerChart = ({passengerPromise}) => {

   const passengerDataRes = use(passengerPromise)
   
   const passengerData = passengerDataRes.data;
//    data processing for the chart 
   const passengerChartData = passengerData.map(singlePassengerData => {
    const passenger = {
        id: singlePassengerData.passengerId,
        name: singlePassengerData.name,
        sydneyVisited: singlePassengerData.visitInfo.sydney,
        franceVisited: singlePassengerData.visitInfo.france,
        italyVisited: singlePassengerData.visitInfo.italy
    }
    return passenger;
   })

   console.log(passengerChartData)
    return (
        <div>
            <BarChart width={500} height={300} data={passengerChartData}>

                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar fill='green' dataKey="sydneyVisited"></Bar>
                <Bar fill='yellow' dataKey="franceVisited"></Bar>
                <Bar fill='blue' dataKey="italyVisited"></Bar>

            </BarChart>
        </div>
    );
};

export default PassengerChart;