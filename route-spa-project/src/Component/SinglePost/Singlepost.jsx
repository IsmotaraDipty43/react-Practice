
import { Link, useNavigate } from "react-router-dom";

const Singlepost = ({post}) => {
    const navigate = useNavigate();
    const {id,title,body} = post;
    const handleShowDetails=()=>{
         navigate(`/post/${id}`);
    }

    return (
        <div className="border border-red-400  p-3">
            <p>Post of id:{id}</p>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Post details</Link> <br />
            <button onClick={handleShowDetails}>ClickHere</button>
           
        </div>
    );
};

export default Singlepost;