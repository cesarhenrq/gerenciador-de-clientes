import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import IProps from "./props";

import { Formatter } from "@presentation/helpers";

const Table = ({ data }: IProps) => {
  return (
    <TableContainer
      component={Paper}
      style={{
        marginBottom: "20px",
      }}
    >
      <MuiTable sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Coordenada X</TableCell>
            <TableCell>Coordenada Y</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{Formatter.formatPhone(row.phone)}</TableCell>
              <TableCell>{row.pos_x}</TableCell>
              <TableCell>{row.pos_y}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
