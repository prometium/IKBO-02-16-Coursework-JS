import React from 'react';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core';

import './VinnikovPage.css';

import AppBar from 'src/components/AppBar';
import Whois from 'src/components/Whois';

const color = '#253C65';

const useStyles = makeStyles({
  table: {
    width: 650,
    margin:'10px auto',
    border:'1px solid #ccc'
  },
});

function VinnikovPage(){
  let [data, setData] = React.useState({ ip: "193.41.140.35", nslist: Whois("193.41.140.35")});

  function handleChange(event) {
    setData({...data, ip: event.target.value});
  }

  function handleSubmit(event){
    var ns =  Whois(data.ip);
    if(ns){
      setData({...data,nslist: ns});
    }
    event.preventDefault();
  }
  const classes = useStyles();
    return (
      <>
      <AppBar title="Винников" color={color} />
      <section>
        
      <form className="" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="searchWrapper">
        <TextField label="IP адрес" placeholder="Введите интересующий вас IP адрес..." style={{ 
    width: '100%'  }} id="outlined-full-width" variant="outlined" value={data.ip} onChange={handleChange} />
    </div>
      </form>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Свойство</TableCell>
            <TableCell align="left">Значение</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.nslist.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </section>
      </>
    );
}

export default VinnikovPage;