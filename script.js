const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

// btn.addEventListener("click", () => {
//     let inpWord = document.getElementById("inp-word").value;
//     fetch(`${url}${inpWord}`)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             result.innerHTML = `
//             <div class="word">
//                     <h3>${inpWord}</h3>
//                     <button onclick="playSound()">
//                         <i class="fas fa-volume-up"></i>
//                     </button>
//                 </div>
//                 <div class="details">
//                     <p>${data[0].meanings[0].partOfSpeech}</p>
//                     <p>/${data[0].phonetic || ''}/</p>
//                 </div>
//                 <p class="word-meaning">
//                    ${data[0].meanings[0].definitions[0].definition}
//                 </p>
//                 <p class="word-example">
//                     ${data[0].meanings[1].definitions[0].example || ""}
//                 </p>`;
//             sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
//         })
//         .catch(() => {
//             result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
//         });
// });
// function playSound() {
//     sound.play();
// }

// async await

btn.addEventListener("click", async () => {
  let inpWord = document.getElementById("inp-word").value;
 try{
    let word_response = await fetch(`${url}${inpWord}`);
    let word_data = await word_response.json();
    // append sound to audio
    sound.setAttribute('src',`${word_data[0].phonetics[1].audio}`)
    // append word_data to result
    result.innerHTML = `
          <div class="word">
          <h3>${inpWord}</h3>
          <button onclick="open_sound()">
              <i class="fas fa-volume-up"></i>
          </button>
          </div>
          <div class="details">
          <p>
          ${word_data[0].meanings[0].partOfSpeech}</p>
          <p>/${word_data[0].phonetic || ""}/</p>
          </div>
          <p class="word-meaning">
          ${word_data[0].meanings[0].definitions[0].definition}
          </p>
          <p class="word-example">
          ${word_data[0].meanings[1].definitions[0].example || ""}
          </p>
          
      `;
 }catch(err){
    console.log(err);
    result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
 }
  
});

// open sound

function open_sound(){
    sound.play()
}