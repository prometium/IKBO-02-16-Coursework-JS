import React, { useState, useEffect } from 'react';
import AppBar from 'src/components/AppBar';

import './ShamrayPage.css';

function ShamrayPage({ data }) {

    useEffect(() => {
        // тут можно писать код
        alert("Hello from ShamrayPage")
    
    });

    return (
        // разметку внутри <>тут</>
        <>
            <AppBar title="Шамрай" />
            <div>Hello!</div>
			<p><shamray>Введите сумму в рублях</shamray></p>
			<input maxlength="25" size="40" type=number id="rubInput" oninput="changeCurrency()">
			<p><shamray>Сумма в долларах</shamray></p>
			<input maxlength="25" size="40" type=number id="dollarOutput" readonly="readonly">
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