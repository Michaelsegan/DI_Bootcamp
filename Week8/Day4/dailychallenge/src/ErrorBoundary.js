import React, {component} from 'react';


class ErrorBoundary extends component {
    constructor(props) {
        super(props);
        this.state = {
            hasError:false

        }
    }
    componentdidcatch(error,info){
        this.setState({hasError:true})

    }
    render(){
        if (this.state.hasError){
            return<h1>ooops. That is not good</h1>
        }
        return this.props.children
    }
}


export default ErrorBoundary;