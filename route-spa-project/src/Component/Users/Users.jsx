import { useLoaderData } from "react-router-dom";
import User from "../User/user"; 

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Our Users : {users.length}</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    users.map(userr => <User key={userr.id} userr={userr}></User>) 
                }
            </div>
        </div>
    );
};

export default Users;
