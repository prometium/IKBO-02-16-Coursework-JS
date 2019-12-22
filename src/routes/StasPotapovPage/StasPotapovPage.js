import React, { useState, useEffect } from 'react';
import AppBar from 'src/components/AppBar';

import './StasPotapovPage.css';

function StasPotapovPage({ data }) {

    useEffect(() => {
        // тут можно писать код
        alert("Hello from StasPotapovPage")
    
    });

    return (
        // разметку внутри <>тут</>
        <>
            <AppBar title="Потапов" />
            <div>Hello!</div>
        </>
    );
 }

 export default StasPotapovPage;