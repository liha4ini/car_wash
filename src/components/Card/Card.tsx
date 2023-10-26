import React, { useState } from 'react';

import s from './Card.module.css';

export const Card = ({title, imageUrl}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        // <div className={s.wrapper}>
            <div
                className={s.card}
                style={{
                    backgroundColor: isHovered ? 'black' : 'gray',
                    transition: '0.5s'
            }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className={s.image}
                    src={imageUrl}
                    style={{
                        width: isHovered ? '70%' : '60%',
                        height: isHovered ? '60%' : '50%',
                        borderRadius: '50%',
                        transition: 'width 0.3s, height 0.3s',
                    }}
                    alt="Product"
                />
                <h3>{title}</h3>
            </div>
        // </div>

    );
};

