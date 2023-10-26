import {MainBlock} from "./components/MainBlock/MainBlock";
import {BackgroundChanger} from "./components/BackgroundChanger/BackgroundChanger";
import {Header} from "./components/Header/Header";
import {YandexMaps} from "./components/YandexMaps/YandexMaps";
import {CardBlock} from "./components/CardBlock/CardBlock";

import data from './data.json';

import './App.css'


function App() {



    return (
        <div className='app'>
            <Header />
            <BackgroundChanger>
                <div className="mainBlock">
                    <MainBlock />
                </div>
            </BackgroundChanger>
            <CardBlock data={data} />
            <YandexMaps />
        </div>
    )
}

export default App

