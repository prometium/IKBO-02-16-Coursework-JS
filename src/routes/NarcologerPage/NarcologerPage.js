import React, { useState, useEffect } from 'react';
import AppBar from 'src/components/AppBar';

import './NarcologerPage.css';

function NarcologerPage({ data }) {

    useEffect(() => {
        // тут можно писать код
        alert("Hello from NarcologerPage")
    
    });

    return (
        // разметку внутри <>тут</>
        <>
            <AppBar title="Очеретная" />
            <div>Hello!</div>
        </>
    );
 }

 export default NarcologerPage;