import { Box, Typography } from "@mui/material";
import Home from "./pages/Home";
import AreaChart from "./pages/AreaChart";
import AreaEstadoChart from "./pages/AreaEstadoChart";
import AreaCulturaChart from "./pages/AreaCulturaChart";

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
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AreaChart />
          </Box>
          <Box
            sx={{
              width: "25%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AreaEstadoChart />
          </Box>
          <Box
            sx={{
              width: "25%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AreaCulturaChart />
          </Box>
        </Box>
      </Box>
      <Home />
    </Box>
  );
};

export default App;
