import React from 'react';
import background from '../assets/img/BG.svg'
import styles from './Services.module.css'
import Accordion from './Accordion'

const Services = ( ) =>{

    return(<div className={styles.services} id="services" >
            <img src={background} alt="" className={styles.background}/>

            <div className={styles.services_container}>
                <h3 className={styles.services_title}>Что входит в услугу по созданию дизайна интернет-магазина?</h3>
                <Accordion/>
            </div>
        </div>)
}
export default Services