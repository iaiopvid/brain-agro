import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducer,
  fetchProducer,
  removeProducer,
  modifiedProducer,
  changeStateTrue,
  changeStateFalse,
} from "../feature/producerSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, producerList, error, updateState, response } = useSelector(
    (state) => state.producerKey
  );
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [nomeFazenda, setNomeFazenda] = useState("");
  const [areaTotal, setAreaTotal] = useState(null);
  const [areaAgricultavel, setAreaAgricultavel] = useState(null);
  const [areaVegetacao, setAreaVegetacao] = useState(null);
  const [culturasPlantadas, setCulturasPlantadas] = useState("");

  useEffect(() => {
    dispatch(fetchProducer());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      addProducer({
        nome: nome,
        cidade: cidade,
        estado: estado,
        cpf_cnpj: cpfCnpj,
        nome_fazenda: nomeFazenda,
        area_total: areaTotal,
        area_agricultavel: areaAgricultavel,
        area_vegetacao: areaVegetacao,
        culturas_plantadas: culturasPlantadas
      })
    );
    handleClickSnackbar();
    setNome("");
    setCidade("");
    setEstado("");
    setCpfCnpj("");
    setNomeFazenda("");
    setAreaTotal("");
    setAreaAgricultavel("");
    setAreaVegetacao("");
    setCulturasPlantadas("");
  };

  const updateProducer = (item) => {
    setId(item.id);
    setNome(item.nome);
    setCidade(item.cidade);
    setEstado(item.estado);
    setCpfCnpj(item.cpf_cnpj);
    setNomeFazenda(item.nome_fazenda);
    setAreaTotal(item.area_total);
    setAreaAgricultavel(item.area_agricultavel);
    setAreaVegetacao(item.area_vegetacao);
    setCulturasPlantadas(item.culturas_plantadas);
    dispatch(changeStateTrue());
  };

  const updateForm = () => {
    dispatch(modifiedProducer({
      id: id,
      nome: nome,
      cidade: cidade,
      estado: estado,
      cpf_cnpj: cpfCnpj,
      nome_fazenda: nomeFazenda,
      area_total: areaTotal,
      area_agricultavel: areaAgricultavel,
      area_vegetacao: areaVegetacao,
      culturas_plantadas: culturasPlantadas
    }));
    dispatch(changeStateFalse());
    handleClickSnackbar();
    setId("");
    setNome("");
    setCidade("");
    setEstado("");
    setCpfCnpj("");
    setNomeFazenda("");
    setAreaTotal("");
    setAreaAgricultavel("");
    setAreaVegetacao("");
    setCulturasPlantadas("");
  };

  const deleteProducer = (id) => {
    dispatch(removeProducer(id));
    handleClickSnackbar();
  };

  const [open, setOpen] = useState(false);
  const handleClickSnackbar = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <TextField
            sx={{ color: "white" }}
            variant="outlined"
            size="small"
            placeholder="Nome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => {
              setCidade(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Estado"
            value={estado}
            onChange={(e) => {
              setEstado(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            size="small"
            placeholder="CPF/CNPJ"
            value={cpfCnpj}
            onChange={(e) => {
              setCpfCnpj(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Fazenda"
            value={nomeFazenda}
            onChange={(e) => {
              setNomeFazenda(e.target.value);
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: "8px",
            marginTop: "16px"
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Área Total"
            value={areaTotal}
            onChange={(e) => {
              setAreaTotal(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Área Agricultável"
            value={areaAgricultavel}
            onChange={(e) => {
              setAreaAgricultavel(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Área da Vegetação"
            value={areaVegetacao}
            onChange={(e) => {
              setAreaVegetacao(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            size="small"
            placeholder="Culturas Plantadas"
            value={culturasPlantadas}
            onChange={(e) => {
              setCulturasPlantadas(e.target.value);
            }}
          />
          {updateState ? (
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={(e) => {
                updateForm(e);
              }}
            >
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Add
            </Button>
          )}
        </Box>
        <TableContainer component={Paper} sx={{ marginTop: "16px" }}>
          <Table sx={{ minWidth: 659 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#4b4d5c" }}>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 600, color: "white" }}>
                    No
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 600, color: "white" }}>
                    Nome
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 600, color: "white" }}>
                    Cidade
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 600, color: "white" }}>
                    UF
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 600, color: "white" }}>
                    CPF/CNPJ
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 600, color: "white" }}>
                    Fazenda
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 600, color: "white" }}>
                    Total
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 600, color: "white" }}>
                    Agricultável
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 600, color: "white" }}>
                    Vegetação
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 600, color: "white" }}>
                    Culturas
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ fontWeight: 600, color: "white" }}>
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? <TableCell> Loading... </TableCell> : null}
              {!loading && producerList.length == 0 ? (
                <TableCell> No Records </TableCell>
              ) : null}
              {!loading && error ? <TableCell> {error} </TableCell> : null}
              {producerList &&
                producerList.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="left">
                      <Typography> {index + 1} </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography> {item.nome} </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography> {item.cidade} </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography> {item.estado} </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography> {item.cpf_cnpj} </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography> {item.nome_fazenda} </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography> {item.area_total} </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography> {item.area_agricultavel} </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography> {item.area_vegetacao} </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography> {item.culturas_plantadas} </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Box sx={{ display: "flex", cursor: "pointer" }}>
                        <Box
                          sx={{ color: "#707cd4", mr: 1 }}
                          onClick={() => updateProducer(item)}
                        >
                          <EditIcon />
                        </Box>
                        <Box
                          sx={{ color: "red" }}
                          onClick={() => deleteProducer(item.id)}
                        >
                          <DeleteIcon />
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          {response === "add"
            ? "producer added successfully"
            : response === "delete"
            ? "producer delete successfully"
            : response === "update"
            ? "producer update successfully"
            : null}
        </Alert>
      </Snackbar>
    </Box>
  );
}
