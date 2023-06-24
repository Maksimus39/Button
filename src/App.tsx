import './App.css';
import Button from "./components/button/Button";


function App() {

    const Color = (color: string) => {
        console.log(color)
    }
    return (
        <div className={'App'}>
            <Button name={'Apple'} callback={()=>Color('red')}/>
        </div>
    )
}

export default App;
