const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.inputs input');

const handleInput = (e)=>{
  const input = e.target;
  if(input.nextElementSibling && input.value){
    input.nextElementSibling.focus();
    input.nextElementSibling.select();
  }
}

const handlePaste = (e)=>{
  const data = e.clipboardData.getData('text');
  inputs.forEach((input,index)=>{
    input.value = data[index] || '';
  })
}

inputs[0].addEventListener('paste', handlePaste);

const handleBackspace = (e)=>{
  if(e.keyCode === 8){
    console.log(e.target);
  }else{
    handleInput(e);
  }
}



form.addEventListener('input', handleInput);
