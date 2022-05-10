import { useEffect } from "react";
// import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((state) => state.allJobs);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0)
    return (
      <Wrapper>
        <h3>No jobs to display</h3>;
      </Wrapper>
    );
  return (
    <Wrapper>
      <h5>Jobs info</h5>
      <div className="jobs">
        {/* {jobs.map((job) => (
          <job key={job._id} {...job} />
        ))} */}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
