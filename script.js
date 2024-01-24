const ib=document.getElementById('input-box')
const lc=document.getElementById('list-container')
const add = document.getElementById('add')

add.addEventListener('click',function(){
    var li = document.createElement('li')
    li.innerText=ib.value;
    lc.appendChild(li);
    ib.value=''
    li.addEventListener('dblclick',function(){
        lc.removeChild(li)
    })
})