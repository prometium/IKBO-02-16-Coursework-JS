import React from 'react';
import AppBar from 'src/components/AppBar';
import Footer from '../../components/Footer/Footer';
import { Checkbox } from '@material-ui/core';

import './GlebSuvakinPage.css';

function GlebSuvakinPage() {
    return (
        <>
            <AppBar title="Сувакин" />
            <div>Это страничка Глеба Сувакина</div>
            <div>Может показаться, что здесь пусто, но вам стоит посмотреть вниз</div>
            <div>А также на хороший checkbox</div>
            <div>Сделанный с помощью сторонней библиотеки Material-UI</div>
            <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }}/>
            <Footer />
        </>
    );
}
 export default GlebSuvakinPage;

