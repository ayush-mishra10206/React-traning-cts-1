import DropDownMenu from "./DropDownMenu";

const { useState } = require("react");




export default function Clock() {
    const [time, setTime] = useState(new Date());

    const onClickChangeTime = () => {
        setTime(minutesAdded(time, 10));
    }

    return (
        <div>
            <p>{time.toLocaleDateString()}</p>
            <button onClick={onClickChangeTime}>+ 10 minutes</button>

            <DropDownMenu />
        </div>
    );
}

function minutesAdded(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}
