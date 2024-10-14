import Form from "../components/Form";
import { Link } from "react-router-dom";

function Register() {
    return (
        <>
            <Form route="/api/user/register/" method="register" />;
            <p className="para-info">
                {`Already Registered ?`} <Link to="/login">{`Click to Login`}</Link>
            </p>
        </>
    );
}

export default Register;
