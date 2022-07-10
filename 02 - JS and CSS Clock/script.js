function setDate(){

    //get hands
    const secondHand = document.querySelector(".second-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");  


    //creat object for date
    const now = new Date();

    //set hand for seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360)+90;
    setClock(secondsDegrees,secondHand);


    //set hand for minutes
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60)*360)+90;
    setClock(minutesDegrees,minHand);


    //set hand for hours
    const hour = now.getHours();
    const hourDegrees = ((hour/12)*360)+90;
    setClock(hourDegrees,hourHand);

    }

    function setClock(deg,hand){
    
      hand.style.transform = `rotate(${deg}deg)`;

    }

  setInterval(setDate,1000);