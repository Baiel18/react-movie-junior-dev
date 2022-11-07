import React, {useState} from "react";

function Login(){
const [pass,setPass] = useState('')
const [passtwo,setPasstwo] = useState('')

    function validateEmail(e) {
        let value = e.target.value;
        let p = document.getElementById("validation");
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(value) ? p.innerHTML = '<b class = "a">Почта туура</b>': p.innerHTML = '<b class = "c">Почта туура эмес</b>'
      }
    
      function handleVoite(){
        let p = document.getElementById('valuepass')
        let p2 = document.getElementById('value')
        if(passtwo){
            pass == passtwo ? p.innerHTML = '<b class = "a">пароль туура</b>': p.innerHTML = '<b class = "c">пароль туура эмес</b>'
            pass == passtwo ? p2.innerHTML = '<b class = "a">пароль туура</b>': p2.innerHTML = '<b class = "c">пароль туура эмес</b>'
        }
      }
    return(
        <div className="login">
         <p id="validation">Введите почту</p>
         <input type="text" id="email" onChange={validateEmail}/>
         <p id="valuepass">Введите пароль</p>
         <input type="password" onChange={(e)=>setPass(e.target.value)}/>
         <p id="value">Введите пароль еще раз</p>
         <input type="password" onChange={(e)=>setPasstwo(e.target.value)} />
         <button onClick={handleVoite}>войти</button>
        </div>
    )
}
export default Login