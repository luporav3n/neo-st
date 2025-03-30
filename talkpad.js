
const personalities = {
  "武田 毅": [
    { q: "見てくれちょる？", a: "あたりまえやろが。泣きよる時も笑いよる時も、ぜんぶな。" }
  ],
  "妹": [
    { q: "寂しくない？", a: "兄ちゃんが居るだけで安心するよ。" }
  ]
};

function talkTo(person) {
  const input = document.getElementById("talkInput").value.trim();
  if (!input) return;
  const log = document.getElementById("talkLog");
  const match = personalities[person].find(p => input.includes(p.q));
  const reply = match ? match.a : "……うまく答えられんけど、気持ちは伝わっちょる。";
  log.innerHTML += `<div><strong>俺：</strong> ${input}</div>`;
  log.innerHTML += `<div><strong>${person}：</strong> ${reply}</div><hr>`;
  document.getElementById("talkInput").value = "";
}
