import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { loginUser } from "../../services/loginService";
import { useEffect, useState } from "react";
import { useAuth, useAuthAction } from "../../Providers/AuthProvider";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("format invalid").required("email is required"),
  password: Yup.string().required("password required"),
});

const LoginForm = () => {
  const [error, setError] = useState("");
  const setAuth=useAuthAction();  
  let navigate=useNavigate();
  const [searchParam] = useSearchParams();
  const redirect = searchParam.get("redirect") || "/";
  const auth=useAuth();

  useEffect(()=>{
    if(auth) navigate(`/${redirect}`);
  },[redirect,auth]);
  
  const onSubmit = async (values) => {
    try {
      const {data}=await loginUser(values);
      setAuth(data);
      // localStorage.setItem('authState',JSON.stringify(data));
      setError(null);
      navigate(`/${redirect}`);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit} className="formControl">
        <Input name="email" type="text" label="Email" formik={formik} />
        <Input name="password" type="text" label="Password" formik={formik} />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn primary"
        >
          Login
        </button>
        <p style={{ color: "red" }}>{error}</p>
        <NavLink to={`/signup?redirect=${redirect}`}>
          <p>Not register yet?</p>
        </NavLink>
      </form>
    </div>
  );
};

export default LoginForm;
