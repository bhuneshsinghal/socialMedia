import { createContext, useReducer } from "react";


const DEFAULT_POST_LIST = [
    {
        'id': 1,
        'title': "Going to Mumbai",
        "body": "For getting peaceful life, I am heading towards Mumbai",
        "reaction": 1,
        "tags": ["Vacation", "Mumbai", "Long Drive"],
        "user": 1
    },
    {
        'id': 2,
        'title': "Graduating Today",
        "body": "Bye Bye Btech forever, Don't know how this has been passed",
        "reaction": 10,
        "tags": ["Graduating", "Delhi", "Emotional"],
        "user": 2
    }
]
export const PostListContext = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});



const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "Add_Post") {
        newPostList = [action.payload, ...currPostList]
    }
    else if (action.type === "Delete_Post") {
        newPostList = currPostList.filter(item => item.id !== action.payload.postId);
    }

    return newPostList;
}





const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (Userid, Title, Content, Tags, Reaction) => {
        const addItem = {
            type: "Add_Post",
            payload: {
                id: Date.now(),
                title: Title,
                body: Content,
                tags: Tags,
                reaction: Reaction,
                user: Userid
            }
        }
        dispatchPostList(addItem);
    }

    const deletePost = (postId) => {
        const deleteItem = {
            type: "Delete_Post",
            payload: {
                postId
            }
        }
        dispatchPostList(deleteItem);
    }

    return (
        <PostListContext.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostListContext.Provider>
    );
}

export default PostListProvider;