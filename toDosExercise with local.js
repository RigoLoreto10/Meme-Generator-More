// const finished = document.querySelectorAll('li input');
// const form = document.querySelector('#addToDo');
// const input = document.querySelector('#sub');
// const list = document.querySelector('#todo');
// for(let btn of finished){
//     btn.addEventListener('click',function(e){
//         e.target.parentElement.style.textDecoration = "line-through";
//     });
// }


// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     const newtoDo = document.createElement('li');
//     const 
//     newtoDo.innerText = input.value;
//     input.value = '';
//     list.appendChild(newtoDo);
// })

const form = document.querySelector('#addToDo');
const input = document.querySelector('#sub');
const list = document.querySelector('#todo');

const savedlist = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedlist.length; i++) {
  let newitem = document.createElement("li");
  newitem.innerText = savedlist[i].task;
  newitem.isCompleted = savedlist[i].isCompleted ? true : false;
  if (newitem.isCompleted) {
    newitem.style.textDecoration = "line-through";
  }
  list.appendChild(newitem);
}

list.addEventListener('click',function(e){
if(e.target.tagName === 'INPUT'){
    e.target.parentElement.style.textDecoration = "line-through";

} 
else if(e.target.tagName ==='BUTTON'){
    e.target.parentElement.remove();
}
})


form.addEventListener('submit',function(event){
    event.preventDefault();
    const newtoDo = document.createElement('li');
    const newcheck = document.createElement('input');
    const newbtn = document.createElement('button');
    newcheck.type='checkbox';
    newbtn.innerText = 'x';
    newtoDo.innerText = input.value;
    localtoDo = JSON.stringify(input.value);
    localStorage += localStorage.setItem("toDo",localtoDo);
    newtoDo.appendChild(newcheck);
    newtoDo.appendChild(newbtn);
    input.value = '';
    list.appendChild(newtoDo);

    savedlist.push({ task: newtoDo.innerText, isCompleted: false });
localStorage.setItem("todos", JSON.stringify(savedlist));
})
