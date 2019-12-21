import React, { useState, useEffect } from 'react';
import AppBar from 'src/components/AppBar';

import './LegendCreoModPage.css';

function LegendCreoModPage({ data }) {

    useEffect(() => {
        // тут можно писать код
        alert("Hello from LegendCreoModPage")
    
    });

    return (
        // разметку внутри <>тут</>
        <>
            <AppBar title="Иваненко" />
            <div>Hello!</div>
        </>
    );
 }

 export default LegendCreoModPage;