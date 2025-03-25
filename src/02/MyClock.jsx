import MyClockimage from "./MyClockimage";
import MyClockTime from "./MyClockTime";

function MyClock () {
    const clock = new Date().toLocaleTimeString();
    return(
        <div className="h-full  flex flex-col justify-center items-center">
            <MyClockimage />
            <MyClockTime />
        </div>
    )

}

export default MyClock;