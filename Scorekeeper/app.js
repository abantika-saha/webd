const p1 = document.querySelector('#P1');
const p2 = document.querySelector('#P2');
const reset = document.querySelector('#reset');
const ws = document.querySelector('#playthis');

let p1score=0,p2score=0;
let isgameover=false;
let winningscore;
p1.addEventListener('click',function()
{
    if(isgameover===false)
    {
        p1score++;
        if(p1score===winningscore)
        {
            isgameover=true;
            displayscorep1.classList.add('winner');
            displayscorep2.classList.add('loser');
        }
        displayscorep1.textContent=p1score;
    }
})
p2.addEventListener('click',function()
{
    if(isgameover===false)
    {
        p2score++;
        if(p2score===winningscore)
        {
            isgameover=true;
            displayscorep2.classList.add('winner');
            displayscorep1.classList.add('loser');
        }
        displayscorep2.textContent=p2score;
    }
})
ws.addEventListener('change',function()
{
    winningscore= parseInt(this.value);
    isgameover=false;
    p1score=0;
    p2score=0;
    displayscorep1.textContent=p1score;
    displayscorep2.textContent=p2score;
    displayscorep1.classList.remove('winner','loser');
    displayscorep2.classList.remove('winner','loser');

})
reset.addEventListener('click',function()
{
    isgameover=false;
    p1score=0;
    p2score=0;
    displayscorep1.textContent=p1score;
    displayscorep2.textContent=p2score;
    displayscorep1.classList.remove('winner','loser');
    displayscorep2.classList.remove('winner','loser');
})
