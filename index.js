const button = document.querySelector(".btn");
const borderWidth = document.querySelector("#border-width");
const edgeSize = document.querySelector("#edge-size");
const borderWidthOutput = document.querySelector(".bw output");
const edgeSizeOutput = document.querySelector(".es output");

borderWidth.addEventListener("input", () => {
  button.style.setProperty("--border-width", borderWidth.value + "em");
  borderWidthOutput.innerText = parseFloat(borderWidth.value, 10).toFixed(2) + "em";
});

edgeSize.addEventListener("input", () => {
  button.style.setProperty("--edge-size", edgeSize.value + "em");
  edgeSizeOutput.innerText = parseFloat(edgeSize.value, 10).toFixed(2) + "em";
});
