import { useState } from 'react';
//cjplftv ntvyjne
let dark = 'darkness';


//*В САМОЙ Арр, а не в компаненте Firefly создаю рандомный массив, чтоб он не перерисовывался при вызове */
//создаю светлячков рандомом, кроме двух - у них будет отдельная красивая анимация
let fireflys = [];
//вот два заранее жестко заданных светлячка
let firefly1 = { id: 1, moveFly: 'dancelon1', topFly: '50%', leftFly: '10%', };
let firefly2 = { id: 2, moveFly: 'dancelon2', topFly: '20%', leftFly: '20%', };
fireflys.push(firefly1);
fireflys.push(firefly2);
//создаю рандом для выбора типа "танца" святлячков выбором dance1..5
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}

//да, отображается как будто всего три светляка, но это потому что у двоих из пяти тот же класс с жестко всунутыми координатами внутри. они один под другим.
let nfireflys = 9;
let dances = 5;
//пихаю рандомных светляков в массив
for (let i = 3; i <= nfireflys; i++) {
  let dofirefly = {};
  dofirefly.id = i;
  dofirefly.moveFly = 'dance' + String(Math.floor(randomInteger(1, 6)));
  dofirefly.topFly = String(7 + Math.floor(Math.random() * 65)) + '%';
  dofirefly.leftFly = String(7 + Math.floor(Math.random() * 65)) + '%';
  fireflys.push(dofirefly);
}
//*** */

function Firefly({ light, onFlyClick, idfly }) {
  //ищу объект с нужным айдишником чтоб задать его атрибуты в светлячки
  const flyarr = fireflys.find(function (item) {
    return item.id === idfly;
  });

  return (
    <div key={flyarr.id} className={flyarr.moveFly} style={{ position: 'absolute', top: flyarr.topFly, left: flyarr.leftFly }}>
      <button className={light} onClick={onFlyClick} ></button>
    </div>
  );
}

export default function Board() {
  const [Fly, setFly] = useState(Array(nfireflys).fill('turnOff'));
  const [count, setcount] = useState(0);





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
    if (nfireflys === count) { return true; }

    return false;
  }
  /**/
  const winner = calculateWinner();
  let status;
  if (winner) {
    status = "Победа!";
    dark='night';
  } else {
    status = "";
  }


  return (
    <>
      <div className="board"> 
      <div className={dark}>
        <h2>light all the fireflies!</h2>
        <div className='score'>
          <h1 className="status">{status}</h1>
          <h3>{count}/9</h3>

        </div>
        <Firefly idfly={1} light={Fly[0]} onFlyClick={() => handleClick(0)} />
        <Firefly idfly={2} light={Fly[1]} onFlyClick={() => handleClick(1)} />
        <Firefly idfly={3} light={Fly[2]} onFlyClick={() => handleClick(2)} />
        <Firefly idfly={4} light={Fly[3]} onFlyClick={() => handleClick(3)} />
        <Firefly idfly={5} light={Fly[4]} onFlyClick={() => handleClick(4)} />
        <Firefly idfly={6} light={Fly[5]} onFlyClick={() => handleClick(5)} />
        <Firefly idfly={7} light={Fly[6]} onFlyClick={() => handleClick(6)} />
        <Firefly idfly={8} light={Fly[7]} onFlyClick={() => handleClick(7)} />
        <Firefly idfly={9} light={Fly[8]} onFlyClick={() => handleClick(8)} />
      </div>
      </div>
    </>
  );
}
