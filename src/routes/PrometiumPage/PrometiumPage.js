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
import Button from 'src/components/Button';

import './prometium-page.css';

function PrometiumPage({ data, handleClick }) {
  return (
    <>
      <AppBar title="Красновский" color="primary" />
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
                fill={
                  getComputedStyle(document.documentElement).getPropertyValue(
                    '--color-secondary'
                  ) || '#616161'
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="prometium-buttons-container">
          <Button onClick={handleClick} primary className="prometium-button">
            Обновить
          </Button>
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
  ).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default PrometiumPage;
