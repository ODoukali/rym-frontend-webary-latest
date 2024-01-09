import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Row(props) {
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left">Sed ut perspiciatis unde omnis iste</TableCell>
        <TableCell align="center" sx={{ verticalAlign: "baseline" }}>
          11/31/23
        </TableCell>
        <TableCell align="center" sx={{ verticalAlign: "baseline" }}>
          $350.00
        </TableCell>
        <TableCell align="center" sx={{ verticalAlign: "baseline" }}>
          $25.00
        </TableCell>
        <TableCell align="center" sx={{ verticalAlign: "baseline" }}>
          11/31/24
        </TableCell>
      </TableRow>
    </>
  );
}

const PurchaseTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Course</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Discount</TableCell>
            <TableCell align="center">Expiration</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <Row />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PurchaseTable;
