import { useState } from "react";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const { name, email, lastName, location } = userData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      toast.error("please fill out all fields");
      return;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />

          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            value={lastName}
            handleChange={handleChange}
          />

          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
          />

          <FormRow
            type="text"
            name="location"
            value={location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please wait...." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
