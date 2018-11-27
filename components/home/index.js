import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import axios from 'axios'
class  Home extends Component{
    state = {
        pages:null,
        products:null,
        storyOne:"active",
        storyTwo:"",
        storyThree:"",
    }
    componentWillMount() {
        axios.get('http://54.234.86.247:3000/api/pages')
            .then((res)=>{
                let temp=[];
                res.data.pages.forEach((val)=>{
                    if (val.type==="homepage"){
                        temp.push(val);
                    }
                });
                this.setState({pages:temp})
            })
            .catch(err=>{throw err});

        axios.get('http://54.234.86.247:3000/api/products')
            .then((res)=>{
                this.setState({products:res.data.products})
            })
            .catch(err=>{throw err})
    }

   test=(type)=>{
        switch (type) {
            case 'one':
                this.setState({ storyOne:"active", storyTwo:"", storyThree:"" });
                return;
            case 'two':
                this.setState({ storyOne:"", storyTwo:"active", storyThree:"" });
                return;
            case 'three':
                this.setState({ storyOne:"", storyTwo:"", storyThree:"active" });
                return;
            default:
                return;
        }
    }

    render() {
        let product;
        if (this.state.products)
        {
            product =  this.state.products.map((value,index)=>{
                    return index===0 && <section className="odd-product" key={index}>
                                 <section className="second-section">
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="PTL-PEGASUS">
                                        <span>{value.title}</span><p>{value.leadText}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row image-container">
                                    <div className="col-sm-4 ms">
                                        <div className="second">
                                            <div dangerouslySetInnerHTML={{__html: value.shortDescription}}></div>
                                            <br/>
                                            <br/>
                                            <h3>Specifications</h3>
                                            <ul>
                                                {Object.keys(value.spec.Name).map((data,indexx)=>{
                                                    return <li key={indexx}><span><b>{value.spec.Name[data]}:</b></span><span> </span><span>{value.spec.Detail[data]}</span></li>
                                                })}
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="col-sm-8 mn">
                                        <img src={value.featuredImage && value.featuredImage.url} className="image34"/>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </section>
                })}
        let pages;
        if (this.state.pages){
            pages = this.state.pages.map((value, index)=>{
                return <section className="new-home-cards" key={index}>
                            <section className="section-one" style={{
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
                                    <div className='detail-content'><div dangerouslySetInnerHTML={{__html: value.leadText}}></div></div>
                                    <a href="#">
                                        LEARN MORE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </section>
        })}
        return(
            <div>
                <section className="new-home-cards">
                        <section key={"Home-Container"} className="section-one" >
                    <div className="third-row">
                        <div className="container custom-container">
                            <div className="row flex">
                                <div className="header-text">
                                    <p>"No comparison,<br/><span>No compromise."</span></p>
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
                                <div className="flex-column learnmore-header">

                                    <p>See why the world's toughest competitors have made Pegasus a part of their
                                        team.</p>
                                    <a href="#">
                                        LEARN MORE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </section>
                {pages}
                    {product}
                <section className="new-stories">
                    <section className="section-three" key={"Home-Slide"}>


                        <div id="myCarousel" className="carousel slide" data-ride="2000">
                            <ol className="carousel-indicators carouselinicator">
                                <li data-target="#myCarousel" data-slide-to="0" onClick={()=>this.test("one")} className={this.state.storyOne}></li>
                                <li data-target="#myCarousel" data-slide-to="1" onClick={()=>this.test("two")} className={this.state.storyTwo}></li>
                                <li data-target="#myCarousel" data-slide-to="2" onClick={()=>this.test("three")} className={this.state.storyThree}></li>

                            </ol>

                            <div className="carousel-inner">
                                <div className={`item ${this.state.storyOne}`}>
                                    <div className="section-three-overlay"></div>
                                    <div className="custom-container product-text container">
                                        <div className="row flex big-text">
                                            <div className="col-12">
                                                <p>STORIES</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="fourth-row">
                                        <div className="custom-container container">
                                            <div className="row flex">
                                                <div className="flex-column learnmore-header">

                                                    <p>"We all feel a lot better with Pegasus laser
                                                        therapy. It means a huge difference in quality of life for our
                                                        horses,particularly as they
                                                        grow older."</p>
                                                    <span>- Joanie Matus 1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`item ${this.state.storyTwo}`}>
                                    <div className="section-three-overlay"></div>
                                    <div className="custom-container product-text container">
                                        <div className="row flex big-text">
                                            <div className="col-12">
                                                <p>STORIES</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="fourth-row">
                                        <div className="custom-container container">
                                            <div className="row flex">
                                                <div className="flex-column learnmore-header">

                                                    <p>"We all feel a lot better with Pegasus laser
                                                        therapy. It means a huge difference in quality of life for our
                                                        horses, particularly as they
                                                        grow older."</p>
                                                    <span>- Joanie Matus 2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`item ${this.state.storyThree}`}>
                                    <div className="section-three-overlay"></div>
                                    <div className="custom-container product-text container">
                                        <div className="row flex big-text">
                                            <div className="col-12">
                                                <p>STORIES</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="fourth-row">
                                        <div className="custom-container container">
                                            <div className="row flex">
                                                <div className="flex-column learnmore-header">

                                                    <p>"We all feel a lot better with Pegasus laser
                                                        therapy. It means a huge difference in quality of life for our
                                                        horses, particularly as they
                                                        grow older."</p>
                                                    <span>- Joanie Matus 3</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>
                </section>
                <RequestDemo/>
                </div>
        )

}
}
export default Home;
