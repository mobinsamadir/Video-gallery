const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const player = document.getElementById("videoPlayer");
const closeBtn = document.getElementById("close");

fetch("videos.json")
.then(res => res.json())
.then(videos => {

videos.forEach(v => {

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<img src="${v.thumbnail}">
<p>${v.title}</p>
`;
card.onclick = () => {

modal.classList.remove("hidden");
player.src = v.video;
player.play();

};

gallery.appendChild(card);

});

});

closeBtn.onclick = () => {

modal.classList.add("hidden");
player.pause();
player.src = "";

};