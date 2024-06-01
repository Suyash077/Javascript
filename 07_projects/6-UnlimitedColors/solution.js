const randomColor=function()
{
    let hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const changeBgColor=function()
{
    document.body.style.backgroundColor=randomColor();
}

let IntervalId;
const startChangingColor=function()
{
    if(!IntervalId)
    {
        IntervalId=setInterval(changeBgColor,1000);
    }
}

const stopChangingColor=function()
{
    clearInterval(IntervalId);
    IntervalId=null;
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);