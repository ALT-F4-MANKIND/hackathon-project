import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// pull from database
const data = [
  {
    name: 'Week 1',
    sleep: 4,
    mood: 2,
    amt: 2,
  },
  {
    name: 'Week 2',
    sleep: 3,
    mood: 1,
    amt: 2,
  },
  {
    name: 'Week 3',
    sleep: 2,
    mood: 9,
    amt: 2,
  },
  {
    name: 'Week 4',
    sleep: 2,
    mood: 3,
    amt: 2,
  },
  {
    name: 'Week 5',
    sleep: 1,
    mood: 4,
    amt: 2,
  },
  {
    name: 'Week 6',
    sleep: 2,
    mood: 3,
    amt: 2,
  },
  {
    name: 'Week 7',
    sleep: 3,
    mood: 4,
    amt: 2,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="50%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="mood" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sleep" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
