
const vols = [
  { title: "Vol.1│眠るようにして狂え", body: "Lupo Protocolは覚醒の装置であり、自己再起動を目的とする。" }
];

function renderVols() {
  const out = document.getElementById("volList");
  vols.forEach(v => {
    out.innerHTML += `<div><strong>${v.title}</strong><br>${v.body}</div><hr>`;
  });
}
window.onload = renderVols;
