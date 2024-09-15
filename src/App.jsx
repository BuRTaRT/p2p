import './App.css'
import Header from "./layout/Header.jsx";
import HowItWorks from "./layout/HowItWorks.jsx";
import ManageLife from "./layout/ManageLife.jsx";
import InsiderInfo from "./layout/InsiderInfo.jsx";
import Chicken from "./layout/Chicken.jsx";
import PopUp from "./components/PopUp.jsx";
import {useState} from "react";

function App() {
    const [isVisiblePopUp, setIsVisiblePopUp] = useState(false);

    const setIsVisible = (e) => {
        setIsVisiblePopUp(true)
    }
    const setIsInvisible = (e) => {
        setIsVisiblePopUp(false)
    }
    return (
        <div className={'wrapper'}>
            {isVisiblePopUp && <PopUp onIsInvisible={setIsInvisible}/>}
            <Header onIsVisible={setIsVisible}/>
            <HowItWorks/>
            <ManageLife/>
            <InsiderInfo/>
            <Chicken/>
        </div>
    )
}

export default App
