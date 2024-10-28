import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { id: 1, name: "Student A", marks: 78 },
        { id: 2, name: "Student B", marks: 85 },
        { id: 3, name: "Student C", marks: 90 },
        { id: 4, name: "Student D", marks: 65 },
        { id: 5, name: "Student E", marks: 92 },
        { id: 6, name: "Student F", marks: 88 },
        { id: 7, name: "Student G", marks: 76 },
        { id: 8, name: "Student H", marks: 83 },
        { id: 9, name: "Student I", marks: 95 },
        { id: 10, name: "Student J", marks: 80 }
    ];

    return (
        <div>
            <LChart  width={500} height={500} data={mathMarksData}>
                <Line dataKey="marks" stroke="red"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;