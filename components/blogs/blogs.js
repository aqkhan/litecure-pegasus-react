import  React, {Component} from 'react';
import RequestDemo from '../requestDemo';
import BlogsHeader from './blogHeader';
import BlogCategory from './blogCategory';
import {API_PATH} from '../apiconfig'
import axios from 'axios';

class blogs extends Component {
    state = {
        blogs:null,
        err:null
    }
    componentDidMount(){
        axios.get(API_PATH + 'posts')
            .then((res) => {
            console.log("datacoming",res);
                let temp = [];
                res.data.posts.forEach((val) => {

                        temp.push(val);

                });
                this.setState({blogs: temp})
            })
            .catch(err => {
                this.setState({err:err})
            })
    }
    render() {
        let {blogs} = this.state;
        return (
            <div>
                <BlogsHeader blogCategory={"Posts"}/>
                <BlogCategory blogs={blogs} blogCategory={"posts"} page={"/post/"}/>
                <RequestDemo/>
            </div>
        )
    }
}
export default blogs;
