import React from 'react';
import styles from './MainScreen.module.css';
import elipseBig from '../assets/img/Ellipse 2.svg'
import elipseSmall from '../assets/img/Ellipse 3.svg'
import cart from '../assets/img/Cart is Empty.svg'
import element from '../assets/img/Layer 9 copy 3.svg'

const MainScreen = ( ) =>{

    return(
        <div className={styles.main_screen}>
            <img src={elipseBig} alt="" className={styles.elipse_big}/>
            <img src={elipseSmall} alt=""className={styles.elipse_small}/>
            <img src={element} alt="" className={styles.element}/>
            <div className={styles.cart_block} >
                <img src={cart} alt="" className={styles.cart}/>
                <div className={styles.cart_text_block}>
                    <h2>Разработка интернет-магазина
                        с нуля за неделю</h2>
                    <p>Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета - от фирменного стиля
                        до пользовательского интерфейса в сжатые сроки
                        с командой Virtual Designers</p>
                    <button>Заказать</button>
                </div>
            </div>


    </div>)

}
export default MainScreen