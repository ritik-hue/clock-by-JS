let element=document.getElementById('time')
setInterval(() => {let date=new Date()
let time=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
element.innerHTML=time},1000)