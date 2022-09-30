const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
const hands = document.querySelectorAll('.hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = "rotate("+secondsDegrees+"deg)";

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = "rotate("+minsDegrees+"deg)";

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = "rotate("+hourDegrees+"deg)";

    if(seconds == 0 || mins == 0){
        hands.forEach((hand) => {
            hand.style.transition = 'all 0s';
        });
    }else{
        hands.forEach((hand) => {
            hand.style.transition = 'all 0.5s';
          });
    }

}

setInterval(setDate, 1000);

setDate();
