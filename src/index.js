import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
      <button className="square"
onClick={props.onClick} aria-live="assertive" role="gridcell">
{"square "+props.number+":"+(props.value!=null?props.value:'None')}</button>
    );
  }


class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      number={(i+1)}/>
    );
  }


  render() {
    return (
<div role="rowgroup">
        <div className="board-row" role="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row" role="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row" role="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,stepNumber:0};
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber+1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext, stepNumber: history.length});
  }
  
  jumpTo(step) {
    this.setState({stepNumber: step,      xIsNext: (step % 2) === 0}); 
 }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {      
const desc = move ?        'Go to move #' + move :        'Go to game start';
      return (
<li key={move}>          <button onClick={() => this.jumpTo(move)}>{desc}</button></li>);
    });
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } 
else
{
let draw;
for(let count=0;count<current.squares.length;count++)
{
draw=current.squares[count]!=null;
if(!draw && count<=9)
break;
}
if(draw)
{
      status = 'The game ended in a draw';
}
else
{
      status = 'Next player to be played: ' + (this.state.xIsNext ? 'X' : 'O');
}
    }
    return (
      <div className="game" role="region" aria-label="game">
        <div className="game-board" role="grid">
          <Board             squares={current.squares}
            onClick={(i) => this.handleClick(i)}
/>
        </div>
        <div className="game-info">
          <div role="status">{status}</div>
          <ol role="navigation" aria-label="moves">{moves}</ol>
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
// ========================================

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
