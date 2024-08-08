import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAppState } from "../../../store/mainStore";
import { Advisory } from "../../../models/advisory";
import "./advisoriesTable.scss";

export const AdvisoriesTable = () => {
  const { advisories, basins, selectedAdvisoryId, setSelectedAdvisoryId } = useAppState();

  const getBasinName = (value: any) => {
    try {
      let id = value;
      const basin = basins?.filter((b) => b.basinId == id)[0];
      if (!basin || !basin.name) {
        return "??";
      }
      return basin.abbreviation?.toUpperCase() ?? "";
    } catch (e) {
      console.log(e);
    }
    return "????";
  };

  const columns: GridColDef[] = [
    { field: "advisoryId", headerName: "Id", maxWidth: 60, headerClassName: "table-header-class" },
    { field: "stormName", headerName: "Name", flex: 1, headerClassName: "table-header-class" },
    {
      field: "basinId",
      headerName: "Basin",
      width: 50,
      headerClassName: "table-header-class",
      valueGetter: (value) => {
        return getBasinName(value);
      },
    },
    { field: "anaTime", headerName: "Time (ana)", maxWidth: 160, headerClassName: "table-header-class" },
    { field: "advisoryTypeId", headerName: "Type", maxWidth: 50, headerClassName: "table-header-class" },
    { field: "stormClassificationId", headerName: "Classification", maxWidth: 90, headerClassName: "table-header-class" },
    { field: "geographicReference", headerName: "Geo.ref", flex: 1, headerClassName: "table-header-class" },
    { field: "statusId", headerName: "Status", maxWidth: 50, headerClassName: "table-header-class" },
  ];

  const getRowId = (row: Advisory): number => {
    return row.advisoryId;
  };
  const rowClick = (advisoryRow: any): void => {
    setSelectedAdvisoryId(advisoryRow.id);
  };

  const getRowClassName = (param: any): string => {
    if (param.id === selectedAdvisoryId) {
      return "selected-row";
    }
    return "";
  };

  return (
    <>
      <DataGrid
        rows={advisories}
        columns={columns}
        getRowId={getRowId}
        rowSelection={true}
        onRowClick={rowClick}
        getRowClassName={(param) => getRowClassName(param)}
        sx={{
          height: "96%",
          fontSize: "11px",
          borderRadius: "0 0 25px 25px ",
          boxShadow: 2,
          border: 0,
          color: "white",
        }}
      ></DataGrid>
    </>
  );
};
