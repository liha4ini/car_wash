import React, {ReactNode, useEffect, useState} from 'react';

import bg1 from '../../assets/bg_1_4K_dark.jpg';
import bg2 from '../../assets/bg_2_4K_dark.jpg';
import bg3 from '../../assets/bg_4_dark.jpg';



type BackgroundChangerPropsType = {
    children: ReactNode
}

export const BackgroundChanger = ({children}: BackgroundChangerPropsType) => {
    const [bgColor, setBgColor] = useState<bg1 | bg2 | bg3>(bg1); // Изначальный цвет фона

    useEffect(() => {
        const colors = [bg1, bg2, bg3]; // Массив цветов для смены фона
        let index = 0;

        const interval = setInterval(() => {
            setBgColor(colors[index]); // Установка нового цвета фона
            index = (index + 1) % colors.length; // Переход к следующему цвету
        }, 2000);

        return () => {
            clearInterval(interval); // Очистка таймера при размонтировании компонента
        }
    }, []);

    return (
        <div style={{
            background: `center / cover no-repeat url(${bgColor})`,
            transition: 'background-image 0.5s ease',
            // filter: 'brightness(0.4)',
        }}>
                {children}
        </div>
    );
};







