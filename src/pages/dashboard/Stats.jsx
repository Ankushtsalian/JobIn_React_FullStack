import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatsContainer, ChartsContainer } from "../../components";
import { showStats } from "../../feature/allJobs/allJobsSlice";

const Stats = () => {
  const { monthlyApplications } = useSelector((state) => state.allJobs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
