// import { Box } from "@mui/material";
import AreaChart from "./AreaChart";
import AreaEstadoChart from "./AreaEstadoChart";
import AreaCulturaChart from "./AreaCulturaChart";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Dashboard = () => {
    return (
      <Container maxWidth="sm">
        <Box 
          sx={{
            my: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "20px"
          }}
        >
          <AreaChart />
          <AreaEstadoChart />
          <AreaCulturaChart />
        </Box>
      </Container>
    );
};

export default Dashboard;
