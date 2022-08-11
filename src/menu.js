import icon from "../asset/card1.png";
import icon1 from "../asset/card2.png";
import icon2 from "../asset/card3.png";
import icon3 from "../asset/card4.png";
import icon4 from "../asset/card5.png";
import icon6 from "../asset/card6.png";
import icon7 from "../asset/card7.png";
import icon8 from "../asset/card8.png";
import back from "../asset/homeback2.png";
import './style.css'
const makecard = (imgsrc, title, price) => {
    const card = document.createElement('div');
    card.className = "card";
    const image = new Image();
    image.className = "card-img";
    image.src = imgsrc;

    card.appendChild(image);

    const detail = document.createElement('div');
    detail.className = "detail";

    const ttl = document.createElement('h1');
    ttl.innerHTML = title;
    detail.appendChild(ttl);

    const itmprice = document.createElement('h3');
    itmprice.innerHTML = `At Rs <u>${price}</u> per plate`;
    detail.appendChild(itmprice);

    const more = document.createElement('button');
    more.innerHTML = "More";
    detail.appendChild(more);

    const order = document.createElement('button');
    order.innerHTML = "Order";
    detail.appendChild(order);

    card.appendChild(detail);
    
    return card;
}

// var body = document.getElementsByTagName("body")[0];

const menuchange = function () {
    const content = document.getElementById("content");

    card1 = makecard(icon2, "Pooran Poli", 100);
    content.appendChild(card1);
    var card1 = makecard(icon1, "Veg Thali", 150);
    content.appendChild(card1);
    card1 = makecard(icon3, "Idli", 60);
    content.appendChild(card1);
    card1 = makecard(icon4, "Masala Dosa", 60);
    content.appendChild(card1);
    card1 = makecard(icon6, "Panneer Tikka", 80);
    content.appendChild(card1);
    card1 = makecard(icon7, "Chole bhature", 120);
    content.appendChild(card1);
    card1 = makecard(icon8, "Rajasthani Thali", 200);
    content.appendChild(card1);
    var card = makecard(icon, "Biryani", 110);
    content.appendChild(card);
    document.body.style.backgroundImage = `url(${back})`;
};

export default menuchange