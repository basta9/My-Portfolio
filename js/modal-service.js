'use strict';

var isShown = false;
const projectsInfo = {
    vanilla: {
        header: 'Book-Shop',
        desc: 'Written in JS Vanilla, Book-Shop is an App that can be used in any shop that needs to controll & store their information.',
        techList: ['CSS 3', 'HTML 5', 'Vanilla JS', 'I18N', 'Bootstrap'],
        techImgs: ['./assets/img/vanilla-tech.png', './assets/img/bootstrap.png'],
        siteLink: 'https://basta9.github.io/Book-Shop/',
        gitLink: ['https://github.com/basta9/Book-Shop']
    },
    vue: {
        header: 'SleepOver',
        desc: 'SleepOver is built to be a world wide application used for FREE accommodation. Similar to "Couch Surfing". The App has its own User System & interface, User Chat, Booking System & more.',
        techList: ['Vue.js', 'VueX', 'Node JS', 'Web Sockets', 'MongoDB', 'Bootstrap', 'Element IO'],
        techImgs: ['./assets/img/node-js.png', './assets/img/mongo.png', './assets/img/element.svg', './assets/img/bootstrap.png'],
        siteLink: 'https://sleepover.herokuapp.com/',
        gitLink: ['https://github.com/edoco89/sleep-over-frontend', 'https://github.com/edoco89/sleep-over-backend']
    },
    react: {
        header: 'Bitcoin-Wallet',
        desc: 'A simple & small React application that simulates a Bitcoin wallet. The App gets information from an API and enabales to transfer bitcoin to contacts.',
        techList: ['React', 'ES6', 'Mobx', 'Axios', 'Moment.js', 'Animate.css'],
        techImgs: ['./assets/img/react.png','./assets/img/mobx.png','./assets/img/moment.png'],
        siteLink: 'https://basta9.github.io/Bitcoin-wallet/',
        gitLink: ['https://github.com/basta9/Bitcoin-wallet']
    }
    // angular: {
    //     header: 'Meme Generator',
    //     desc: 'A pure vanilla written code, using HTML5 canvas to enable an amusing MEME creator.',
    //     techList: ['CSS 3', 'HTML 5', 'Vanilla JS', 'HTML CANVAS'],
    //     siteLink: '',
    //     gitLink: ''
    // }
}


function toggleModal(project = '') {
    if (isShown) {
        document.querySelector('.modal-container').classList.remove('show-modal')
        document.querySelector('.modal-content').classList.remove('show-content')
    } else {
        if (project === '') return
        setModalContant(project)
        document.querySelector('.modal-container').classList.add('show-modal')
        document.querySelector('.modal-content').classList.add('show-content')
    }
    isShown = !isShown
}


function setModalContant(project) {
    var techList = (projectsInfo[project].techList.map((tech) => `<li>${tech}</li>`)).join('')
    var imgList = (projectsInfo[project].techImgs.map((src) => `<img src="${src}"/>`)).join('')
    var gitList = (projectsInfo[project].gitLink.map((link, idx) => `<a href="${link}"> ${(idx === 0) ? 'See in GitHub!' : 'See Backend in Github!'}</a> <br>`)).join('')
    document.querySelector('.modal-content').innerHTML = `
        <button onclick="toggleModal()">X</button>
        <h2>${projectsInfo[project].header}</h2>
            <section class="proj-info">
                <div class="proj-about">
                    <img src="./assets/img/${projectsInfo[project].header}.jpg" alt="">
                    <p>${projectsInfo[project].desc}</p>
                </div>
                <div class="proj-tech">
                    <div>
                        <b>Technologies used In Project:</b>
                        <ul class="tech-list">
                        ${techList}
                        </ul>
                    </div>
                    <div>
                        ${imgList}
                        <div>
                        <a href="${projectsInfo[project].siteLink}">See Website!</a> <br>
                        ${gitList}
                        </div>
                    </div>
                </div>
            </section>`
}