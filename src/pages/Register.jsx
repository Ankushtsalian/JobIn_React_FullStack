import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { name, email, password, isMember } = values;

  const toggleMember = () => {
    setValues((prev) => ({ ...prev, isMember: !isMember }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{isMember ? "Login" : "Register"}</h3>

        {/* name field */}
        {!isMember && (
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
        />

        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
