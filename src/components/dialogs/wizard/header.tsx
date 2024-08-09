import { Button } from "@mui/material";
import "./header.scss";
import { useWizardState } from "../../../store/wizardStore";

export const Header = () => {
  const { currentPage, nextPage, previousPage, selectedSubPages, setSelectedSubPages } = useWizardState();

  const setSubPage = (page: number, subPage: number): void => {
    let newPages = [...selectedSubPages];
    newPages[page - 1] = subPage;
    setSelectedSubPages(newPages);
  };

  const getClassName = (page: number, subPage: number): string => {
    if (currentPage === page && selectedSubPages[page - 1] == subPage) {
      return "underlined";
    }
    return "";
  };

  return (
    <table style={{ backgroundColor: "rgb(24, 24, 24)" }}>
      <tbody>
        <tr>
          <td>Step {currentPage}/3</td>
          <td>
            {currentPage === 1 && (
              <>
                <Button onClick={() => setSubPage(1, 1)} className={getClassName(1, 1)}>
                  Advisory
                </Button>
                <Button onClick={() => setSubPage(1, 2)} className={getClassName(1, 2)}>
                  Track
                </Button>
                <Button onClick={() => setSubPage(1, 3)} className={getClassName(1, 3)}>
                  Advisory Text
                </Button>
              </>
            )}
            {currentPage === 2 && (
              <>
                <Button onClick={() => setSubPage(2, 1)} className={getClassName(2, 1)}>
                  Region Text
                </Button>
                <Button onClick={() => setSubPage(2, 2)} className={getClassName(2, 2)}>
                  RPA
                </Button>
              </>
            )}
            {currentPage === 3 && (
              <>
                <Button onClick={() => setSubPage(3, 1)} className={getClassName(3, 1)}>
                  Publishing
                </Button>
              </>
            )}
          </td>
          <td>
            <Button variant="contained" style={{ borderRadius: "15px 0 0 15px", backgroundColor: "rgb(54,52,51)" }} onClick={() => previousPage()}>
              Back
            </Button>
            <Button variant="contained" style={{ borderRadius: "0 15px 15px 0" }} onClick={() => nextPage()}>
              Proceed
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
