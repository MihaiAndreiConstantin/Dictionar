var dictionar = new Set()
let savedWords = 0
let words 
function addWordToList() {
    words = document.getElementById("myText").value 
    ++savedWords
    chekWord()
    dictionar.add(words)
    document.getElementById("saved-words").innerHTML += `
<div id = ${savedWords}>
    ${words}
</div>
`;
}

function chekWord() {
    if (dictionar.has(words)) {
        document.getElementById("error").innerHTML = "🚫Your word already Exist in the list"
    } else {
        document.getElementById("error").innerHTML = "✅Succes"
    }
}