
function MyClockTime () {
    const clock = new Date().toLocaleTimeString();
    const fontStyle = {
        fontWeight: 'bold',
        fontSize: '20px',
       
    }
    return(
        <div>
            <h1>현재시각은 <span style={fontStyle}>{clock}</span> 입니다.</h1>
        </div>
    )

}

export default MyClockTime;