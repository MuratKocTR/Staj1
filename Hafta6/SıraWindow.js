const electron = require("electron")
const { ipcRenderer }=electron;

ipcRenderer.on("siradaki:addItem", (e,siradaki)=>{

const input = document.querySelector(".siradaki-input")

input.innerText=siradaki.text


})