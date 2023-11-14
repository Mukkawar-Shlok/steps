import React, {  useState } from 'react'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
  const [step,setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function prevHandler(){

    if (step >1) setStep(step-1);
    
  }
  function nextHandler(){
    if (step <3) setStep(step+1);
  }
  // function modelHandler(){
  //   if(isOpen){
  //     setIsOpen(false);
  //   }else{
  //     setIsOpen(true);
  //   }
  // }

  return(
  <>
    <button className='close' onClick={()=>setIsOpen(!isOpen)}>&times;</button>
  { isOpen &&
  <div className='steps'>
    <div className='numbers'>
    <div className={`${step >=1 ? 'active':''}`}>1</div>
    <div className={`${step >=2 ? 'active':''}`}>2</div>
    <div className={`${step >=3 ? 'active':''}`}>3</div>
    </div>

    <p className='message'>Step {step}: {messages[step-1]}</p>

    <div className='buttons'>

      <button style={{backgroundColor:"#7950F2", color:"#fff"}} onClick={prevHandler}>Previous</button>
      <button style={{backgroundColor:"#7950F2", color:"#fff"}} onClick={nextHandler} >Next</button>

    </div>
  </div>
}
  </>);
}