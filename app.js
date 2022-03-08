let hour=0, min=0, sec=0, ms=0;
let counter;

const startWatch = () =>{
    const run = ()=>{
        if(ms<10){
            document.getElementById('ms').innerText = '0'+ms;
        }
        else{
            document.getElementById('ms').innerText = ms;
        }

        if(sec<10){
            document.getElementById('sec').innerText = '0'+sec;
        }
        else{
            document.getElementById('sec').innerText = sec;
        }

        if(min<10){
            document.getElementById('min').innerText = '0'+min;
        }
        else{
            document.getElementById('min').innerText = min;
        }

        if(hour<10){
            document.getElementById('hour').innerText = '0'+hour;
        }
        else{
            document.getElementById('hour').innerText = hour;
        }

        ms = ms + 1;
        
        if (ms==100) {
            ms=0;
            sec++;
        }
        if (sec==60) {
            min++;
            sec=0;
        }
        if (min==60) {
            hour++;
            min=0
        }
    }
    counter = setInterval(run, 10);
}

const stopWatch = () =>{
    clearInterval(counter);
}

const resetWatch = () =>{
    clearInterval(counter);
    hour=0, min=0, sec=0, ms=0;
    document.getElementById('ms').innerText = '0'+ms;
    document.getElementById('sec').innerText = '0'+sec;
    document.getElementById('min').innerText = '0'+min;
    document.getElementById('hour').innerText = '0'+hour;
}
