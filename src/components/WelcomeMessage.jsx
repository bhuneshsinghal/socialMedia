import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post-list-store";
import LoadingState from "./LoadingState";
const WelcomeMessage = () => {

    const { addInitialPosts, postList } = useContext(PostListContext)
    useEffect(() => {

        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => addInitialPosts(data.posts));
    }, [])





    return (
        <>
            <div className="welcomeContainer">
                <LoadingState></LoadingState>
                <h2 className="welcomeMessage"> There are no post available right now </h2 >
            </div>

        </>

    );

}

export default WelcomeMessage;