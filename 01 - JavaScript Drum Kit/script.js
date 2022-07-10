
  window.addEventListener("keydown",(e)=>{ //listen window for keydown
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//select the audio tag which matches with keydown code and its attribute code
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //if no audio tag found then simply return
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  })


  
  function removeTransition(e){
    if(e.propertyName !=="transform") return;
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach(key=>{
    key.addEventListener("transitionend",removeTransition);
  })





//First Try Code non optimised

// let keys = document.querySelectorAll(".key");
// let audios = document.querySelectorAll("audio")


// window.addEventListener("keydown",(e)=>{
//     let code = `${e.keyCode}`;
//     console.log(code);
//     keys.forEach((item,idx)=>{
//         let key = item.dataset.key;
//         item.classList.remove("playing");
//         if(key === code){
//             item.classList.add("playing");
//             audios[idx].currentTime=0;
//             audios[idx].play();
//         } 

//     })

// })