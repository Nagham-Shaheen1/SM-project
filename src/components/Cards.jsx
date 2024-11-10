import React from 'react';
import { Card, Text, Title, Stack } from '@mantine/core';
import { AreaChart } from '@mantine/charts';

// Sample data for the AreaCharts
const data1 = [
    { date: '2023-01-01', apples: 30, oranges: 20, tomatoes: 10 },
    { date: '2023-02-01', apples: 50, oranges: 30, tomatoes: 20 },
    { date: '2023-03-01', apples: 70, oranges: 40, tomatoes: 30 },
];

const data2 = [
    { date: '2023-01-01', apples: 20, oranges: 30, tomatoes: 40 },
    { date: '2023-02-01', apples: 40, oranges: 50, tomatoes: 60 },
    { date: '2023-03-01', apples: 60, oranges: 70, tomatoes: 80 },
];

const data3 = [
    { date: '2023-01-01', apples: 10, oranges: 40, tomatoes: 70 },
    { date: '2023-02-01', apples: 30, oranges: 60, tomatoes: 90 },
    { date: '2023-03-01', apples: 50, oranges: 80, tomatoes: 110 },
];

const Cards = () => {
    return (
      <AreaChart
      h={300}
      data={data2}
      dataKey="date"
      type="stacked"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
    );
};

export default Cards;