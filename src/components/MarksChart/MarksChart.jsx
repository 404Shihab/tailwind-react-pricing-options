import React, { use } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    // console.log(marksData);

    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.subjects.physics,
            chemistry: studentData.subjects.chemistry,
            math: studentData.subjects.math

        }
        return student;
    })
    console.log(marksChartData)
    return (
  <div className="w-full h-80">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={marksChartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="physics" fill="yellow" />
        <Bar dataKey="chemistry" fill="blue" />
        <Bar dataKey="math" fill="orange" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
};

export default MarksChart;