const random = [
  "https://64.media.tumblr.com/4cab52007a28edd4bce2aea396cb9fb0/980cac6e37e83422-f0/s1280x1920/a586c65ed6ff0ac180612f9ade6be7eaa7bbdf9a.png",
  "https://64.media.tumblr.com/f430599ff8136dc8342dba533161dc77/980cac6e37e83422-50/s1280x1920/109f65faa60527da2b53e659c1744db8ef3c1ebb.png",
  "https://64.media.tumblr.com/ae3a7e44ce3b59c67885bcf4c630eb75/980cac6e37e83422-03/s1280x1920/181e0a78a6fa071c6617db11f6112ce95f0e8d3f.png",
  "https://64.media.tumblr.com/9a892b6021a931a9feadf83a0c9e5145/cc67c1afdff5d06b-71/s1280x1920/d643750751abc0189d40f0c6135e637647c7e085.png",
  "https://64.media.tumblr.com/db13841b640301bd8bed0b9739b5ef64/cc67c1afdff5d06b-19/s1280x1920/2a49460ef4a211f57afbe1ea592fce47465fd70f.png",
  "https://64.media.tumblr.com/d68c314699e62a212e1a433d1449e67f/cc67c1afdff5d06b-b7/s1280x1920/ee2f6f3da499c55163ae10b66f42f5a27beb8c4c.png",
  "https://64.media.tumblr.com/adb7433c217fb4c7c76d64fa353cc3c9/980cac6e37e83422-1b/s1280x1920/9f606574bc2fd2919f92b0f5dbf0bff3aae61a99.png",
  "https://64.media.tumblr.com/1b7dc9b4b7e0c22288f42d3d256cff4b/cc67c1afdff5d06b-c9/s1280x1920/f0307bb680f10bb7b033fffb50a5e24abcb8f32a.png",
  "https://64.media.tumblr.com/490290d957989e6d27dfa069bf7c27d8/980cac6e37e83422-1e/s1280x1920/220c73439ad922a79e20ad918a0cb194208fa754.png",
  "https://64.media.tumblr.com/d0bd675782a52b8133ae95f3e84cf98c/980cac6e37e83422-4c/s1280x1920/ddd8c48d4e4e5d5c1961e4f2cb58bbd50f9c9c3c.png",
  "https://64.media.tumblr.com/e66efb1ebc9a01c59150022a25b0e813/980cac6e37e83422-49/s1280x1920/1757acb4cd4f1e6f7b805446b0b174193bffe6c2.png",
  "https://64.media.tumblr.com/387e6f08c27e2d938d94e561ca768cf3/cc67c1afdff5d06b-46/s1280x1920/429d7805b33f15d3e016a83cbda7aaaa994824fc.png",
  "https://64.media.tumblr.com/1200b6490a6047ad78addf5d1eade38e/cc67c1afdff5d06b-5f/s1280x1920/c273abb679b3ce27e40a75806bf404135ae3d4b6.png"
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
