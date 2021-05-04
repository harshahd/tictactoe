function Square(props) {
    return (
      <button className="square"
onClick={props.onClick} aria-live="assertive" role="gridcell">
{"square "+props.number+":"+(props.value!=null?props.value:'None')}</button>
    );
  }

export default Square;