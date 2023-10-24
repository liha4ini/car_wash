import React from 'react';

import s from './Header.module.css';
import logo from '../../assets/mainLogo3.png'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.headerContent}>
                    <img src={logo} alt="logo" className={s.logo}/>
                    <div className={s.headerRightBlock}>
                        <button className={s.btn}>Оставить заявку</button>
                        <span className={s.phoneNumber}>+7 (956) 123-45-67</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

