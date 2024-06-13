'use client';

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: '19.00',
    total: 27
  },
  {
    name: '21.00',
    total: 28
  },
  {
    name: '23.00',
    total: 27
  },
  {
    name: '01.00',
    total: 26.5
  },
  {
    name: '03.00',
    total: 26.5
  },
  {
    name: '05.00',
    total: 26
  },
  {
    name: '07.00',
    total: 26
  },
  {
    name: '09.00',
    total: 27
  },
  {
    name: '11.00',
    total: 27
  },
  {
    name: '13.00',
    total: 27
  },
  {
    name: '15.00',
    total: 27
  },
  {
    name: '17.00',
    total: 27
  }
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} >
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Line type="monotone" dataKey="total" stroke="#adfa1d" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
