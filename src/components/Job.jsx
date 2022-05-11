import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import moment from "moment";
import { deleteJob } from "../feature/job/jobSlice";

const Job = (props) => {
  const { _id, position, company, jobLocation, jobType, createdAt, status } =
    props;

  const date = moment(createdAt).format("MMM Do, YYYY");
  const dispatch = useDispatch();

  const deleteJobWithId = () => {
    console.log(_id);
    dispatch(deleteJob(_id));
  };

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        {/* content center later */}
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link to="/add-job" className="btn edit-btn">
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={deleteJobWithId}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
