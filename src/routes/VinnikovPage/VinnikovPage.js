import React from 'react';
import { MDBCol, MDBInput } from "mdbreact";

import './VinnikovPage.css';

import AppBar from 'src/components/AppBar';
import Whois from 'src/components/Whois';

const color = '#253C65';


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
    return (
      <>
      <AppBar title="Винников" color={color} />
      <section>
        
      <form onSubmit={handleSubmit}>
      <MDBCol md="6">
      <MDBInput hint="Введите интересующий вас IP" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" value={data.ip} onChange={handleChange} />
    </MDBCol>
        
        </form>
        <div style={{ padding: 20 }}>
            <div><b>IP: </b>{data.nslist.ip}</div>
            <div><b>Hostname: </b>{data.nslist.hostname}</div>
            <div><b>City: </b>{data.nslist.city}</div>
        </div>
      </section>
      </>
    );
}

export default VinnikovPage;