import React from "react";
import style from "./Video/Video.module.css"
import videoRyM from "../image/Rick and Morty - Intro [4K_60FPS].mp4"


const VideoRyM = () => {
    return (
        <div className={style.videoBox}>
            <video src={videoRyM} autoPlay loop muted></video>
            <div className={style.overlay}></div>
        </div>
        
    )
}



export default VideoRyM;