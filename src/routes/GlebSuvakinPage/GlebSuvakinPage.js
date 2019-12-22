import React, { useState, useEffect } from 'react';
import AppBar from 'src/components/AppBar';

import './GlebSuvakinPage.css';

function GlebSuvakinPage({ data }) {

    useEffect(() => {
        // тут можно писать код
        alert("Hello from GlebSuvakinPage")
    
    });

    return (
        // разметку внутри <>тут</>
        <>
            <AppBar title="Сувакин" />
            <div>Hello!</div>
        </>
    );
 }

 export default GlebSuvakinPage;