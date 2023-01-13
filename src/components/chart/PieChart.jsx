import React from "react";
import { PieChart, Pie , Cell  } from "recharts";

const data01 = [
  {
    name : 'Qualified students',
    value : 60
  },
  {
    name : 'Disqualified students',
    value : 40
  }
]

const PieChartCom = () => {

    const COLORS = ['#623B22', '#DFBAA5'];

        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                        
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div 
    className="w-full flex justify-center items-center bg-[#D9D9D9] mt-5 flex-col pb-4">
    
        <PieChart width={250} height={250}>
        <Pie data={data01} 
        dataKey="value" nameKey="name" 
        cx="50%" cy="50%" 
        outerRadius={90} fill="cyan"
        label={renderCustomizedLabel}
        >
      
        {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
        </PieChart>

        <div className="w-full flex justify-around items-center">

        {
        data01?.map((entry, index) => (
            <div className="flex justify-center items-center" key={index}>
                <div className={`w-3 h-3 bg-[${COLORS[index]}]`}></div>
                <p style={{fontSize:'12px'}} className="ml-1 font-semibold">{entry.name}</p>
            </div>
            ))}

    </div>
    </div>
  )
}

export default PieChartCom;