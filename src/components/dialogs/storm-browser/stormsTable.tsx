import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAppState } from "../../../store/mainStore";
import "./stormsTable.scss";
import { Storm } from "../../../models/storm";

export const StormsTable = () => {
  const { isStormsLoading, storms, selectedStormId, setSelectedStormId, loadAdvisories, setSelectedAdvisoryId } = useAppState();

  const columns: GridColDef[] = [
    { field: "stormId", headerName: "ID", width: 75, headerClassName: "table-header-class" },
    { field: "stormNumber", headerName: "#", width: 75, headerClassName: "table-header-class" },
    { field: "stormName", headerName: "Name", minWidth: 120, headerClassName: "table-header-class", flex: 1 },
    { field: "createdAt", headerName: "Created", width: 120, headerClassName: "table-header-class" },
    { field: "firstAnaTime", headerName: "Anatime", width: 120, headerClassName: "table-header-class" },
    { field: "isActive", headerName: "Active?", width: 80, headerClassName: "table-header-class" },
    { field: "isDrill", headerName: "Drill?", width: 80, headerClassName: "table-header-class" },
    { field: "isArchived", headerName: "Archived?", width: 80, headerClassName: "table-header-class" },
  ];

  const getRowId = (row: Storm): number => {
    return row.stormId!;
  };
  const rowClick = (storm: any): void => {
    setSelectedStormId(storm.id);
    setSelectedAdvisoryId(null);
    loadAdvisories(storm.id);
  };

  const getRowClassName = (param: any): string => {
    if (param.id === selectedStormId) {
      return "selected-row";
    }
    return "";
  };

  return (
    <>
      {isStormsLoading && <h3>Storms loading...</h3>}
      {storms.length <= 0 && <h3>No storms found</h3>}
      {storms.length > 0 && (
        <DataGrid
          rows={storms}
          columns={columns}
          getRowId={getRowId}
          rowSelection={true}
          onRowClick={rowClick}
          getRowClassName={(param) => getRowClassName(param)}
          sx={{
            height: "96%",
            fontSize: "11px",
            boxShadow: 2,
            border: 0,
            color: "white",
          }}
        ></DataGrid>
      )}
    </>
  );
};
