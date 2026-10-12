function firstWord(s) {
  return s.trim().split(/\s+/)[0] || "";
}

function extractFirstWord() {
  const s = document.getElementById("inputString").value;
  document.getElementById("result").textContent = firstWord(s);
}