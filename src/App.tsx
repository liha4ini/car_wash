import './App.css'
import {MainBlock} from "./components/MainBlock/MainBlock";
import {BackgroundChanger} from "./components/BackgroundChanger/BackgroundChanger";
import {Header} from "./components/Header/Header";


function App() {

    return (
        <div className='app'>
            <Header />
            <BackgroundChanger>
                <div className="mainBlock">
                    <MainBlock />
                </div>
            </BackgroundChanger>
        </div>
    )
}

export default App

