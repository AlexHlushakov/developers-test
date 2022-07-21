/*import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Circle} from "@mui/icons-material";
import styles from './Accordion.module.css'



export default function SimpleAccordion() {

    const [isOpenOne, setIsOpenOne] = useState(false)
    const [isOpenTwo, setIsOpenTwo] = useState(false)
    const [isOpenThree, setIsOpenThree] = useState(false)
    const [isOpenFour, setIsOpenFour] = useState(false)
    const [isOpenFive, setIsOpenFive] = useState(false)

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const styles = {
        accordion: {
            mb : "10px",
            borderRadius: "15px !important",
            '&::before': {
                content: "none"
            }
        },
        text_open: {
            textAlign: "start",
            width: "100%",
            maxWidth: "1000px"
        }
    }


    return (
        <div>
            <Accordion
                // onChange={() =>{setIsOpenOne(prevState => !prevState)}}
                expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={styles.accordion} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    {isOpenOne ? <Circle style={{ color: "#67AEFC"}}/> : <Circle style={{ color: "#75E169"}}/>}
                    <Typography>Дизайн портала</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={styles.text_open}>
                        Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                // onChange={() =>{setIsOpenTwo(prevState => !prevState)}}
                expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={styles.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    {isOpenTwo ? <Circle style={{ color: "#67AEFC"}}/> : <Circle style={{ color: "#75E169"}}/>}
                    <Typography>Дизайн адаптивной мобильной версии</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={styles.text_open}>
                        Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий.
                        При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана.
                        Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML.
                        Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                // onChange={() =>{setIsOpenThree(prevState => !prevState)}}
                expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={styles.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    {isOpenThree ? <Circle style={{ color: "#67AEFC"}}/> : <Circle style={{ color: "#75E169"}}/>}
                    <Typography>Дизайн десктопной версии</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={styles.text_open}>
                        Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                // onChange={() =>{setIsOpenFour(prevState => !prevState)}}
                expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={styles.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    {isOpenFour ? <Circle style={{ color: "#67AEFC"}}/> : <Circle style={{ color: "#75E169"}}/>}
                    <Typography>Пользовательский интерфейс</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={styles.text_open}>
                        Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                // onChange={() =>{setIsOpenFive(prevState => !prevState)}}
                expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={styles.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    {isOpenFive ? <Circle style={{ color: "#67AEFC"}}/> : <Circle style={{ color: "#75E169"}}/>}
                    <Typography>Микро UX</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={styles.text_open}>
                        Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );*/


    import * as React from 'react';
    import Accordion from '@mui/material/Accordion';
    import AccordionDetails from '@mui/material/AccordionDetails';
    import AccordionSummary from '@mui/material/AccordionSummary';
    import Typography from '@mui/material/Typography';
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Circle} from "@mui/icons-material";
import styles from "./Services.module.css";

    export default function ControlledAccordions() {
        const [expanded, setExpanded] = React.useState(false);

        const handleChange = (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };

        const styles = {
            accordion: {
                mb : "10px",
                borderRadius: "15px !important",
                '&::before': {
                    content: "none"
                }
            },
            text_open: {
                textAlign: "start",
                width: "80%",
                maxWidth: "1000px",
                borderLeft: "1px solid #000",
                paddingLeft: "40px",
                margin: "20px 70px 50px 56px"
            },
            typography: {
                width: '50%',
                flexShrink: 0,
                textAlign: 'start',
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "125%"
            },
            circle_expanded: {
                color: "#67AEFC",
                margin: "4px 28px auto 28px"
            },
            circle_unexpanded: {
                color: "#75E169",
                margin: "4px 28px auto 28px"
            },
            services_title: {
                fontWeight: "800",
                fontSize: "32px",
                lineHeight: "125%",
                textAlign: "center",
                color: "#111111",
                zIndex: 9999
            }
        }

        return (
            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={styles.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        {expanded === 'panel1' ? <Circle sx={styles.circle_expanded}/> : <Circle sx={styles.circle_unexpanded}/>}
                        <Typography sx={styles.typography}>
                            Дизайн портала
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{padding: 0}}>
                        <Typography sx={styles.text_open}>
                            Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={styles.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        {expanded === 'panel2' ? <Circle sx={styles.circle_expanded}/> : <Circle sx={styles.circle_unexpanded}/>}
                        <Typography sx={styles.typography}>Дизайн адаптивной мобильной версии</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{padding: 0}}>
                        <Typography sx={styles.text_open}>
                            Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий.
                            При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана.
                            Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML.
                            Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={styles.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        {expanded === 'panel3' ? <Circle sx={styles.circle_expanded}/> : <Circle sx={styles.circle_unexpanded}/>}
                        <Typography sx={styles.typography}>
                            Дизайн десктопной версии
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{padding: 0}}>
                        <Typography sx={styles.text_open}>
                            Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={styles.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        {expanded === 'panel4' ? <Circle sx={styles.circle_expanded}/> : <Circle sx={styles.circle_unexpanded}/>}
                        <Typography sx={styles.typography}>Пользовательский интерфейс</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{padding: 0}}>
                        <Typography sx={styles.text_open}>
                            Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={styles.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        {expanded === 'panel5' ? <Circle sx={styles.circle_expanded}/> : <Circle sx={styles.circle_unexpanded}/>}
                        <Typography sx={styles.typography}>Микро UX</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{padding: 0}}>
                        <Typography sx={styles.text_open}>
                            Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }

