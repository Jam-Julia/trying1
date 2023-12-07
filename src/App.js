import { useState } from 'react';
import Board from './Board.js';

export default function Game(){
  return (
    <>
 <div className='container'>
 <h1>
Light all the fireflies!
</h1>

    <Board/>
  </div>   

    </>);
}