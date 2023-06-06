import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(number, type, name, result, couse, percent, anwser) {
  return { number, type, name, result, couse, percent, anwser };
}

const rows = [
  createData(
    "۱",
    "مدیریتی",
    "علاقه",
    "نداشتن تمایل کافی",
    "۶۶ درصد بی ارزش",
    "کم",
    "نامعلوم"
  ),
  createData(
    "۲",
    "فنی",
    "آشنایی",
    "نداشتن خلاقیت کافی",
    "۲۹ درصد جدی",
    "زیاد",
    "راه اندازی و نصب شبکه"
  ),
  createData(
    "۳",
    "مدیریتی",
    "مهارت",
    "نداشتن آشنایی کافی",
    "۳۳ درصد بی ارزش",
    "متوسط",
    "خرید مجله و کتب علمی"
  ),
  createData(
    "۴",
    "فنی",
    "خلاقیت",
    " کافی نبودن آموزش کار",
    "۵۴ درصد فاجعه برانگیز",
    "کم",
    "تجهیزات نرمافزاری نا کافی"
  ),
  createData(
    "۵",
    "مدیریتی",
    "نوآوری",
    "نداشتن دسترسی کافی",
    "۳۸ درصد بی ارزش",
    "متوسط",
    "توانمند سازی با تکرار و تمرین"
  ),
];

export default function ReportTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>شماره ریسک</StyledTableCell>
            <StyledTableCell align="right">نوع ریسک</StyledTableCell>
            <StyledTableCell align="right">ریسک شناسایی شده</StyledTableCell>
            <StyledTableCell align="right">علت ها</StyledTableCell>
            <StyledTableCell align="right">اثر یا شدت عواقب</StyledTableCell>
            <StyledTableCell align="right">احتمال وقوع ریسک</StyledTableCell>
            <StyledTableCell align="right">راه حل ها</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.number}>
              <StyledTableCell component="th" scope="row">
                {row.number}
              </StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.result}</StyledTableCell>
              <StyledTableCell align="right">{row.couse}</StyledTableCell>
              <StyledTableCell align="right">{row.percent}</StyledTableCell>
              <StyledTableCell align="right">{row.anwser}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
