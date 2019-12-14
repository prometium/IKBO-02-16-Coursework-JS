import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
import AppBar from 'src/components/AppBar';

import './prometium-page.css';

const color = '#6200ea';

function PrometiumPage({ data }) {
  return (
    <>
      <AppBar title="Красновский" color={color} />
      <section>
        <div className="prometium-container">
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{
                top: 64,
                right: 32,
                left: 32,
                bottom: 0
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                name="Курс валюты к рублю"
                dataKey="value"
                barSize={20}
                fill={color}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
}

PrometiumPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default PrometiumPage;
