import { useContext } from "react";
// import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";
const Post = ({ post }) => {
    const { deletePost } = useContext(PostListContext);
    return (
        <div className="card post-card" style={{ width: "18rem" }}>
            <div className="card-body cardBeauty">
                <h5 className="card-title">{post.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deletePost" onClick={() => deletePost((post.id))}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24px"
                            height="24px"
                        >
                            <path d="M3 6h18v2H3V6zm2 3h14v12H5V9zm5 2v8h2v-8H8v8h2zm4-2v8h2v-8h-2zm-2-5h2V2H9v2H5v2h14V4h-4V2h-2v2h-2z" />
                        </svg>
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