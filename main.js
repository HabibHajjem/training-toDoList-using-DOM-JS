function add(){
    var text=document.getElementById('input').value;
    var toDoList=document.getElementById('toDoList');
    var list=document.createElement('ul');
    var li=document.createElement('li');
    var liText=document.createTextNode(text);
    var btn=document.createElement('button');
    btn.innerHTML='remove';

    toDoList.appendChild(list);
    if(text!==''){
        li.appendChild(liText);
        li.appendChild(btn);
        list.appendChild(li);
    }
    btn.addEventListener('click',remove);
    function remove(){
        list.removeChild(li);
    }
    console.log(li);
}