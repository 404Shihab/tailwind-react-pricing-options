import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { "id": 1, "name": "Rahim", "math": 85, "physics": 78, "chemistry": 82 },
  { "id": 2, "name": "Karim", "math": 72, "physics": 69, "chemistry": 75 },
  { "id": 3, "name": "Ayesha", "math": 91, "physics": 88, "chemistry": 90 },
  { "id": 4, "name": "Nusrat", "math": 66, "physics": 70, "chemistry": 68 },
  { "id": 5, "name": "Hasan", "math": 80, "physics": 76, "chemistry": 79 },
  { "id": 6, "name": "Sadia", "math": 95, "physics": 92, "chemistry": 94 },
  { "id": 7, "name": "Tanvir", "math": 60, "physics": 65, "chemistry": 63 },
  { "id": 8, "name": "Mim", "math": 88, "physics": 84, "chemistry": 86 },
  { "id": 9, "name": "Arif", "math": 74, "physics": 71, "chemistry": 73 },
  { "id": 10, "name": "Jannat", "math": 82, "physics": 79, "chemistry": 81 }
]

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" ></Line>
                <Line dataKey="chemistry" stroke='orange' ></Line>

            </LineChart>
        </div>
    );
};

export default ResultsChart;