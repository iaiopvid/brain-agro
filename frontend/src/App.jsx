import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Box, Typography } from "@mui/material";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AreaChart from "./pages/AreaChart";
import AreaEstadoChart from "./pages/AreaEstadoChart";
import AreaCulturaChart from "./pages/AreaCulturaChart";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" color="inherit">
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="dashboard" color="inherit">
            <Button color="inherit">Dashboard</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Typography variant="h5">
          Brain Agro
        </Typography>
      </Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="area" element={<AreaChart />} />
          <Route path="estados" element={<AreaEstadoChart />} />
          <Route path="culturas" element={<AreaCulturaChart />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
