import React from "react";
import { CustomCellRendererProps } from "@ag-grid-community/react";

export default (props: CustomCellRendererProps) => {
  return props.value ? (props.value as number).toFixed(2) : <React.Fragment></React.Fragment>;
};
