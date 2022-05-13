import { useEffect } from "react";

import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../feature/allJobs/allJobsSlice";
import Job from "./Job";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const { jobs, isLoading, page, totalJobs, numOfPages } = useSelector(
    (state) => state.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    //eslint-disable-next-line
  }, []);

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
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
