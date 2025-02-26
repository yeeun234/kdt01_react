import MyClockimage from "./MyClockimage";
import MyClockTime from "./MyClockTime";

function MyClock () {
    const clock = new Date().toLocaleTimeString();
    return(
        <div className="felx flex-col justyfy-center items-center">
            <MyClockimage />
            <MyClockTime />
        </div>
    )

}

export default MyClock;