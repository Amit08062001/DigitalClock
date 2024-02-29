let clock=document.querySelector('#clock')
let time= document.querySelector('#date')


setInterval(()=>{
    let date = new Date();
    clock.innerHTML=date.toLocaleTimeString()
    time.innerHTML=date.toDateString()
},1000)
