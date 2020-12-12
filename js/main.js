console.log("we here");


document.getElementById('words').addEventListener('change', voice)

function voice() {

    const synth = window.speechSynthesis
    let yourWords = document.getElementById('words').value
    document.getElementById("sayWhat").innerText = yourWords
    document.getElementById('words').value = ''


    let wordsToSay = new SpeechSynthesisUtterance(yourWords)
    synth.speak(wordsToSay)
}