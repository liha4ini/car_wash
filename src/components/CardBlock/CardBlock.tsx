import React, {FC} from 'react';

import s from './CardBlock.module.css';
import {Card} from "../Card/Card";

export type CardBlockPropsType = {
    data: CardDataType[]
}

type CardDataType = {
    id: number
    imageUrl: string
    title: string
}

export const CardBlock: FC<CardBlockPropsType> = ({data}) => {

    console.log(data)

    const elements = data.map(el => {
        return (
            <Card key={el.id} title={el.title} imageUrl={el.imageUrl} />
        )
    })

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                {
                    elements
                }
            </div>
        </div>
    );
};