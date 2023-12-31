import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="BAR" subtitle="Bar Chart Interactive Page" />
      <Box height="75vh">
        <BarChart />
      </Box>
      <BarChart />
    </Box>
  );
};

export default Bar;
