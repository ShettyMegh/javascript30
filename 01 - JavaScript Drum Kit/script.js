console.log("working")
let keys = document.querySelectorAll(".key");
let audios = document.querySelectorAll("audio")
console.log(keys[1].dataset.key)

window.addEventListener("keydown",(e)=>{
    let code = `${e.keyCode}`;
    console.log(code);
    keys.forEach((item,idx)=>{
        let key = item.dataset.key;
        if(key === code){
            item.classList.add("playing");
            console.log(item.classList)
        } 

    })

})