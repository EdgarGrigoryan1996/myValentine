import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import MyValentine from "./pages/MyValentine.jsx";
import s from "./pages/Home.module.scss";
import {useState} from "react";
import Plyonka from "./components/Plyonka/Plyonka.jsx";
import bgMusic from "./assets/music/bg.mp3"
import GiftMusicPlayer from "./components/GiftMusicPlayer/GiftMusicPlayer.jsx";
function App() {
    const [music,setMusic] = useState(bgMusic);
    const [opened, setOpened] = useState(false);


  return (
    <>
        <div className={s.homeWrapper}>

            <Plyonka />
            <div className={s.homeBlock}>
                <Routes>
                    <Route path="/home" element={<Home  />}/>
                    <Route path="/valentine" element={<MyValentine setMusic={setMusic} setOpened={setOpened}/>}/>
                    <Route path="*" element={<h1>Ooooops 404 Not Found</h1>}/>
                </Routes>
                <GiftMusicPlayer music={music} setMusic={setMusic} opened={opened} setOpened={setOpened}/>
            </div>

        </div>

    </>
  )
}

export default App
