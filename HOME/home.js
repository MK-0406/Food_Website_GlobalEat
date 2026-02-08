 // Cookies
 setCookie = (cName, cValue, expDays) =>{
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/"
  }

  // Check if already exits cookies
  getCookie = (cName) =>{
    const name = cName + "=";
    const cDecodded = descodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val=>{
      if(val.indexOf(name) === 0) value = val.substring(name.length); 
    })
    return value;
  }

  document.querySelector("#cookies-btn").addEventListener("click", () =>{
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", true, 30) // expired 30 days
  })

  cookieMessage =() =>{
    if(!getCookie("cookie"))
      document.querySelector("#cookies").style.display ="block";
  }
  window.addEventListener("load", cookieMessage);

//Cookies used to record date
function setCookie(cname, cvalue){
  var d = new Date();
  d.setTime(d.getTime() + (3*24*60*60*1000));
  var expires = "expires" +d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function time(){
  var time = new Date();
  var currentTime = "Login time: " +
  time.getHours() + ":"  
  + time.getMinutes() + ":" 
  + time.getSeconds();

  return currentTime;
}

setCookie("Time", time())

