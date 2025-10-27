const convertButton = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")
const inputEl = document.getElementById("input-el")

convertButton.addEventListener("click", function() {
    lengthFind(inputEl.value)
    volumeFind(inputEl.value)
    massFind(inputEl.value)
})

function lengthFind(num) {
    const length = num * 3.281
    const feet = num * 0.3048
    lengthOutput.innerHTML = `${num} meters = ${length.toFixed(3)} feet | ${num} feet = ${feet.toFixed(3)} meters`
}

function volumeFind(num) {
    const gallons = num * 0.264
    const liter = num * 3.78541
    volumeOutput.innerHTML = `${num} liters = ${gallons.toFixed(3)} gallons | ${num} gallons = ${liter.toFixed(3)} liters`
}

function massFind(num) {
    const pound = num * 2.204
    const kilo = num * 0.453592
    massOutput.innerHTML = `${num} kilos = ${pound.toFixed(3)} pounds | ${num} pounds = ${kilo.toFixed(3)} kilos`
}