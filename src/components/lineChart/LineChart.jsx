import "./lineChart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart() {
    const data = [
  {
    name: 'Oct',
    uv: 60,
    pv: 10,
  },
  {
    name: 'Nov',
    uv: 10,
    pv: 30,
  },
  {
    name: 'Dec',
    uv: 50,
    pv: 15,
  },
  {
    name: 'Jan',
    uv: 20,
    pv: 55,
  },
  
];

    return(
        <div className="chart">
            <h4 className="chartTitle">Growth Analyst</h4>
            <ResponsiveContainer width="100%" aspect={2/1} >
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#808191"/>
                    <Line type="monotone" dataKey="uv" stroke="#1780FF" />
                    <Line type="monotone" dataKey="pv" stroke="#E087EE" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}