import './App.css';
import React, {MouseEvent} from 'react';
import {MyFamily} from './components/MyFamily/MyFamily';


function App() {
    const Rabotaet = (rabota: string, age: number, rost: number) => {
        console.log(rabota, age, rost)
    }
    const Domohozyjca = (dom: string, age: number) => {
        console.log(dom, age)
    }
    const Chcolnik = (chcola: string, age: number) => {
        console.log(chcola, age)
    }
    const SiditDoma = (igraet: string, age: number) => {
        console.log(igraet, age)
    }
    return (

        <div className={'App'}>
            {/*<button>MyFamily-1</button>*/}
            {/*<button>MyFamily-2</button>*/}

            <MyFamily name={'Macsim'} callback={()=>Rabotaet('Papa', 39, 173)}/>
            <MyFamily name={'Larisa'} callback={()=>Domohozyjca('Mama',37)}/>
            <MyFamily name={'Andrej'} callback={()=>Chcolnik('Sinock', 10)}/>
            <MyFamily name={'Bogdan'} callback={()=>SiditDoma('MlSinock', 7)}/>
        </div>
    )
}

export default App;
