import React, { useState, useEffect } from 'react';
import AppBar from 'src/components/AppBar';

import './LulusuzakuPage.css';

function LulusuzakuPage({ data }) {

    useEffect(() => {
        // тут можно писать код
        alert("Hello from LulusuzakuPage")
    
    });

    return (
        // разметку внутри <>тут</>
        <>
            <AppBar title="Очеретная" />
            <div>Hello!</div>
        </>
    );
 }

 export default LulusuzakuPage;