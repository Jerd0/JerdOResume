import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faTerminal, faCode, faChalkboardTeacher, faUserGraduate, faUserShield, faUserTie} from '@fortawesome/free-solid-svg-icons'

const imgsList = (prefix,n) => {
    let arr = [];
    for(let i = 1; i <= n; i++)
        arr.push(require(`./images/${prefix}_${i}.jpg`))

    return arr;
}

export default {
    
    "menu" : [

        {
            'label':'Вступление',
            'link':'intro-section'
        },
        {
            'label':'Портфолио',
            'link':'portfolio-section'
        },
        {
            'label':'Обо мне',
            'link':'timeline-section'
        },
        {
            'label':'Контакты',
            'link':'contact-section'
        }
    ],

    "resume" : [
        "Бакалавр программной инженерии и почти Магистр.",
        "Более 5 лет в вузе. Живу в Санкт-Петербурге.",
        "Ищу стажировку по направлениям: Frontend developer или QA",
        "Также готов к позиции Junior.",
        "Backend => python;",
        "Frontend => Javascript, React;",
        `UI => HTML; CSS; Bootstrap4; Semantic UI;`,
        "Wordpress Developer junior;",
        "Языки: Русский (родной), English (B1)."
    ],
    
    "portfolio" : [
        {
            "key":1,
            "title" : "NetKlils",
            "skills" : "Javascript, HTML, CSS",
            "description" : "Разработка вебсайта похожего на нетфликс, с подключением API.",
            "thumb" : require("./images/Screenshot_2020-06-15 Netklicks.png"),
            "link" : "https://netclicksjerd0.firebaseapp.com/",
            "imgs" : imgsList('Netklicks',5)
        },

        {
            "key":2,
            "title" : 'Web-App "Aliense Go Home!"',
            "skills" : "Convas, React, Redux",
            "description" : "Было разработано по гайду веб-приложение.",
            "thumb" : require("./images/Screenshot_2020-06-15 React App.png"),
            "link" : "https://jerdo1game.web.app/",
            "imgs" : imgsList('Aliense',2)
        },
        {
            "key":3,
            "title" : "Тестовое задание в JB (первый опыт)",
            "skills" : "React, Flask",
            "description" : "SPA выгружающее данные за определённый интервал времени",
            "thumb" : require("./images/JB.png"),
            "link" : "https://github.com/Jerd0/tzjbfront",
            "imgs" : imgsList('JB',4)
        },
        {
            "key":4,
            "title" : "EXCEL на чистом JavaScript",
            "skills" : "JavaScript",
            "description" : "Для лучшего понимания работы, была разработана программа работающая подобно excel.",
            "thumb" : require("./images/Screenshot_2020-06-15 Pure JavaScript Excel.png"),
            "link" : "https://exceljs-98d49.web.app/#",
            "imgs" : imgsList('Excel',4)

        },
        {
            "key":5,
            "title" : "TelegramBot",
            "skills" : "JavaScript",
            "description" : "Был написан бот для Telegram",
            "thumb" : require("./images/Telegram.jpg"),
            "link" : "https://github.com/Jerd0/telegram_Bot",
            "imgs" : imgsList('Telegram',5)

        },
        {
            "key":6,
            "title" : "Cертификаты",
            "skills" : "HTML,CSS,JavaScript, and other",
            "description" : "Мои сертификаты",
            "thumb" : require("./images/Screenshot_2020-06-23 freeCodeCamp org.png"),
            "link" : "https://spb.hh.ru/applicant/resumes/view?resume=a390bf87ff078676200039ed1f526178505837",
            "imgs" : imgsList('port_cert',7)
        }
    ],

    "timeline":[
        {
            "key":1,
            "icon":<FontAwesomeIcon icon={faTerminal} size="2x" className="icon" />,
            "year":"2011",
            "description1":"Впервые вылечил компьютер от вируса.",
            "description2":"Появилась тяга к разработке.",
            "spacing":""
        },
        {
            "key":2,
            "icon":<FontAwesomeIcon icon={faHeart} size="2x" className="icon" />,
            "year":"2005",
            "description1":"Первый раз сел за компьютер",
            "description2":"Появилась страсть к технике.",
            "spacing":""
        },        
        {
            "key":3,
            "icon":<FontAwesomeIcon icon={faChalkboardTeacher} size="2x" className="icon" />,
            "year":"2011",
            "description1":"Написал первый сайт",
            "description2":"Разумеется в блокноте",
            "spacing":""
        },        
        {
            "key":4,
            "icon":<FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" />,
            "year":"2011",
            "description1":"Узнал что такое HTML в школе",
            "description2":"",
            "spacing":""
        },        
        {
            "key":5,
            "icon":<FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" />,
            "year":"2015",
            "description1":"Закончил лицей в Калининграде",
            "description2":"Набрав максимальный балл ЕГЭ по информатике в школе",
            "spacing":""
        },        
        {
            "key":6,
            "icon":<FontAwesomeIcon icon={faCode} size="2x" className="icon" />,
            "year":"2012",
            "description1":"Узнал, что есть другие языки программирования",
            "description2":"Скачав стилер от друга.",
            "spacing":""
        },        
        {
            "key":7,
            "icon":<FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" />,
            "year":"2016",
            "description1":'Начал обучение в "Военмехе" ',
            "description2":"по специальности Программная инженерия",
            "spacing":""
        },        
        {
            "key":8,
            "icon":<FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" />,
            "year":"2015",
            "description1":"Поступил на обучение в Политех",
            "description2":"проучившись там один год, перевёлся в Военмех",
            "spacing":""
        },        
        {
            "key":9,
            "icon":<FontAwesomeIcon icon={faCode} size="2x" className="icon" />,
            "year":"2019",
            "description1":'Определился с будущей профессией',
            "description2":"Начал изучать react и углублять знания в html,css,js.",
            "spacing":""
        },
        {
            "key":10,
            "icon":<FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" />,
            "year":"2019",
            "description1":"Защитил диплом бакалавра",
            "description2":"Пошёл в магистратуру в СПбГУАП",
            "spacing":""
        },        
        {
            "key":11,
            "icon":<FontAwesomeIcon icon={faUserShield} size="2x" className="icon" />,
            "year":"2020",
            "description1":"Начал проходить тесты, для получения сертификатов",
            "description2":"",
            "spacing":""
        },
        {
            "key":12,
            "icon":<FontAwesomeIcon icon={faUserGraduate} size="2x" className="icon" />,
            "year":"2020",
            "description1":"Начал нарабатывать портфолио и смотреть чужие курсы",
            "description2":"Примеры представлены выше",
            "spacing":""
        },        
        {
            "key":13,
            "icon":null,
        },
        {
            "key":14,
            "icon":<FontAwesomeIcon icon={faUserTie} size="2x" className="icon" />,
            "year":"2020 - Now",
            "description1":"Ищу работу intern Frontend developer",
            "description2":"Готов к изучению нового материала.",
            "spacing":""
        }

    ],
    'contact':[
        'Cпасибо за посещение!',
        'Я вас заинтересовал?',
        'Вы можете найти меня здесь.'
    ]
}