import React, { useState } from "react";
import { login } from "../apis/auth";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = ({setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await login(values.username, values.password);
      if (res && res.access_token) {
        localStorage.setItem("token", res.access_token);
        setToken(res.access_token);
        navigate("/todos");
      } else {
        console.error("Login failed");
      }
    },
    validate: (values) => {
      const errors = {};
      //username validation as an email
      if (!values.username) {
        errors.username = "Required";
      }
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
      //   ) {
      //     errors.username = "Invalid email address";
      //   }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Email address:
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className="errors">{formik.errors.password}</div>
        ) : null}
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
