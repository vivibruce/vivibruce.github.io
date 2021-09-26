const userInput = document.querySelector('.user-input');
const form = document.querySelector('form');
const taskList = []; 

const createTaskNode = (task)=>{
  const taskNode = document.createElement('li');
  taskNode.classList+='task';
  taskNode.setAttribute('draggable',true);

  // const innerhtml = `<div>${}</div>`
  taskNode.innerText = task.taskValue;
  return taskNode;
}

const onSubmit = (e)=>{
  e.preventDefault();
  const taskListEl = document.querySelector('.task-list');
  console.log(userInput.value);
  const newTask = {
    taskValue : userInput.value,
    isCompleted : false,
    index : taskList.length+1
  }
  taskList.push(newTask);
  const newTaskNode = createTaskNode(newTask);
  taskListEl.appendChild(newTaskNode);
  addDraggableEventListener(newTaskNode);
  userInput.value = '';
}




form.addEventListener('submit',onSubmit);

const addDraggableEventListener = (taskNode)=>{

  var dragSrcEl = null;
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';
    
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    
    if (dragSrcEl != this) {
      dragSrcEl.innerText = this.innerText;
      this.innerText = e.dataTransfer.getData('text/html');
    }
    
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    const items = document.querySelectorAll('.task');
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
  
  
  let item = taskNode;
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);

}