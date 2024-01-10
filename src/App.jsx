import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [length1, setlength1] = useState(20)
  const[password,setpassword]=useState("")
  const [numberallowed,setnumberallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const passwordref=useRef(null)
  const copypassword=()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  const passwordGenrator = () => {
    let pass = ""
    let string = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberallowed)string+="1234567890"
    if(charallowed)string+="~!@#$%^&*_+"
   
    for(let i=1;i<=length1;i++){
      let char=Math.floor(Math.random()*string.length+1)
      pass+=string.charAt(char)
    }
    setpassword(pass)
    console.log(password)
  }

  return (
    <div className=' main-continer flex'>
      <div className='container '>
        <h1>sn password genertor</h1>
        <div className="input-button">
          <input type="text"
          value={password}
            readOnly
            ref={passwordref} />
          <button onClick={copypassword}>copy</button>
        </div>
        <div className="bottomcontainer">
          <input type="range"
            min={6}
            max={20}
            onChange={(e) => { setlength1(e.target.value) }} />
          <label htmlFor="">{length1} length</label>
          <input type="checkbox" 
           defaultChecked={charallowed} 
           onChange={()=>{setnumberallowed((prev)=>!prev)}
           }/>
          <label htmlFor=""> add number</label>
          <input type="checkbox"
          defaultChecked={charallowed} 
          onChange={()=>{setcharallowed((prev)=>!prev)}
          }/>
          <label htmlFor=""> add character</label>
        </div>
        <div className="generate">
        <button  onClick={passwordGenrator}>generate</button>
        </div>
      </div>
    </div>
  )
  }

export default App
