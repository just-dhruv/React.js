import { useState } from "react"

function Students() {

    const [students, setStudents] = useState({
        name: "Dhruv Dhameliya",
        age: 22,
        course: "MERN Stack Development"
    })

    function updateStudentDetails(){
        setStudents({
            name: "just dhruv",
            age: 26,
            course: "full stack development"
        })
    }

    function changeAge(){
        setStudents({...students, age: 30})
    }

    return (
        <>
            <h1>Student Name: {students.name} </h1>
            <h2>Student Age: {students.age} </h2>
            <h3>Student Course: {students.course} </h3>

            <button onClick={updateStudentDetails}>
                Update Student Details
            </button>

            <button onClick={changeAge}>Change Age</button>
        </>
    )  
}

export default Students;    