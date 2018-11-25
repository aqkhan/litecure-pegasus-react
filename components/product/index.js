import  React , { Component } from 'react';
import axios from 'axios';
import RequestDemo from '../requestDemo';
class  Product extends Component{
            state = {
                products : []
            }

            componentWillMount(){
                axios.get('http://54.234.86.247:3000/api/products')
                    .then((res)=>{
                        let temp=[];
                        res.data.products.map((val)=>{
                                temp.push(val);
                        });
                        this.setState({products:temp})
                    })
                    .catch(err=>{throw err})
            }
    render() {
                let dynamic;
                if (this.state.products)
                {
                  dynamic =  this.state.products.map((value,index)=>{
                      console.log("index", index)
                      if (index===0){
                          return <section className="section-one bg-color" >
                              <div className="third-row">
                                  <div className="container custom-container">
                                      <div className="row flex">
                                          <div className="header-text text-extra">
                                              <p className="Product-text"><span>{value.leadText}</span></p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="container custom-container">
                                      <div className="row flex">
                                          <div className="header-image">
                                              <img src={value.featuredImage && value.featuredImage.url} className="head-img" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="small-upper-line flex">
                                  <div className="line line-ex"> </div>
                              </div>
                              <div className="fourth-row">
                                  <div className="custom-container container">
                                      <div className="row flex">
                                          <div className="flex-column learnmore-header learn-ex">

                                              <p><div dangerouslySetInnerHTML={{__html: value.shortDescription}}></div>
                                              </p>
                                              <a href={("/products/"+(value.title.replace(/%20| /g, '-'))).toLowerCase()}>
                                                  LEARN MORE
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </section>
                      }
                      else if(index%2===0){
                          return <section className="second-section" key={value.id}>
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
                                                  {Object.keys(value.spec.Name).map((data)=>{
                                                      return <li><span><b>{value.spec.Name[data]}:</b></span><span> </span><span>{value.spec.Detail[data]}</span></li>
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
                      }
                      else {
                          return <section className="third-section" key={value.id}>
                              <div className="container custom-container">
                                  <div className="row flex">
                                      <div className="PTC-PEGASUS">
                                          <span>{value.title}</span><p>{value.leadText}</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="container custom-container">
                                  <div className="row image-container">

                                      <div className="col-sm-6 mn">
                                          <img src={value.featuredImage && value.featuredImage.url} className="image34"/>
                                      </div>
                                      <div className="col-sm-6 ms">
                                          <div>
                                              <div dangerouslySetInnerHTML={{__html: value.shortDescription}}></div>
                                              <br/>
                                              <br/>
                                              <h3>Specifications</h3>
                                              <ul>
                                                  {Object.keys(value.spec.Name).map((data)=>{
                                                      return <li><span><b>{value.spec.Name[data]}:</b></span><span> </span><span>{value.spec.Detail[data]}</span></li>
                                                  })}
                                              </ul>
                                          </div>
                                      </div>

                                  </div>
                              </div>

                          </section>
                      }
                    })
                }
        return (
            <div>
                {/*<section className="section-one bg-color" >*/}
                    {/*<div className="third-row">*/}
                        {/*<div className="container custom-container">*/}
                            {/*<div className="row flex">*/}
                                {/*<div className="header-text text-extra">*/}
                                    {/*<p className="Product-text">EMPOWER <b>DS</b><br/> <span>DELIVERY SYSTEM</span></p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="container custom-container">*/}
                            {/*<div className="row flex">*/}
                                {/*<div className="header-image">*/}
                                    {/*<img src="/static/images/2018-09-12.png" className="head-img" />*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="small-upper-line flex">*/}
                        {/*<div className="line line-ex"> </div>*/}
                    {/*</div>*/}
                    {/*<div className="fourth-row">*/}
                        {/*<div className="custom-container container">*/}
                            {/*<div className="row flex">*/}
                                {/*<div className="flex-column learnmore-header learn-ex">*/}

                                    {/*<p>Empower DS provides the versatility you need to treat your toughest cases. Four*/}
                                        {/*application-<br/>specific treatment heads, the patented laser-contact ball and the*/}
                                        {/*toughest fiber available make <br/>Pegasus therapy lasers clinically practical and*/}
                                        {/*ruggedly durable.</p>*/}
                                    {/*<a href="#">*/}
                                        {/*LEARN MORE*/}
                                    {/*</a>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</section>*/}
                {dynamic}
                <RequestDemo/>
            </div>
        )
    }
}
export default Product;
