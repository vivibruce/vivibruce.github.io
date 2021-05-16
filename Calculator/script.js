const operator = document.querySelector('#operator');
const calculatebtn = document.querySelector('.calculate'); 
const result = document.querySelector('.result'); 
const value1 = document.querySelector('.value1'); 
const value2 = document.querySelector('.value2'); 



const calculate = ()=>{
  const first = +value1.value;
  const second = +value2.value;
  const map_operator ={
    "+":(a,b)=>a+b,
    "-":(a,b)=>a-b,
    "*":(a,b)=>a*b,
    "/":(a,b)=>a/b
  }
  const operation = operator.value;
  result.innerText = map_operator[operation](first,second);
}

calculatebtn.addEventListener('click', calculate);

const decreaseFirstValue=()=>{
  value1.value = +value1.value - 1;  
}
const increaseFirstValue=()=>{
  value1.value = +value1.value + 1; 
}
const decreaseSecondValue=()=>{
  value2.value = +value2.value - 1;  
}
const increaseSecondValue=()=>{
  value2.value = +value2.value + 1;   
}


