import React, { useState, useEffect, useRef } from 'react';
import AppBar from 'src/components/AppBar';

import './ShamrayPage.css';

function ShamrayPage({ data }) {

    const rubInputRef = useRef(null);
    const dollarOutputRef = useRef(null);

    useEffect(() => {
        // тут можно писать код
        //alert("Hello from ShamrayPage")

    });

    return (
        <>
            <AppBar title="Шамрай" color="#1a9f29" />
            <div className="outer">
                <div className="inner">
                    <p className="shamray">Введите сумму в рублях</p>
                    <input maxLength="25" size="40" type="number" ref={rubInputRef} onInput={changeCurrency} />
                    <p className="shamray">Сумма в долларах</p>
                    <input maxLength="25" size="40" type="number" ref={dollarOutputRef} readOnly="readonly" />
                </div>
            </div>
        </>
    );

    function changeCurrency() {
        var rubInput = rubInputRef.current;
        var dollarOutput = dollarOutputRef.current;
        var diff = 65;
        dollarOutput.value = rubInput.value / diff;
    }
}

export default ShamrayPage;