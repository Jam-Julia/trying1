import { useState } from 'react';
import { Firefli } from './Firefli.js';
//cjplftv ntvyjne
let dark = 'darkness';


export default function Board() {

  let nfireflis = 9;

  const [Fly, setFly] = useState(Array(nfireflis).fill('turnOff'));
  const [count, setcount] = useState(0);

  function LittleTip(i) {

    let firstOff = Fly.indexOf('turnOff')
    if (firstOff === -1) { return; }
    const a = Fly.slice();
    a[firstOff] = 'tip';
    setFly(a);
    console.log(Fly);
  }



  function handleClick(i) {
    if (Fly[i] === 'turnOn') {
      return;
    }
    const nextFly = Fly.slice();
    nextFly[i] = 'turnOn';
    setFly(nextFly);
    setcount(count + 1);
  }

  function calculateWinner() {
    let tap = 0;
    for (let i in Fly) {
      if (Fly[i] === 'turnOn') { tap++ }
    }
    if (nfireflis === tap) { return true; }
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

          {[...Array(nfireflis)].map((item, index) => <Firefli key={index} idfly={index + 1} light={Fly[index]} onFlyClick={() => handleClick(index)} />)}
        </div>

      </div>


    </>
  );
}

// я знаю что существует такая форма записи

//вместо
// <Parent>
//   <Component />
//   <Component />
//   <Component />
// </Parent>
//пишут так
// <Parent>
// { [...Array(n)].map((item, index) => <Component key={index} /> ) }
// </Parent>

//и вот 101 строчка - это то, что я хотела: применить мап именно тут - в самой доске, чтоб не писать их тридцать раз для 30 светляков

