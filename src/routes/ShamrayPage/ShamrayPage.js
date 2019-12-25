import React, { useState, useEffect, useRef } from 'react';
import AppBar from 'src/components/AppBar';
import Footer from "react-footer-comp";

import './ShamrayPage.css';

function ShamrayPage({ data }) {

    const rubInputRef = useRef(null);
    const dollarOutputRef = useRef(null);

    var currency = 1;
    getCurrencyFromCBRF();

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
                    <input maxLength="25" size="100" type="number" ref={rubInputRef} onInput={changeCurrency} />
                    <p className="shamray">Сумма в долларах</p>
                    <input maxLength="25" size="100" type="number" ref={dollarOutputRef} readOnly="readonly" />
                </div>
                <Footer
                    copyrightIcon
                    years={[1996]}
                    height={50}
                    bgColor={"white"}
                    copyrightText
                    copyrightIconStyle={{ color: "black", fontSize: 20, marginRight: 10 }}
                    copyrightTextStyle={{ color: "black", fontSize: 20, marginRight: 10 }}
                    textStyle={{ color: "#1a9f29", fontSize: 16, marginRight: 10 }}
                    text={"Перевод USD\/RUB по актуальному на сегодня курсу валют от Центробанка"}
            />
            </div>
        </>
    );

    function changeCurrency() {
        var rubInput = rubInputRef.current;
        var dollarOutput = dollarOutputRef.current;
        dollarOutput.value = rubInput.value / currency;
    }

    function getCurrencyFromCBRF() {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(rates => rates.json())
        .then((rates) => {
            currency = rates.Valute.USD.Value
            console.log(currency)

        }).catch((err) => {
            console.log('fetch', err)
        })
    }
}

export default ShamrayPage;