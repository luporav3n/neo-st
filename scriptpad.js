
function saveScript() {
  const title = document.getElementById("scriptTitle").value;
  const text = document.getElementById("scriptText").value;
  const tags = document.getElementById("scriptTags").value.trim().split(/\s+/).filter(Boolean);
  if (!title || !text) return;
  let scripts = JSON.parse(localStorage.getItem("scripts") || "[]");
  scripts.unshift({ title, text, tags });
  localStorage.setItem("scripts", JSON.stringify(scripts));
  document.getElementById("scriptTitle").value = "";
  document.getElementById("scriptText").value = "";
  document.getElementById("scriptTags").value = "";
  renderScriptPad();
}
function renderScriptPad() {
  const list = document.getElementById("scriptList");
  const stored = JSON.parse(localStorage.getItem("scripts") || "[]");
  list.innerHTML = "";
  stored.forEach((s, i) => {
    const tagLinks = s.tags.map(t => `<span class='tag'>#${t}</span>`).join(" ");
    list.innerHTML += `<div class='scriptBlock'><div class='scriptTitle'>${s.title}</div>${s.text}<br>${tagLinks}</div>`;
  });
  renderTagList();
}
function renderTagList() {
  const out = document.getElementById("tagList");
  const stored = JSON.parse(localStorage.getItem("scripts") || "[]");
  const tagSet = new Set();
  stored.forEach(s => s.tags.forEach(t => tagSet.add(t)));
  out.innerHTML = Array.from(tagSet).map(t => `<span class='tag'>#${t}</span>`).join(" ");
}
