import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'src/components/AppBar';

function Main() {
    return (
        <>
            <AppBar title="Главная"/>
            <section>
                <nav>
                    <ul>
                        <li>
                            <Link to="/prometium">Красновский</Link>
                        </li>
                        <li>
                            <Link to="/wo1kowsky">Волков</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    );
}

export default Main;
