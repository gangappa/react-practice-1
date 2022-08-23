import {useState, useMemo} from 'react'
export default function UseMemo() {
    let [count, setCount] = useState(0)

    let updateCount = () => {
        setCount(count+1)
    }

    let multiCountMemo = useMemo(function multiCount() {
        console.log("Multicount function called");
        return count*5
    }, [count])

    

    return (
        <div>
            <h1>Use memo here</h1>
            <h4>Count is: {count}</h4>
            <h4>Multicount : {multiCountMemo}</h4>
            <button onClick={() => {
                updateCount()
            }}>Update</button>
        </div> 
    )
}