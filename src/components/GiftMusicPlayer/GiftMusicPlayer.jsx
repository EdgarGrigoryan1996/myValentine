import s from "./GiftMusicPlayer.module.scss"
import musicImg from "../../assets/images/1.jpg"
import {useRef, useState} from "react";
import {IoCloseCircleSharp, IoCloudDownloadOutline} from "react-icons/io5";
import bgMusic from "../../assets/music/bg.mp3"
import {FaArrowUp, FaWindowClose} from "react-icons/fa";
import {RiEyeCloseFill} from "react-icons/ri";
import {GrClose} from "react-icons/gr";
function GiftMusicPlayer(props) {
    const audioSrc = props.music; // путь к файлу
    const audioRef = useRef(null);
    const audioBlockRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        const audio = audioRef.current;
        if(!audio) return;
        if(audio.paused){
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    }

    const formatTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60).toString().padStart(2, "0");
        return `${min}:${sec}`;
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleSeek = (e) => {
        const value = Number(e.target.value);
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    };

    const closePlayer = () => {
        if (!audioBlockRef.current) return;

        audioBlockRef.current.classList.add(s.hiddenAudio);
    }

    const openPlayer = () => {
        if (!audioBlockRef.current) return;

        audioBlockRef.current.classList.remove(s.hiddenAudio);
    }


    return (
        <div
            ref={audioBlockRef}
            className={props.music === bgMusic ? s.hiddenAudio : s.audioBlock}
            onClick={() => {
                props.setOpened(true)
                openPlayer();
            }}
        >
            <span className={s.close} onClick={(e) => {
                if(props.opened){
                    e.stopPropagation();
                    closePlayer();
                    props.setOpened(false);
                } else {
                    e.stopPropagation();
                    openPlayer();
                    props.setOpened(true);

                }

            }}>{props.opened ? <GrClose /> :<FaArrowUp color={"#9e39f1"}/>}</span>
            <audio ref={audioRef}
                   className={s.realAudio}
                   src={props.music}
                   autoPlay={true}
                   loop={true}
                   controls
                   onTimeUpdate={handleTimeUpdate}
                   onLoadedMetadata={handleLoadedMetadata}
            > </audio>
            <div className={s.musicImage}>
                <div className={s.imageWave}></div>
                <img className={!isPlaying ? s.stopedAnimationImage + " " + s.image : s.image} src={musicImg} alt="MusicImg"/>
            </div>
            <div className={s.musicTitle}>
                <h3>I Was Made For Lovin You</h3>
                <h5>My Armine ❤️</h5>
            </div>


            <div className={s.audioBox}>

                <div className={s.audioBtn} id="playBtn" onClick={togglePlay}>
                    {isPlaying ? "⏸" :"▶"}
                </div>

                <div className={s.audioInfo}>
                    <div className={isPlaying ? s.audioWavePlaying : s.audioWave}>
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <div className={s.audioProgressBox}>
                        <span className={s.currentTime} id="currentTime">{formatTime(currentTime)}</span>
                        <input className={s.audioProgress}
                               type="range"
                               id="progress"
                               value={currentTime}
                               min="0"
                               max={duration || 0}
                               onChange={handleSeek}
                        />

                        <span id="duration">{formatTime(duration)}</span>
                        <a href={audioSrc} download className="download-btn">
                            <IoCloudDownloadOutline color={"#9e39f1"} size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default GiftMusicPlayer;