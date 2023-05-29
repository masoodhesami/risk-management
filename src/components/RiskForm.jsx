import { Box, TextField } from "@mui/material";

const RiskForm = () => {
  const currencies = [
    {
      value: "علاقه",
      label: "علاقه",
    },
    {
      value: "آشنایی",
      label: "آشنایی",
    },
    {
      value: "مهارت",
      label: "مهارت",
    },
    {
      value: "خلاقیت",
      label: "خلاقیت",
    },
    {
      value: "نواوری",
      label: "نواوری",
    },
    {
      value: "نرم افزار",
      label: "نرم افزار",
    },
    {
      value: "رایانه",
      label: "رایانه",
    },
    {
      value: "شبکه",
      label: "شبکه",
    },
    {
      value: "اینترنت",
      label: "اینترنت",
    },
    {
      value: "مجله و کتب",
      label: "مجله و کتب",
    },
    {
      value: "آموزش",
      label: "آموزش",
    },
    {
      value: "حمایت",
      label: "حمایت",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        width: "1000px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "500px",
          justifyContent: "center",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <TextField
          id="filled-select-currency-native"
          select
          label="نام ریسک"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="نام ریسک را از آیتم های بالا انتخاب کنید"
          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField id="risk" label="کد ریسک" variant="filled" />
        <TextField id="project" label="کد پروژه" variant="filled" />
      </Box>
    </Box>
  );
};
export default RiskForm;
