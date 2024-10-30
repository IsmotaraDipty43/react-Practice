import { useLoaderData } from "react-router-dom";


const Userdetails = () => { 
    const user = useLoaderData();
    const {name,website} = user;
    return (
        <div>
            <h2> userDetails : {name}</h2>
            <p>{website}</p>
        </div>
    );
};

export default Userdetails;