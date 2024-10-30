import { useLoaderData } from "react-router-dom";
import Singlepost from "../SinglePost/Singlepost";
const Post = () => {
    const posts =useLoaderData();

    return (
        <div>
            <h2>post:{posts.length}</h2>
            <div className="grid grid-cols-3  gap-10">
                {posts.map(post=><Singlepost post={post} key={post.id}></Singlepost>)}
            </div>
        </div>
    );
};

export default Post;