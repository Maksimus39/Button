import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
   /* const myFirstSubscriber =(event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log('hello VASYA!')
    }
    const mySecondSubscriber=(event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log('hello ivan')
    }*/
    const  onClickHandler=(name: string)=>{
        console.log(name)
    }
  return (
    <div className="App">
    {/* <button onClick={(event)=>{console.log('hello')}}>MyYouTubeChannel-1</button>*/}
     <button onClick={(event:React.MouseEvent<HTMLButtonElement>)=>onClickHandler('VASYA')}>MyYouTubeChannel-1</button>
     <button onClick={(event:React.MouseEvent<HTMLButtonElement>)=>onClickHandler('ivan')}>MyYouTubeChannel-2</button>
    </div>
  );
}

export default App;
