import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", members: 120 },
  { name: "Feb", members: 140 },
  { name: "Mar", members: 180 },
];

function MemberStats() {
  return (
    <div className="card p-3 shadow-sm">
      <h6>Member Growth</h6>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="members" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MemberStats;
