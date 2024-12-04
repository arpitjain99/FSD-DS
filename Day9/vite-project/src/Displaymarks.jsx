import React from 'react'
import Marks from "./Marks.jsx"
const Displaymarks = () => {
    const students=[
        {name: 'Abhishek',roll:89076, m1: 89,m2: 94,m3: 89},
        {name: 'Abhi',roll:89075, m1: 98,m2: 84,m3: 79},
        {name: 'Abhi',roll:89075, m1: 98,m2: 84,m3: 79},
        {name: 'Abhi',roll:89075, m1: 98,m2: 84,m3: 79},
        {name: 'Abhi',roll:89075, m1: 98,m2: 84,m3: 79},
        {name: 'Abhi',roll:89075, m1: 98,m2: 84,m3: 79},
        {name: 'Abhi',roll:89075, m1: 98,m2: 84,m3: 79},
    ];
  return (
    <div>
        {students.map((students,index)=> (<Marks Key={index} name={students.name} roll={students.roll} m1={students.m1} m2={students.m2} m3={students.m3}/>))}
        {/* <Marks name={'Arpit Jain'} roll={2200321540038} m1={98} m2={95} m3={97}/> */}
    </div>
  )
}

export default Displaymarks