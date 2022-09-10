window.onload = function(){

const hourDiv = document.querySelector('.hour');
const minuteDiv = document.querySelector('.minute');
const secondDiv = document.querySelector('.second');
const timeDiv = document.querySelector('.time');

    function setDate(){

    const today = new Date();

    const second = today.getSeconds();
    const secondDeg = ( (second/60) * 360 ) + 360; 
    secondDiv.style.transform = 'rotate(${secondDeg}deg)';

    const minute = today.getMinutes();
    const minuteDeg = ( (minute/60) * 360 ) ; 
    minuteDiv.style.transform = 'rotate(${minuteDeg}deg)';

    const hour = today.getHours();
    const hourDeg = ( (hour/12) * 360 ) ; 
    hourDiv.style.transform = 'rotate(${hourDeg}deg)';



    timeDiv.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second + '</small>' + '</span>';


    }
    setInterval(setDate, 1000);
}