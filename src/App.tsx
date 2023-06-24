import './App.css';
import React, {MouseEvent} from 'react';
import Button from "./components/button/Button";


function App() {
const Up = (up: string) => {
    console.log(up)
}
    const Down = (down: string) => {
        console.log(down)
    }
    const Bass = (down: string, up: string) => {
        console.log(down, up)
    }
    const Treble = (down: string, up: string) => {
        console.log(down, up)
    }

    return (
        <div className={'App'}>
            <Button name={'volume +'} callback={()=>Up('+')}/>
            <Button name={'volume -'} callback={()=>Down('-')}/>
            <Button name={'Bass'} callback={()=>Bass('-', '+')}/>
            <Button name={'Treble'} callback={()=>Treble('-', '+')}/>
        </div>
    )
}

export default App;
