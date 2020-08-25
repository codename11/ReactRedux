import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => {
    console.log("fetching...");
    return (dispatch) => {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json();
        })
        .then((posts) => {

            console.log(posts);

            dispatch({
                type: FETCH_POSTS,
                payload: posts
            });

        });

    };

}

export const createPost = (post) => {
    console.log("creating...");
    return (dispatch) => {

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then((response) => {
            return response.json();
        })
        .then((post) => {
            
            console.log(post);

            dispatch({
                type: NEW_POST,
                payload: post
            });

        });

    };

}