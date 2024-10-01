import { Link } from "react-router-dom";
import Form from "../components/Form";

function Login() {
    return (
        <>
            <Form route="/api/token/" method="login" />
            <p className="para-info">
                {`Don't have account ?`} <Link to="/register">{`Register Here`}</Link>
            </p>
        </>
    );
}

export default Login;
