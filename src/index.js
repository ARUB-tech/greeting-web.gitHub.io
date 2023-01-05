import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date(2023,1,5,6); // create a variable of curDate
curDate = curDate.getHours(); //how to find current time
let greeting = " ";

const cssStyle = {};
if(curDate>=1 && curDate<12){
  greeting = "Good Morning";
  cssStyle.color = "green";
}else if(curDate>=12 && curDate <19){
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
}else{
  greeting = "Good Night";
  cssStyle.color = "black";
}


ReactDOM.render(
  <>
  <div><h1>Hello Abdul,<span style={cssStyle}>{greeting}</span>
  </h1> 
  </div>
  </>,
document.getElementById('root')
);
