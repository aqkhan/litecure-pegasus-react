import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import axios from 'axios'
class  Home extends Component{
    state = {
        pages:[]
    }
    componentWillMount() {
        axios.get('http://54.234.86.247:3000/api/pages')
            .then((res)=>{
                let temp=[];
                res.data.pages.map((val)=>{
                    if (val.type==="homepage"){
                        temp.push(val);
                    }
                });
                this.setState({pages:temp})
            })
            .catch(err=>{throw err})
    }

    render() {
        let dynamic;
        if (this.state.pages){
            dynamic = this.state.pages.map((value)=>{
                return <section className="section-one" key={value.id} style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${value.featuredImage && value.featuredImage.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",}} >
                    <div className="third-row">
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-text">
                                    <p><br/><span>{value.headerImageLable}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="small-upper-line flex">
                        <div className="line"> </div>
                    </div>
                    <div className="fourth-row">
                        <div className="custom-container container">
                            <div className="row flex">
                                <div className="flex-column learnmore-header learn-home">
                                    <p dangerouslySetInnerHTML={{__html: value.leadText}}></p>
                                    <a href="#">
                                        LEARN MORE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        })}
        return(<div>
                {dynamic}
                <RequestDemo/>
                </div>
        )

}
}
export default Home;
