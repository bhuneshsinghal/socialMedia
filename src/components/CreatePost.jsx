import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
    const { addPost } = useContext(PostListContext);

    const UserIDElement = useRef();
    const TitleElement = useRef();
    const ContentElement = useRef();
    const TagsElement = useRef();
    const ReactionElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const UserID = UserIDElement.current.value;
        const Title = TitleElement.current.value;
        const Content = ContentElement.current.value;
        const Tags = TagsElement.current.value.split(' ');
        const reaction = ReactionElement.current.value;

        addPost(UserID, Title, Content, Tags, reaction);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="createPost">
                <div className="mb-3">
                    <label htmlFor="UserID" className="form-label">Enter Your User Id here</label>
                    <input type="text" ref={UserIDElement} className="form-control" id="userid" placeholder="User Id" />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input type="text" ref={TitleElement} className="form-control" id="title" placeholder="How are you feeling today...." />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Post Content</label>
                    <textarea type="text" ref={ContentElement} className="form-control" id="body" rows={4} placeholder="Tell us more about it" />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type="text" ref={TagsElement} className="form-control" id="tags" placeholder="Enter related hashtags of this post using space" />
                </div>
                <div className="mb-3">
                    <label htmlFor="reaction" className="form-label">Enter Number of reactions</label>
                    <input type="text" ref={ReactionElement} className="form-control" id="reaction" placeholder="Enter how many people reacted to this post." />
                </div>
                <button type="submit" className="btn btn-primary createPostButton">Post</button>
            </div>

        </form>
    );
}

export default CreatePost;