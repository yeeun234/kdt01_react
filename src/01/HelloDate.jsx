
function HelloDate(){
    const current = new Date();

    const tStyle = {
        backgroundColor: 'pink',
        fontSize: '18px',
        
    }
    return(
        
       <div style={tStyle}>
            현재시각 : 
            <span style={{color:"yellow",fontSize:"40px"}}>{current.toLocaleTimeString()}</span>
            {/* /* //객체를 그대로 출력할 순 없으니 타임을 스트링으로 변경하여 출력 */} 
       </div>
        
    )
}

export default HelloDate;