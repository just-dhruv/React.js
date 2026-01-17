
function FruitList(){
    const a = ['orange', 'apple', 'mango']
    return(
        <>
            <div>
                <ul>
                    {a.map((fruit, index) => (
                        <li key={fruit}>{index} - {fruit}</li>
                    ))}

                </ul>
            </div>
        </>
    )
}


function ObjectName(){
    const b = {
        'name' : "Dhruv",
        'surname' : "Dhameliya"
    }

    function fullName(b){
        return b.name + ' ' + b.surname;
    }

    return(
        <>
            <h2>Objects</h2>
            <p>Name: {b.name}</p>
            <p>Surname: {b.surname}</p>

            <p>Fullname: {fullName(b)}</p>
        </>
    )
}

function ObjectArray(){
    const users = [
        {name: 'dhruv', lname: 'dhameliya', age:'22'},
        {name: 'Rahul', lname: 'dhameliya', age:'22'},
        {name: 'dhruv', lname: 'dhameliya', age:'22'}

    ]
    function full(user){
        return user.name + ' ' + user.lname;
    }
    return(
        <>
            <h2>object of array</h2>
            <ul>                
                {users.map((user, index)=>(
                    // <li>{index} Name : {user.name} {user.lname}, age: {user.age}</li>

                    <li>{index} : {full(user)} is {user.age} years old.</li>
                ))}
            </ul>

        </>
    )
}

export default FruitList
export {ObjectName}
export {ObjectArray}