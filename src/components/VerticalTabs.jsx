import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RiskForm from "./RiskForm";
import { Button, TextField } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="ریسک" {...a11yProps(0)} />
        <Tab label="نوع ریسک" {...a11yProps(1)} />
        <Tab label="احتمال وقوع ریسک" {...a11yProps(2)} />
        <Tab label="راه حل ریسک" {...a11yProps(3)} />
        <Tab label="علت ریسک" {...a11yProps(4)} />
        <Tab label="شدت یا اثر ریسک" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <RiskForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            display: "flex",
            width: "1000px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <TextField
            id="filled-select-currency-native"
            select
            label="نوع ریسک"
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            helperText="نوع ریسک را از آیتم های بالا انتخاب کنید"
            variant="filled"
          >
            <option value={"مدیریتی"}>مدیریتی</option>
            <option value={"فنی"}>فنی</option>
          </TextField>
          <Button variant="contained" color="success">
            اضافه کردن
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box
          sx={{
            display: "flex",
            width: "1000px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <TextField
            id="filled-select-currency-native"
            select
            label="احتمال وقوع ریسک"
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            helperText="احتمال وقوع ریسک را از آیتم های بالا انتخاب کنید"
            variant="filled"
          >
            <option value={"کم"}>کم</option>
            <option value={"متوسط"}>متوسط</option>
            <option value={"زیاد"}>زیاد</option>
          </TextField>
          <Button variant="contained" color="success">
            اضافه کردن
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "1000px",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
          }}
        >
          <TextField
            id="solution"
            label="راه حل ریسک را وارد کنید"
            variant="filled"
            sx={{ width: "500px" }}
          />
          <Button variant="contained" color="success">
            اضافه کردن
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "1000px",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
          }}
        >
          <TextField
            id="solution"
            label=" علت ریسک را وارد کنید"
            variant="filled"
            sx={{ width: "500px" }}
          />
          <Button variant="contained" color="success">
            اضافه کردن
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box
          sx={{
            display: "flex",
            width: "1000px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <TextField
            id="filled-select-currency-native"
            select
            label=" اثر یا شدت ریسک"
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            helperText=" اثر یا شدت ریسک را از آیتم های بالا انتخاب کنید"
            variant="filled"
          >
            <option value={"بی ارزش"}>بی ارزش</option>
            <option value={"جدی"}>جدی</option>
            <option value={"فاجعه برانگیز"}>فاجعه برانگیز</option>
          </TextField>
          <TextField
            id="solution"
            label=" درصد شدت ریسک را وارد کنید"
            variant="filled"
            sx={{ width: "280px" }}
          />
          <Button variant="contained" color="success">
            اضافه کردن
          </Button>
        </Box>
      </TabPanel>
    </Box>
  );
}
