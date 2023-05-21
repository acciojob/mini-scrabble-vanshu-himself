//your code here
const textbar=document.getElementById('evaluatedText');
// textbar.addEventListener('in')
// function counter(){
// 	counter.innerHTML=textbar.value.length;
// })
 textbar.addEventListener("input",()=> {
          
           letterCount.innerText = textbar.value.length;
          });

