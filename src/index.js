import menuchange from './menu'
import aboutchange from './about'
import './index.css'




const content = document.getElementById("content");

const title = document.getElementById('title');
const navbar = document.getElementById("nav");

const home = document.getElementById("home");
home.onclick = () => {
    window.location.reload();
}

const menu = document.getElementById("menu");
menu.onclick = () => {
    content.innerHTML = "";
    title.style.display = "none";
    menuchange();
}

const about = document.getElementById('about');
about.onclick = () => {
    content.innerHTML = "";
    title.style.display = "none";
    aboutchange();
}



