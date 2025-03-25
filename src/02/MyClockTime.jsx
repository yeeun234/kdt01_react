import { useState, useEffect } from "react";
import TailButtonLine from "../UI/TailButtonLine";
import styles from "./MyClockTime.module.css"
function MyClockTime() {
    const [currentTime, setCurrentTime] = useState(new Date());
    

    const handleClick = () => {
        setCurrentTime(new Date());
    }

    useEffect(()=>{
        let tm = setInterval(()=>{
            setCurrentTime(new Date())
        },1000);

        return () =>{
            clearInterval(tm);
        }
    },['']);
    
    const fontStyle = {
        fontWeight: 'bold',
        fontSize: '20px',
       
    }
    return(
        <div className={styles.pst}>
            <h1>현재시각은 <span style={fontStyle}>{currentTime.toLocaleTimeString()}</span> 입니다.</h1>
            {/* <TailButtonLine bgColor="orange" html="버튼" onClick={handleClick}></TailButtonLine> */}
        </div>
    )

}

export default MyClockTime;