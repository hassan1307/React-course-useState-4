import React, { useState } from 'react'

const ObjectUseState = () => {
    const [person, setPerson] = useState({
        name: 'Ahmed',
        age: 19,
        message: 'hello world!'
    })
    const changeMessage = () => {
        setPerson({...person, message:'change message'})
    }
return (
    <>
        <div className="container text-center text-capitalize">
            <h1> name: {person.name} </h1>
            <h3> age: {person.age} </h3>
            <h5> message: {person.message} </h5>
            <button onClick={changeMessage} className="btn btn-secondary">
                Change Message
            </button>
        </div>
    </>
)
}

export default ObjectUseState
