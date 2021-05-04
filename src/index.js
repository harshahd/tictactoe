import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Square.js';
import './components/Board.js';
import Game from './components/Game.js';



ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

const left=37;
const up=38;
const right=39;
const down=40;
var squares=document.getElementsByClassName("square");
for(let countSquare=0;countSquare<squares.length;countSquare++)
{
squares[countSquare].addEventListener('keydown', function(e)
{
if(countSquare%3==0)
{
if(e.which==right)
{
squares[countSquare+1].focus();
}
}
if(countSquare%3==1)
{
if(e.which==right)
{
squares[countSquare+1].focus();
}
else if(e.which==left)
{
squares[countSquare-1].focus();
}
}
if(countSquare%3==2)
{
if(e.which==left)
{
squares[countSquare-1].focus();
}
}
if(e.which==up)
{
if(countSquare-3>=0)
squares[countSquare-3].focus();
}
else if(e.which==down)
{
if(countSquare+3<9)
squares[countSquare+3].focus();
}
});
}
