// import Bye from './Bye.jsx'

function Hello(){

    // USED ONE FUNCTION FOR MANY VARIABLE
    // function getName(yourName){
    //     return yourName
    // }

    // SAME FUNCTON BUT USING ARROW FUNCTION
    const getName = (yourName) => {
        return yourName
    }

    const handleClick = () => {
        alert('Button was click');
    }

    const handleInput = (event) => {
        console.clear();
        console.log(event.target.value);
    }

    const handleHover = () => console.log('Mouse Hovered.');
    const handleDoubleClick = () => console.log('Double Cliked');

    const name="Dhruv"
    const name1="Rahul"
    return(
    <>
        <h2>Hello {name}</h2>
        {/* <Bye /> */}

        <h2>How are you Mr. {getName(name)}</h2>
        <h2>How are you Mr. {getName(name1)}</h2>
        <h2>How are you Mr. {getName("HELLO")}</h2>

        {/* EVENTS */}
        <button onClick={handleClick}>Click</button> <br />
        <button onClick={()=>{alert('Hello');}}>say hello</button>

        <br />
        <br />
        <input type="text" onChange={handleInput} placeholder="Type Something"/>
        <br />

        {/* TWO EVENTS IN ONE ELEMENT */}
        <button onMouseOver={handleHover} onDoubleClick={handleDoubleClick}>Hover or Double Click</button> <br/>
    </>
    )
}

export default Hello