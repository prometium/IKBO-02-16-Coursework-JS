import React, { useState, useEffect } from 'react';
import AppBar from 'src/components/AppBar';

import './VezlimPage.css';

function VezlimPage({ data }) {

    useEffect(() => {
        // тут можно писать код
        alert("Hello from VezlimPage")
    
    });

    return (
        // разметку внутри <>тут</>
        <>
            <AppBar title="Цепковский?" />
            <div>Hello!</div>
        </>
    );
 }

 export default VezlimPage;