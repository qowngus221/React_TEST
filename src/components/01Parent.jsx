
import {useState} from 'react'
import SonComponent_01 from "./01Son"


const ParentComponent = ()=>{
    const [data2,setData2] = useState(null)
    const data = {name:"hong",age:30}

    const handleData2 = (data)=>{
        //선처리
        setData2(data)

    }

    return(
        <div>
            <SonComponent_01 data={data} handleData2={handleData2} />
            <hr></hr>
            <h2>부모 받은 데이터</h2>
            {data2 && (
                <>
                    {data2.phone} , {data2.addr}
                </>    
            )}
            
        </div>
    )
}

export default ParentComponent