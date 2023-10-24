import React from 'react';

import {YMaps, Map} from 'react-yandex-maps';

import s from './YandexMaps.module.css';

export const YandexMaps = () => {

    const placemarkCoordinates = [48.573896, 39.307708]

    return (
        <div className={s.container}>
            <div className={s.mapWrapper}>
                <YMaps>
                    <Map
                        defaultState={{center: [48.573896, 39.307708], zoom: 15}}
                        style={{width: '100%', height: '100%'}}
                    />
                </YMaps>
                <div className={s.cardBlock}>
                    <h3>Контакты</h3>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};



