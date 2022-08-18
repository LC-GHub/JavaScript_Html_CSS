const p1btn = document.querySelector('#p1btn')
const p2btn = document.querySelector('#p2btn')
const resetbtn = document.querySelector('#resetbtn')
const gamescore = document.querySelector("select");
let playto = 0;
let isgameover = false;

function addOne(player){
    const playerDisplay = document.querySelector(`#${player}score`);
    let score = parseInt(playerDisplay.innerText)+1
    document.querySelector(`#${player}score`).innerText = `${score}`;

}
function reset(){
    const allspan = document.querySelectorAll('Span');
    for (let span of allspan){
        span.innerText = '0';
    }
    isgameover = false;
    p1btn.disabled = false;
    p2btn.disabled = false;
}


p1btn.addEventListener('click', (e) => {
    if(!isgameover){
        if(parseInt(document.querySelector(`#p1score`).innerText) != playto){
            addOne('p1')
        }else{
            isgameover = true;
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
    
    
})
p2btn.addEventListener('click', (e) => {
    if(!isgameover){
        if(parseInt(document.querySelector(`#p2score`).innerText) != playto){
            addOne('p2')
        }else{
            isgameover = true;
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
})
resetbtn.addEventListener('click', reset);

gamescore.addEventListener('change', () => {
    let score1 = parseInt(gamescore.value);
    playto = score1;
    reset();
    isgameover = false;
})