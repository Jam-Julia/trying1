import { useState } from 'react';
import { Firefli } from './Firefli.js';
//cjplftv ntvyjne
let dark = 'darkness';
const nFireflis = 9;

export default function Board() {



  const [fly, setFly] = useState(Array(nFireflis).fill('turnOff'));
  const [count, setCount] = useState(0);

  function LittleTip(i) {

    const firstOff = fly.indexOf('turnOff')
    if (firstOff !== -1) {
      const a = fly.slice();
      a[firstOff] = 'tip';
      setFly(a);
    }

  }



  function handleClick(i) {
    if (fly[i] === 'turnOn') {
      return;
    }
    const nextFly = fly.slice();
    nextFly[i] = 'turnOn';
    setFly(nextFly);
    setCount(count + 1);
  }

  function calculateWinner() {
    let tap = 0;
    for (let i in fly) {
      if (fly[i] === 'turnOn') { tap++ }
    }
    if (nFireflis === tap) { return true; }
    return false;
  }
  /**/
  const winner = calculateWinner();
  let status;
  if (winner) {
    status = "Success!";
    dark = 'night';
  } else {
    status = "";
  }


  return (
    <>
      <div className='score'>
        <h2>Turn On: {count}/9</h2>
        <h3>{status}</h3>
        <button className='button' onClick={LittleTip}>A little tip</button>
      </div>
      <div className="board">
        <div className={dark}>

          {[...Array(nFireflis)].map((item, index) => <Firefli key={index} idfly={index + 1} light={fly[index]} onFlyClick={() => handleClick(index)} />)}
        </div>

      </div>


    </>
  );
}


