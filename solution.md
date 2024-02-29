# Digital Clock
## project 2
## solution
  Displaying Current Time and Date

  ```javascript
  let clock=document.querySelector('#clock')
let time= document.querySelector('#date')


setInterval(()=>{
    let date = new Date();
    clock.innerHTML=date.toLocaleTimeString()
    time.innerHTML=date.toDateString()
},1000)

  ``` 
  ```html
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
        box-shadow: 2px 3px 5px #B1BF40 ;
      }
      #date{
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
        box-shadow: 2px 3px 5px #B1BF40;
      }
      nav{
        position: sticky;
        margin-top: 0;
        background: linear-gradient( rgb(16, 151, 223),rgb(170, 0, 255));
        height: 6.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      nav a{
        display: block;
        text-decoration: none;
        font-weight: 500;
        font-size: 4rem;
        border-radius: 0.5rem;
        border: 0.5rem solid #B1BF40;
        width: fit-content;
        margin-right: 2rem;
        background-color: #B1BF40;
        color: #212121;
        box-shadow: 2px 3px 5px black;
      }
      *{
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a href="/page2.html">Other page</a>
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
      <div id="date"></div>

    </div>
    <script src="DigitalClock.js"></script>
  </body>
</html>

  ```