import Link from 'next/link';
import React, {Component} from 'react';

class StoriesMiddleSection extends Component {
    state ={
        clinicalVeterinarian:"",
        athlete:"",
        horseRider:""
    };
    componentWillMount(){
        let {storiesCategory} = this.props;
        switch (storiesCategory) {
            case "Clinical Veterinarian": this.setState({ clinicalVeterinarian:"active", athlete:"", horseRider:""})
            break;
            case "Athlete": this.setState({ clinicalVeterinarian:"", athlete:"active", horseRider:""})
                break;
            case "Horse Rider": this.setState({ clinicalVeterinarian:"", athlete:"", horseRider:"active"})
                break;
        }
    }
    render(){
        let {clinicalVeterinarian, athlete, horseRider} = this.state;
        return(
            <section className="public-img">
                <div className="container">
                    <div className="primary-container">
                        <div>
                            <ul>
                                <li><a href="#" className="active">Stories</a></li>
                            </ul>
                        </div>
                        <div style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url('/static/images/buffalo.png')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover", backgroundPosition: "center",}}>
                            <ul>
                                <li><span><Link href="/clinical-veterinarian"><a className={clinicalVeterinarian}>Clinical Viterinarian</a></Link></span></li>
                                <li><span><Link  href="/athlete"><a className={athlete}>Athlete</a></Link></span></li>
                                <li><span><Link  href="/horse-owner-rider"><a className={horseRider}>Horse Rider</a></Link></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default StoriesMiddleSection;