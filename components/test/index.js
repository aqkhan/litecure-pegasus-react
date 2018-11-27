import React, { Component } from "react";
class Test extends Component{
    state={
        home:"",
        data:""
    }
    setValue(){
        this.props.dispatch({
            type: "menu"
        })
        this.props.dispatch({
            type: "header",
            payLoad: "active"
        })
        this.props.dispatch({
            type: "data",
            payLoad: "Data aa rha he"
        })
    }
    render(){
        return(
            <div className="container">
                {/*<section className="new-header">*/}
                    <input type="text" onChange={()=>this.setState({data})}/>
                    <button onClick={()=>this.setValue()}>send</button>
                {/*</section>*/}
            </div>
        )
    }

}

export default Test;
