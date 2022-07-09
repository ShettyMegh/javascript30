console.log("working")
let keys = document.querySelectorAll(".key");
let audios = document.querySelectorAll("audio")
console.log(keys[1].dataset.key)

window.addEventListener("keydown",(e)=>{
    let code = `${e.keyCode}`;
    console.log(code);
    keys.forEach((item,idx)=>{
        let key = item.dataset.key;
        item.classList.remove("playing");
        if(key === code){
            item.classList.add("playing");
            audios[idx].play();
            console.log(item.classList)
        } 

    })

})