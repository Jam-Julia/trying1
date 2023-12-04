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
 //не хочу мап. хочу искать строчку с нужными данными из рандома по индексу из пропсов в Board
  const flyarr = fireflys.find(function (item) {
  return item.id === idfly;
});

//  хочу я возвращать под вызов ЕДИНИЧНУЮ структуру снужной строчкой одного светляка с хз каким номером
//типа такого, но он не сработает пока не знает какой айди, я задаю его в боард в пропсах

return (<div key={flyarr.id} className={flyarr.moveFly} style={{ position: 'absolute', top: flyarr.topFly, left: flyarr.leftFly }}>
<button className={light} onClick={onFlyClick} ></button>
</div>
);
// return (
//   <>
//       {fireflys.map((item, index) => (
//         <div key={item.id} className={item.moveFly} style={{ position: 'absolute', top: item.topFly, left: item.leftFly }}>
//         <button className={light} onClick={onFlyClick} ></button>
//         </div>
//       ))}
//     </>
// );
//и уже в пропах хочу ему написать массив для вывода по всем номерам
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
        { [...Array(9)].map((item, index) => <Firefly key={index} idfly={index+1} light={Fly[index]} onFlyClick={() => handleClick(index)}  /> ) }
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
    
