let countEL = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
let count=0;
console.log(countEL);
function increment()
{
    count=count+1;
    countEL.innerText=count;
}
function save()
{
    let countstr = count +  " - " ;
    saveEl.textContent += countstr;
    countEL.textContent = 0;
    count = 0;

}