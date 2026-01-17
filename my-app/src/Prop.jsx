import Button from "../Button"

export default function Prop({name='default', age=25}) {

    const hobbies = ['cricket', 'chess','football']

    function Message(){
        alert('Hello, you just have clicked the button');
    }

    return(
        <>
            <h2>Hello {name}</h2>
            <p>I am {age} years old.</p>
            <ul>
                {hobbies.map((hobby)=>(
                    <li>{hobby}</li>
                ))}
            </ul>

            <Button label="Click Me" handleClick={Message} />
            <Button label="Don't Click Me" handleClick={Message} />
        </>
    )
}