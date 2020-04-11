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
import MemeComponent from 'src/components/MemeComponent';
import useMeme from 'src/components/MemeComponent/useMeme';
import VKLabel from 'src/components/VKLabel/VKLabel';

import './prometium-page.css';

function PrometiumPage({ data, handleClick }) {
  const { open, closeMeme } = useMeme(true);

  return (
    <>
      <AppBar title="Красновский" color="primary" />
      <MemeComponent open={open} closeMeme={closeMeme} />
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
                fill="#546e7a"
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
      <div
        style={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          margin: '10px'
        }}
      >
        <VKLabel to="akpac" />
      </div>
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
