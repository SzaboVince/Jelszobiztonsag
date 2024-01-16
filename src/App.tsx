import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hibauzenet } from './Hibauzenet';

function App() {
  const [jelszo,setjelszo]=useState('');
  const isnum = /^[a-zA-Z]+$/.test(jelszo);
  console.log(isnum);
  
  return <div>
    <h1>Jelszó biztonság ellenőrző alkalmazás</h1>
    <p>Új react alkalmazás, amely ellenőrzi, hogy a megadott jelszó megfelelően biztonságos-e</p>
    <input type='password' onInput={e=>{setjelszo(e.currentTarget.value)}}/>
    <Hibauzenet hibauzenetek={jelszo.length<9?['Gyenge']:[]} sulyos={0}/>
    <Hibauzenet hibauzenetek={jelszo.length>8&&isnum?['Közepes']:[]} sulyos={1}/>
    <Hibauzenet hibauzenetek={jelszo.length>8&&!isnum?['Erős']:[]} sulyos={2}/>
  </div>
}

export default App
