import React, { useState, useEffect } from 'react';
import AppBar from 'src/components/AppBar';

import './ShamrayPage.css';

function ShamrayPage({ data }) {

    useEffect(() => {
        // тут можно писать код
        //alert("Hello from ShamrayPage")

    });

    return (
        <>
            <AppBar title="Шамрай" />
            <div>
                <p className="shamray">Введите сумму в рублях</p>
                <input maxLength="25" size="40" type={"number"} id="rubInput" onInput={changeCurrency} />
                <p className="shamray">Сумма в долларах</p>
                <input maxLength="25" size="40" type={"number"} id="dollarOutput" readOnly="readonly" />
            </div>
        </>
    );
}

function changeCurrency() {
    var rubInput = document.getElementById('rubInput');
    var dollarOutput = document.getElementById('dollarOutput');
    var diff = 65;
    dollarOutput.value = rubInput.value / diff;
}

export default ShamrayPage;