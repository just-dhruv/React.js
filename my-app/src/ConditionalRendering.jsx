function ConditionRendering(){
    
    // USEING IF CONDITION
    const isLogedIn = true;
    let message;
    if (isLogedIn) {
        message = <h1>Welcome user.</h1>
    }else{
        message = <h1>Bye user.</h1>
    }
    // message = isLogedIn ? <h1>Welcome user.</h1> : <h1>Bye user.</h1> ;
    return <div>{message}</div>

    // USING TERNARY OPERATOR
    // return(
    //     <div>
    //         {isLogedIn ? <h1>Welcome user.</h1> : <h1>Bye user.</h1>}
    //     </div>
    // )

    // USING OPERATORS
    // const hasMessage = false
    // return(
    //     <div>
    //         {hasMessage && <p>Yor AND condition is passed.</p>}
    //         {hasMessage || <p>Yor OR condition is passed.</p>}
    //     </div>
    // )

    // USED THE CSS CLASSES 
    // const isVisible = true;
    // return(
    //     <>
    //         <p>Current value : {isVisible.toString()}</p>
    //         <div className={isVisible ? "visible" : "unvisible"}>
    //             <h1>Hello Dhruv!</h1>
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolor!</p>
    //         </div>
    //     </>
    // )

}

export default ConditionRendering