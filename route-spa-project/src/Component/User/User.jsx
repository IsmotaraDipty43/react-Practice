import { Link } from "react-router-dom";


const User = ({userr}) => {
    const {id, name, phone,email} =userr;
    return (
        <div className="border border-red-300 border-lg text-xl rounded-lg p-5">
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>phone:{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default User;