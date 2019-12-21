import React, { useState, useEffect } from 'react';
import AppBar from 'src/components/AppBar';

import './JustalgitPage.css';

function JustalgitPage({ data }) {

    useEffect(() => {
        // тут можно писать код
        alert("Hello from JustalgitPage")
    
    });

    return (
        // разметку внутри <>тут</>
        <>
            <AppBar title="Ларин" />
            <div>Hello!</div>
        </>
    );
 }

 export default JustalgitPage;