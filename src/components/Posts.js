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

/*Ovde se 'dozvoljava' tj. kaze se sta sve pripada Posts komponenti.*/
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

/*Sada sledi mapiranje dozvoljene komponente koja sadrzi iteme.*/
const mapStateToProps = (state) => ({
    posts: state.posts.items,//Ovo su ono 'items' iz reducer-a sa imenom 'post'.
    newPost: state.posts.item
});

/*Povezi mapStateToProps skupinu itema sa fetchPosts koji ih donosi 
i to primeni na Posts komponentu.*/
export default connect(mapStateToProps, { fetchPosts })(Posts);