import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {

    constructor(props){
        super(props);
        this.props.fetchPosts();
    }

    //Ovo ili ovo gornje?
    /*componentDidMount(){
        this.props.fetchPosts();
    }*/

    render() {
        
        const postItems = this.props.posts.map((post, index) => {

            return <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </div>;

        });

        return (
            <div>
                <h1>Posts:</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = (state) => ({
    posts: state.posts.items,//Ovo su ono 'items' iz reducer-a.
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);