import React, {Component} from "react";
import Header from "../header/headerContainer";
import Footer from "../footer";

class index extends Component {

    state = {
        type: null
    };

    componentWillMount() {
        this.setState({type: this.props.type});
        // const script = document.createElement("script");
        // script.src = "https://js.hsforms.net/forms/v2.js";
        // script.async = true;
        // document.body.appendChild(script);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({type: nextProps.type})
    }

    render() {
        let {type} = this.state;
        return (
            <>
                <Header type={type}/>
                {this.props.children}
                <Footer/>
            <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/6858913.js"/>
            </>
        )
    }
}

export default index;
