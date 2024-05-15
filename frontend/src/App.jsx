import { Box, Typography } from "@mui/material";
import Home from "./pages/Home";
import AreaChart from "./pages/AreaChart";

const App = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Typography variant="h5">
          Brain Agro
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
          color: "white",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AreaChart />
        </Box>
      </Box>
      <Home />
    </Box>
  );
};

export default App;
