const random = [
  "https://vg.pe.hu/1f/01/001.jpg",
  "https://vg.pe.hu/1f/02/01.jpg",
  "https://vg.pe.hu/1f/03/img/000.jpg",
  "https://vg.pe.hu/1f/04/img/000.jpeg",
  "https://vg.pe.hu/1f/05/img/000.png",
  "https://vg.pe.hu/1f/kaisei/front/001.jpg",
  "https://vg.pe.hu/1f/kaisei/front/002.jpg",
  "https://vg.pe.hu/1f/kaisei/back/001.jpg",
  "https://vg.pe.hu/1f/kaisei/back/002.jpg",
  "https://vg.pe.hu/1f/kaisei/back/003.jpg"
];

function randomImg(randomArray) {
  var random =
    randomArray[Math.floor(Math.random() * randomArray.length)];
  console.log(random);
  return random;
}
function sentenceGenerator() {
  var sentence = `<img src="${randomImg(random)}">`;
  document.querySelector(".random").innerHTML = sentence;
}
window.setInterval(function () {
  sentenceGenerator();
}, 1000);
sentenceGenerator();
