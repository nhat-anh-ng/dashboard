import "./radarChart.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default function Chart() {
    const data = [
  {
    subject: 'Patience',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Enthusiasm',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Curiosity',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Creativity',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Perseverance',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Resourcefulness',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

    return(
        <div className="chart">
            <ResponsiveContainer width="100%" aspect={2/1} >
                <RadarChart  outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#1F95EE" fill="#1F95EE" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}