import { useState } from 'react'
import Block from './components/block'
import Input from './components/Input';
import Button from './components/Button';
import './App.css'

function App() {
  const initialBoard = [
    ["r", "n", "b", "q", "k", "b", "n", "r"], // Black's pieces
    ["p", "p", "p", "p", "p", "p", "p", "p"], // Black's pawns
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["pw1", "pw2", "pw3", "pw4", "pw5", "ps6", "ps7", "pw8"], // White's pawns
    ["R", "N", "B", "Q", "K", "B", "N", "R"], // White's pieces
  ];
  const [board, setBoard] = useState(
    initialBoard
  )
  const [command, setCommand] = useState("");
  const [ipcom, setIpcom] = useState("");

  const handleInput = (e) => {
    console.log(command)
    setCommand(e.target.value);
  }

  const takeInput = () => {
    setIpcom(command)
    console.log("works")
    console.log(ipcom)
  }

  return (
    <>
      <div className='container w-full h-screen bg-black flex flex-col justify-around'>
        <div className='text-white self-center font-bold text-5xl'>CHESS</div>
        <div className='board text-white self-center flex flex-row gap-5'>
          <div className='board w-[400px] h-[400px] border-white border-[2px] rounded-sm grid grid-cols-8 grid-rows-8'>
            {
              board.map((row, rowIdx) => 
                row.map((col, colIdx) => (
                  <Block key={`${rowIdx}-${colIdx}`} text={col} bgc={(rowIdx + colIdx) % 2 ? `Gray` : `lightGray`}/>
                ))
              )
            }
          </div>
          <div className='ipwindow w-[100px] h-[400px] border-white border-[2px] rounded-sm flex flex-col justify-evenly'>
            <Input fxns = {handleInput} />
            <Button text={"Submit"} fxns = {takeInput} />
          </div>
        </div>
        <div className='result text-white self-center w-[522px] h-[100px] border-white rounded-sm border-[2px]'>
          Result
        </div>
      </div>
    </>
  )
}

export default App
