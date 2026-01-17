import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state= { hasError: false, error: null, errorInfo: null }
    }

    static getDerivedStateFromError(error){
        return { hasError: true, error: error }
    }

    componentDidCatch(error, errorInfo){
        console.log('Error caught: ', error, errorInfo);
    }

    render(){
        if(this.state.hasError){
            // return <h2>Something went wrond!</h2>;
            return (
                <div>
                    {/* <h2>{ this.props.fallback }</h2>; // to use the fallback property */}
                    <p> { this.state.error.message }</p>
                </div>
            )
        } else{
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary