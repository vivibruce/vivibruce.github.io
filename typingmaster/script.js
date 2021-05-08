const randomword = document.querySelector('.random-word');
const timerEl = document.querySelector('.timer span');
const textbox = document.getElementById('textbox');
const difficulty = document.querySelector('.difficulty');
const scoreEl = document.querySelector('.score span');
const restart = document.querySelector('#restart');
let difficultyType = difficulty.value;
console.log(difficultyType)
let timer = 0;
let score = 0;
const getRandomWord = ()=>{
    const words = ["red","blue","green","yellow"];
    randomword.innerText = words[Math.floor(Math.random() * words.length)];
}
const setScore = (score=5)=>{
    if(score!=0){
        let prevScore = +scoreEl.innerText;
        score+= prevScore;
    }
    scoreEl.innerText = score;
}

const increaseTimer= ()=>{
    if(difficultyType=='easy'){
        timer+=5;
    }else if(difficultyType=='medium'){
        timer+=4;
    }else{
        timer+=2;
    }
    timerEl.innerText = timer;
}

const reset = ()=>{
    restart.classList.toggle('restart')
    document.querySelector('.textbox').disabled = false
    setScore(0);
    main();
}

const main = ()=>{
    let choice = localStorage.getItem('difficulty');
    if(choice){
        difficultyType = choice;
        difficulty.value = difficultyType;
    }
    increaseTimer();
    setScore(0);
    getRandomWord();
    textbox.focus();
    let intervalTimer = setInterval(myfun, 1000)
    function myfun(){
        if(timer===0){
            clearInterval(intervalTimer);
            document.querySelector('.textbox').disabled = true;
            restart.classList.toggle('restart')
        }else{
            timer-=1;
            timerEl.innerText = timer;
        }
}
    
}
main();


const validateWord = (e,randomwordtext)=>{
    const uservalue = e.target.value;
    console.log(timer,score);
    if(uservalue===randomwordtext){
        e.target.value = '';
        getRandomWord();
        setScore();
        increaseTimer();
    }

}



textbox.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        validateWord(e, randomword.innerText);
    }
});
difficulty.addEventListener('change', (e)=>{
    localStorage.setItem('difficulty', e.target.value);
    setScore(0);
    timer = 0;
    difficultyType = e.target.value;
    
})

restart.addEventListener('click', reset);




console.log(randomword.innerText, timerEl.innerText, textbox.value, difficulty.value);