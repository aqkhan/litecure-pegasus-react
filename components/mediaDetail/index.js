import React, { Component } from 'react';
import Link from 'next/link';
import RequestDemo from '../requestDemo';
import axios from "axios";
import {API_PATH} from "../apiconfig";

class MediaDetail extends Component{
    state = {
        products:null,
        pages:null
    }
    componentWillMount() {

        axios.get(API_PATH +'pages')
            .then((res)=>{
                let temp=[];
                res.data.pages.forEach((val)=>{
                    if (val.type==="resources"){
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

    render() {
        let product= null;
        let page1 = null;
        let page2 = null;
        if (this.state.products)
        {
            product =  this.state.products.map((value , index ) => {
                if(index===0){
                    return ( <section className="odd-product" key={value._id}>
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
                                    <div className="col-sm-12 col-md-12 col-lg-4 ms">
                                        <div className="second res-div">
                                            <div className="product-1-para" dangerouslySetInnerHTML={{__html: value.shortDescription}}></div>
                                            <br/>
                                            <br/>
                                            <h3><b>Specifications</b></h3>
                                            <ul>
                                                {Object.keys(value.spec.name).map((data,indexx)=>{
                                                    return <li key={indexx}><span><b>{value.spec.name[data]}:</b></span><span> </span><span>{value.spec.detail[data]}</span></li>
                                                })}
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="col-sm-8 mn">
                                        <img src={value.featuredImage && value.featuredImage.url} className="image34"/>
                                    </div>

                                </div>
                                <div className="spec-btn-div">
                                    <Link href={'/product/'+value.slug}><div className="spec-learn"><a>Learn More</a></div></Link></div>
                            </div>
                        </section>
                    </section>
        )}})}
        if(this.state.pages!==null&&this.state.pages.length>0){
             this.state.pages.map((data,index)=>{
                if(index===0){
                    page1 = <section className="new-media-detail" key={index}>
                    <section className="first-section">
                        <div className="container custom-container image-section image-container" style={{
                            background: `linear-gradient(rgba(8, 7, 7, 0.72), rgba(10, 9, 9, 0.8)), url(${data.featuredImage&&data.featuredImage.url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "500px",
                            minWidth: "100%",
                            backgroundPosition: "center"
                        }}>
                            <div className="container width-container">
                                <div className="row flex year">
                                    <div className="col-sm-1"></div>
                                    <div className="col-sm-8">
                                        <div className="quarter">
                                            <span>{data.headerImageLabel}</span>
                                            <p>{data.leadText}</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <a><img src="/static/images/images-(3).png"
                                                className="video-icon" data-toggle="modal" data-target="#myModal"/></a>
                                        <div className="modal fade" id="myModal" role="dialog">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-body" dangerouslySetInnerHTML={{__html: data.content}}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>}
                else if(index===1){
                    page2= <section className="second-section hours-img" >
                        <div className="fourth-row text-area">
                            <div className=" container">
                                <div className="row ">
                                    <div className="col-sm-4 p-0">
                                        <div className="LASER-THREAT">
                                            <h1>{data.headerImageLabel}</h1>
                                            <p>{data.leadText}</p></div>
                                    </div>
                                    <div className="col-sm-8 ">
                                        <div className=" learnmore-header" dangerouslySetInnerHTML={{__html:data.content}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="BENEFITS">
                                        <h1>{data.metaTitle}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                })
        }
        return(
            <div>
                {page1&&page1}
                <section className="new-media-detail-containers">
                    {page2&&page2}
                    {/*<section className="second-section hours-img">*/}
                        {/*<div className="fourth-row text-area">*/}
                            {/*<div className=" container">*/}
                                {/*<div className="row ">*/}
                                    {/*<div className="col-sm-12 ">*/}
                                        {/*<div className=" learnmore-header">*/}
                                            {/*<p className="extra-p">*/}
                                                {/*Pegasus products are based in evidence and provide superior outcomes.*/}
                                                {/*Protocols, techniques, and treatment recommendations are all developed based*/}
                                                {/*on a large body of scientific research to ensure you get the best clinical*/}
                                                {/*results -*/}
                                                {/*every time.*/}
                                            {/*</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="container custom-container">*/}
                                {/*<div className="row flex">*/}
                                    {/*<div className="BENEFITS">*/}
                                        {/*<h1>PROVEN</h1>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                    {/*</section>*/}
                    {/*<section className="second-section hours-img">*/}
                        {/*<div className="fourth-row text-area">*/}
                            {/*<div className=" container">*/}
                                {/*<div className="row ">*/}
                                    {/*<div className="col-sm-12 ">*/}
                                        {/*<div className=" learnmore-header">*/}
                                            {/*<p className="extra-p">*/}
                                                {/*Pegasus provides clinical solutions for every equine patient. From dressage*/}
                                                {/*horses, jumpers, hunters, cutters, to family pets, Pegasus has a therapeutic*/}
                                                {/*solution for you.*/}
                                            {/*</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="container custom-container">*/}
                                {/*<div className="row flex">*/}
                                    {/*<div className="BENEFITS performance">*/}
                                        {/*<h1>Performance</h1>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                    {/*</section>*/}
                    {/*<section className="second-section hours-img">*/}
                        {/*<div className="fourth-row text-area">*/}
                            {/*<div className=" container">*/}
                                {/*<div className="row ">*/}
                                    {/*<div className="col-sm-12 ">*/}
                                        {/*<div className=" learnmore-header">*/}
                                            {/*<p className="extra-p">*/}
                                                {/*Our team of sales, clinical, and customer support resources are here to*/}
                                                {/*support*/}
                                                {/*you long-term. With Pegasus on your team, you can rest assured that you have*/}
                                                {/*the best products that will give you superior outcomes*/}
                                                {/*<br/>*/}
                                                {/*Pegasus actively collaborates with teaching institutions, clinicians,*/}
                                                {/*and scientists*/}
                                                {/*around the world to validate current technology applications and to*/}
                                                {/*discover new*/}
                                                {/*opportunities.*/}
                                            {/*</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="container custom-container">*/}
                                {/*<div className="row flex">*/}
                                    {/*<div className="BENEFITS performance">*/}
                                        {/*<h1>Partnership</h1>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                    {/*</section>*/}
                </section>
                {product}
                <RequestDemo/>
            </div>
        )
    }
}

export default MediaDetail;
