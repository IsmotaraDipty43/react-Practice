import { useParams, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const params = useParams();
    console.log(params);
    console.log(error);
    return (
        <div>
           <h1>OOpss</h1> 
           <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;