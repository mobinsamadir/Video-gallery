const gallery = document.getElementById("gallery");

fetch("videos.json")
.then(res => res.json())
.then(videos => {

videos.forEach(v => {

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<video src="${v.video}" muted></video>
<p>${v.title}</p>
`;
card.onclick = () => {

const player = document.getElementById("videoPlayer");
player.src = v.video;

document.getElementById("modal").classList.remove("hidden");

player.play();

};

gallery.appendChild(card);

});

});