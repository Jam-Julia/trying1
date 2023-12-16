// рандомный массив
//создаю светлячков рандомом, кроме двух - у них будет отдельная красивая анимация
let fireflis = [];
//вот два заранее жестко заданных светлячка
let firefli1 = { id: 1, moveFly: 'dancelon1', topFly: '50%', leftFly: '10%', };
let firefli2 = { id: 2, moveFly: 'dancelon2', topFly: '20%', leftFly: '20%', };
fireflis.push(firefli1);
fireflis.push(firefli2);
//создаю рандом для выбора типа "танца" святлячков выбором dance1..5
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}

//Количество светляков
const nFireflis = 20;
//Количество вариантов танца
let dances = 5;
//пихаю рандомных светляков в массив
for (let i = 3; i <= nFireflis; i++) {
  let dofirefli = {};
  dofirefli.id = i;
  dofirefli.moveFly = 'dance' + String(Math.floor(randomInteger(1, 6)));
  dofirefli.topFly = String(5 + Math.floor(Math.random() * 65)) + '%';
  dofirefli.leftFly = String(5 + Math.floor(Math.random() * 65)) + '%';
  fireflis.push(dofirefli);
}



//*** */

 export function Firefli({ light, onFlyClick, idfly }) {
  //не хочу мап. хочу искать строчку с нужными данными из рандома по индексу из пропсов в Board
  const flyarr = fireflis.find(function (item) {
    return item.id === idfly;
  });

  //  хочу я возвращать под вызов ЕДИНИЧНУЮ структуру с нужной строчкой одного светляка с хз каким номером
  //типа такого, но он не сработает пока не знает какой айди, я задаю его в боард в пропсах

  return (<div key={flyarr.id} className={flyarr.moveFly} style={{ position: 'absolute', top: flyarr.topFly, left: flyarr.leftFly }}>
    <button className={light} onClick={onFlyClick} ></button>
  </div>
  );
  // return (
  //   <>
  //       {fireflis.map((item, index) => (
  //         <div key={item.id} className={item.moveFly} style={{ position: 'absolute', top: item.topFly, left: item.leftFly }}>
  //         <button className={light} onClick={onFlyClick} ></button>
  //         </div>
  //       ))}
  //     </>
  // );
  //и уже в пропах хочу ему написать массив для вывода по всем номерам
}