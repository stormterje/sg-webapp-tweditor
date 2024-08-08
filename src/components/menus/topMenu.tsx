import "./topMenu.scss";
import IconButton from "@mui/material/IconButton";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CloudDownloadIcon from "@mui/icons-material/CloudDownloadRounded";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import SendIcon from "@mui/icons-material/SendOutlined";
import SettingsIcon from "@mui/icons-material/SettingsRounded";
import { useAppState } from "../../store/mainStore";

export const TopMenu = () => {
  const { setStormBrowserVisible } = useAppState();

  const openStormsClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    setStormBrowserVisible(true);
  };
  const doStuff = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    alert("You clicked it");
  };

  return (
    <div className="top-menu">
      <IconButton aria-label="open storms" onClick={(e) => openStormsClick(e)} title="Open storms">
        <FolderOpenIcon />
      </IconButton>
      <IconButton aria-label="download from cloud" onClick={(e) => doStuff(e)} title="Download">
        <CloudDownloadIcon />
      </IconButton>
      <IconButton aria-label="save" onClick={(e) => doStuff(e)} title="Save...">
        <SaveIcon />
      </IconButton>
      <IconButton aria-label="send" onClick={(e) => doStuff(e)} title="Send...">
        <SendIcon />
      </IconButton>
      <IconButton aria-label="settings" onClick={(e) => doStuff(e)} title="Settings...">
        <SettingsIcon />
      </IconButton>
    </div>
  );
};
