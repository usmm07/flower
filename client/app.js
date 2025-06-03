const tg = window.Telegram.WebApp;
tg.expand();

const bouquets = [
  { name: "Розы Классика", price: 120000, img: "https://i.imgur.com/6k1R4jQ.jpg" },
  { name: "Розы Микс", price: 130000, img: "https://i.imgur.com/V5FbVFY.jpg" },
  { name: "Тюльпаны", price: 95000, img: "https://i.imgur.com/CqxwsrN.jpg" },
  { name: "Полевые цветы", price: 80000, img: "https://i.imgur.com/G6gZCto.jpg" },
  { name: "Лилии белые", price: 110000, img: "https://i.imgur.com/hHZBPls.jpg" },
  { name: "Пионы розовые", price: 125000, img: "https://i.imgur.com/bI7pgc5.jpg" },
  { name: "Хризантемы", price: 85000, img: "https://i.imgur.com/dIgdlNn.jpg" },
  { name: "Герберы", price: 90000, img: "https://i.imgur.com/jVcXN1R.jpg" },
  { name: "Ромашки", price: 70000, img: "https://i.imgur.com/03UuUPH.jpg" },
  { name: "Подсолнухи", price: 100000, img: "https://i.imgur.com/5k6bF6G.jpg" },
  { name: "Орхидеи", price: 145000, img: "https://i.imgur.com/EVBGzq7.jpg" },
  { name: "Цветы в коробке", price: 135000, img: "https://i.imgur.com/8nI3Dhf.jpg" },
  { name: "Гортензии", price: 140000, img: "https://i.imgur.com/lcXCrHa.jpg" },
  { name: "Авторский букет", price: 160000, img: "https://i.imgur.com/E3cZPIv.jpg" }
];

const container = document.getElementById("bouquets");
container.innerHTML = "";

bouquets.forEach(b => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${b.img}" alt="${b.name}"/>
    <h3>${b.name}</h3>
    <p>${b.price} сум</p>
    <button onclick='sendOrder(${JSON.stringify(JSON.stringify(b))})'>Заказать</button>
  `;
  container.appendChild(card);
});

function sendOrder(data) {
  tg.sendData(data);
  tg.close();
}
