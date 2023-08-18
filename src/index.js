import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/homePage/home.html")
router.add("/about", "/pages/aboutPage/about.html")
router.add("/contact", "/pages/contactPage/contact.html")
router.add(404, "/pages/404/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const homeBtn = document.querySelector('.home');
const aboutBtn = document.querySelector('.about');
const contactBtn = document.querySelector('.contact');

function homeOn() {
  homeBtn.classList.add('nav-link')
  aboutBtn.classList.remove('nav-link')
  contactBtn.classList.remove('nav-link')
}


function aboutOn() {
  homeBtn.classList.remove('nav-link')
  aboutBtn.classList.add('nav-link')
  contactBtn.classList.remove('nav-link')
}

function contactOn() {
  homeBtn.classList.remove('nav-link')
  aboutBtn.classList.remove('nav-link')
  contactBtn.classList.add('nav-link')
}

homeBtn.addEventListener('click', homeOn);
aboutBtn.addEventListener('click', aboutOn);
contactBtn.addEventListener('click', contactOn);