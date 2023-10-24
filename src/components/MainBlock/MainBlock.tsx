import React from 'react';

import s from './MainBlock.module.css';

export const MainBlock = () => {
    return (
        <div className={s.mainBlock}>
            <h2 className={s.subText}>Мы гарантируем качество услуг и быстроту их выполнения!</h2>
            <h1 className={s.mainText}>Лучшая сеть детейлинг центров в Луганске</h1>
            <div className={s.orderBlock}>
                <span className={s.orderText}>Просто нажмите на кнопку и забронируйте удобное для Вас время, а об остальном позаботимся мы</span>
                <button className={s.orderBtn}>Оставить заявку</button>
            </div>
        </div>
    );
};
