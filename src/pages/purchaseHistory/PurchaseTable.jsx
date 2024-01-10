import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Row from "./Row";

const rows = [
  {
    id: 0,
    course: "Sed ut perspiciatis unde omnis iste",
    date: "11/31/23",
    price: "$350.00",
    discount: "$25.00",
    expiration: "11/31/24",
    status: "Inactive",
  },
  {
    id: 1,
    course: "Sed ut perspiciatis unde omnis iste",
    date: "12/31/23",
    price: "$250.00",
    discount: "$35.00",
    expiration: "12/31/24",
    status: "Active",
  },
  {
    id: 2,
    course: "Sed ut perspiciatis unde omnis iste",
    date: "13/31/23",
    price: "$150.00",
    discount: "$15.00",
    expiration: "13/31/24",
    status: "Pending",
  },
  {
    id: 3,
    course: "Sed ut perspiciatis unde omnis iste",
    date: "14/31/23",
    price: "$200.00",
    discount: "$15.00",
    expiration: "14/31/24",
    status: "Subscription",
  },
  {
    id: 4,
    course: "Sed ut perspiciatis unde omnis iste",
    date: "11/31/23",
    price: "$350.00",
    discount: "$25.00",
    expiration: "11/31/24",
    status: "Inactive",
  },
  {
    id: 5,
    course: "Sed ut perspiciatis unde omnis iste",
    date: "12/31/23",
    price: "$250.00",
    discount: "$35.00",
    expiration: "12/31/24",
    status: "Active",
  },
  {
    id: 6,
    course: "Sed ut perspiciatis unde omnis iste",
    date: "13/31/23",
    price: "$150.00",
    discount: "$15.00",
    expiration: "13/31/24",
    status: "Pending",
  },
  {
    id: 7,
    course: "Sed ut perspiciatis unde omnis iste",
    date: "14/31/23",
    price: "$200.00",
    discount: "$15.00",
    expiration: "14/31/24",
    status: "Subscription",
  },
];

const PurchaseTable = () => {
  return (
    <TableContainer
      sx={{
        maxHeight: 440,
        "&::-webkit-scrollbar": {
          width: "5px",
          height: "5px",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.1)",
          borderRadius: "5px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#ccc",
        },
      }}
    >
      <Table stickyHeader>
        <TableHead sx={{ display: { xs: "none", sm: "table-header-group" } }}>
          <TableRow
            sx={{
              "& th": {
                color: "#026670",
                fontSize: "16px",
                fontWeight: 700,
                pt: 0,
              },
            }}
          >
            <TableCell align="left" sx={{ minWidth: "160px", pl: 0 }}>
              Course
            </TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Discount</TableCell>
            <TableCell align="center">Expiration</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            "& tr:first-of-type td": { pt: { xs: 0, sm: "16px" } },
            "& tr:last-of-type td": { borderBottom: "unset" },
          }}
        >
          {rows.map((r) => (
            <Row
              key={r.id}
              course={r.course}
              date={r.date}
              price={r.price}
              discount={r.discount}
              expiration={r.expiration}
              status={r.status}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PurchaseTable;
