import React, {useState} from 'react'
import homeworks from '../h1/homeworks'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

     const onChangeRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    } 

    return (
        <div>
            <hr/>
            {homeworks(11)}

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange value1={value1} onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange onChangeRange={onChangeRange} min={0} max={100} step={1} value={[value1, value2]} />

                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
