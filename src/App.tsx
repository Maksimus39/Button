import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./component/Button";


function App() {
    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log('Stupid Button')
    }
    return (
        <div className={"App"}>
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('Dima', 21)}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('Max')}/>
            <Button name={'Stupid Button'} callBack={() => Button3Foo()}/>
        </div>
    );
}
export default App;
