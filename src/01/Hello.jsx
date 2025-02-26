import HelloDate from './HelloDate'


function Hello() {
    let name = undefined;
  return (
    <h1>
     {/* /{name ==undefined? "이름이 존재하지 않습니다." :`${name} Hello!`}  */}

        {name && `${name} Hello!` } 
        {/* name이  undefined 면 false이니 뒤에꺼가 출력이 안됨. */}
        
        <HelloDate/>
    </h1>

  )
}

export default Hello