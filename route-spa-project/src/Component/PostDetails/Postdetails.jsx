import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const Postdetails = () => {
    const post = useLoaderData();
    const{id,title,body} =post;
    const navigate = useNavigate();
    const handlepost = ()=>{
        navigate(-1);
    }
  
    const {postId} = useParams();
    console.log(postId);
    return (
        <div>
            <h3>post Details id:{id}</h3>
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={handlepost}>back</button>
        </div>
    );
};

export default Postdetails;