import React from 'react';

import {YMaps, Map, Placemark} from 'react-yandex-maps';

import s from './YandexMaps.module.css';

export const YandexMaps = () => {

    const mapState = {
        center: [48.573896, 39.307708],
        zoom: 15,
    };

    const placemarkCoordinates = [48.573896, 39.307708]

    return (
        <div className={s.container}>
            <div className={s.mapWrapper}>
                <YMaps>
                    <Map state={mapState} width="100%" height="100%">
                        <Placemark geometry={placemarkCoordinates} />
                    </Map>
                </YMaps>
                <div className={s.cardBlock}>
                    <h2>Контакты</h2>
                    <div className={s.contactsBlock}>
                        <span className={s.title}>Адрес центра:</span>
                        <span className={s.info}>г.Луганск, ул. 3-я Фрунзенская, 19</span>
                    </div>
                    <div className={s.contactsBlock}>
                        <span className={s.title}>Телефон:</span>
                        <span className={s.info}>+7 (956) 123-45-67</span>
                    </div>
                    <div className={s.contactsBlock}>
                        <span className={s.title}>E-mail:</span>
                        <span className={s.info}>some.email@gmai.com</span>
                    </div>
                    <div className={s.contactsBlock}>
                        <span className={s.title}>Время работы:</span>
                        <span className={s.info}>ПН-ВС с 09:00 до 20:00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};



