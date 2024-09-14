const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");
const sound=document.getElementById("sound");
const btn=document.getElementById("search_btn");

btn.addEventListener("click",()=>{
    let inpWord=document.getElementById("inp_word").value;
    fetch(`${url}${inpWord}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML=`<div class="word">
        <h3>${inpWord}</h3>
        <button onclick=playSound()>
        <i class="fas fa-volume-up"></i>
        </button>
        </div>
        <div class="details">
        <p>${data[0].meanings[0].partofspeech}</p>
        <p>${data[0].phonetic}</p>
        </div>
        <p class="word_meaning">
        ${data[0].meanings[0].definitions[0].definition}</p>
        <p class="word_example">
        ${data[0].meaning[0].definitions[0].example || ""}
        </p>`
        sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`)
    })
    .catch(()=>{
        result.innerHTML=`<h3 class="error">
        couldn't find the world</h3>`;
    })
})
function playSound(){
    sound.play();
}