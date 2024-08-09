import { CustomCellEditorProps } from "@ag-grid-community/react";
import { ICellEditor } from "@ag-grid-community/core";
import { useEffect, useRef } from "react";

export interface MySimpleInterface extends ICellEditor {
  myCustomFunction(): { rowIndex: number; colId: string };
}

export default ({ value, onValueChange, eventKey }: CustomCellEditorProps) => {
  const updateValue = (val: string) => {
    onValueChange(val === "" ? null : val);
  };

  useEffect(() => {
    let startValue;

    if (eventKey === "Backspace") {
      startValue = "";
    } else if (eventKey && eventKey.length === 1) {
      startValue = eventKey;
    } else {
      startValue = value;
    }
    if (startValue == null) {
      startValue = "";
    }

    updateValue(startValue);

    refInput.current?.focus();
  }, []);

  const refInput = useRef<HTMLInputElement>(null);

  return <input value={value || ""} ref={refInput} onChange={(event) => updateValue(event.target.value)} className="my-simple-editor" />;
};
