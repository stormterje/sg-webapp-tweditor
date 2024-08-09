import { Button, TextField } from "@mui/material";
import "./stormBrowser.scss";

export const SearchBox = () => {
  const yearSelected = (e: any) => {
    if (!e.node.isSelected() || !e.data) {
      return;
    }
  };

  return (
    <div style={{ display: "inline" }}>
      <TextField id="searchfield" label="Search..." variant="outlined" className="searchfield" size="small" />
      <Button variant="contained" style={{ marginTop: "0px" }}>
        Drill
      </Button>
      <Button variant="contained" style={{ marginTop: "0px" }}>
        Real
      </Button>
      <select
        name="year"
        id="year"
        value=""
        onChange={(year) => yearSelected(year)}
        style={{ height: "36px", width: "80px", position: "relative", top: "0", backgroundColor: "rgb(36,36,36)" }}
      >
        <option value="2024" className="boldoption">
          2024
        </option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};
