import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";
const Post = ({ post }) => {
    const { deletePost } = useContext(PostListContext);
    return (
        <div className="card post-card" style={{ width: "18rem" }}>
            <div className="card-body cardBeauty">
                <h5 className="card-title">{post.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deletePost" onClick={() => deletePost((post.id))}>
                        <MdDelete />
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map(tag => (<span key={tag} className="badge text-bg-primary badgePr">{tag}</span>))}
                <div className="alert alert-success small-item likesAuthor" role="alert">
                    <span className="Likes">Likes: {post.reaction} </span>
                    <span className="Author">Author: {post.user}</span>
                </div>

            </div>
        </div>
    );
}

export default Post;