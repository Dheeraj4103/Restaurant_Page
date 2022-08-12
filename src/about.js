import back from "../asset/homeback2.png";

const aboutchange = function () {
  const content = document.getElementById("content");

  const about = document.createElement("div");
  about.className = "about";

  const header = document.createElement("h1");
  header.innerHTML = "Story of Hotel Annapurna";
  about.appendChild(header);

  const para = document.createElement("p");
  para.innerHTML =
    "The main reason Behind starting this Hotel was to give our customers an experience of <b><u>Traditional Bhartiya food</u></b>. We are grateful that we are born in this beautiful and great country, with so many rich tradition and most importantly food. <br>Bhartiyas are blessed with sooo many variety of food, which are delicious and healthy.";

  about.appendChild(para);
  content.appendChild(about);
  document.body.style.backgroundImage = `url(${back})`;
};

export default aboutchange;
