import { DataGrid, GridColDef, GridColumnGroupingModel } from "@mui/x-data-grid";
import { useAppState } from "../../../../store/mainStore";
import { ParameterValue, TrackPoint } from "../../../../models/trackPoint";
import { toSGDate } from "../../../../helpers/sfHelpers";

import "./tracksDataGrid.scss";

export const TracksDataGrid = () => {
  const { trackPoints } = useAppState();

  const getRowId = (row: TrackPoint): number => {
    return row.trackPointId;
  };

  const getParameterValue = (value: ParameterValue[]): string => {
    const values = value.map((v) => v.value);
    return values.join(" ");
  };

  const columns: GridColDef[] = [
    { field: "forecastHour", headerName: "O", maxWidth: 10, headerClassName: "table-header-class" },
    {
      field: "createdAt",
      headerName: "Date",
      maxWidth: 100,
      valueGetter: (value) => {
        return toSGDate(value);
      },
      headerClassName: "table-header-class",
    },
    { field: "lat", headerName: "Lat", maxWidth: 50, headerClassName: "table-header-class" },
    { field: "lon", headerName: "Lon", maxWidth: 50, headerClassName: "table-header-class" },
    {
      field: "maxWinds",
      headerName: "Max Winds",
      width: 100,
      maxWidth: 100,
      valueGetter: (value) => {
        return getParameterValue(value);
      },
      headerClassName: "table-header-class",
    },
    {
      field: "maxGusts",
      headerName: "Max Gusts",
      width: 100,
      maxWidth: 100,
      valueGetter: (value) => {
        return getParameterValue(value);
      },
      headerClassName: "table-header-class",
    },
    {
      field: "squalls",
      headerName: "Squalls",
      width: 150,
      maxWidth: 150,
      valueGetter: (value) => {
        return getParameterValue(value);
      },
      headerClassName: "table-header-class",
    },
    {
      field: "kts25",
      headerName: "25kts",
      width: 150,
      maxWidth: 150,
      valueGetter: (value) => {
        return getParameterValue(value);
      },
      headerClassName: "table-header-class",
    },
    {
      field: "kts34",
      headerName: "34kts",
      width: 150,
      maxWidth: 150,
      valueGetter: (value) => {
        return getParameterValue(value);
      },
      headerClassName: "table-header-class",
    },
    {
      field: "kts50",
      headerName: "50kts",
      width: 150,
      maxWidth: 150,
      valueGetter: (value) => {
        return getParameterValue(value);
      },
      headerClassName: "table-header-class",
    },
    {
      field: "kts64",
      headerName: "64kts",
      width: 150,
      maxWidth: 150,
      valueGetter: (value) => {
        return getParameterValue(value);
      },
      headerClassName: "table-header-class",
    },
    {
      field: "kts87",
      headerName: "87kts",
      width: 150,
      maxWidth: 150,
      valueGetter: (value) => {
        return getParameterValue(value);
      },
      headerClassName: "table-header-class",
    },
    {
      field: "radiiMax",
      headerName: "Max",
      width: 150,
      maxWidth: 150,
      valueGetter: (value) => {
        return getParameterValue(value);
      },
      headerClassName: "table-header-class",
    },

    {
      field: "eye",
      headerName: "Eye",
      width: 150,
      maxWidth: 150,
      valueGetter: (value) => {
        return getParameterValue(value);
      },
      headerClassName: "table-header-class",
    },
  ];

  const columnGroupingModel: GridColumnGroupingModel = [
    {
      groupId: "",
      description: "",
      children: [{ field: "forecastHour" }, { field: "createdAt" }, { field: "createdAt" }],
    },
    {
      groupId: "Basic info",
      children: [
        {
          groupId: "Full name",
          children: [{ field: "lastName" }, { field: "firstName" }],
        },
        { field: "age" },
      ],
    },
  ];

  return (
    <DataGrid
      columns={columns}
      rows={trackPoints}
      getRowId={getRowId}
      rowSelection={true}
      sx={{
        height: "calc(100vh - 300px)",
        fontSize: "11px",
        boxShadow: 2,
        border: 0,
        color: "white",
      }}
    />
  );
};
