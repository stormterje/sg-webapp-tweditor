import { useAppState } from "../../../store/mainStore";
import "./stormBrowser.scss";

export const Header = () => {
  const { setStormBrowserVisible } = useAppState();

  return (
    <table style={{ backgroundColor: "rgb(24, 24, 24)" }}>
      <tbody>
        <tr>
          <td>Storms and advisories</td>
          <td></td>
          <td>
            <span className="close-button" onClick={(_) => setStormBrowserVisible(false)}>
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
