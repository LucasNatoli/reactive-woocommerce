import Switch from "@mui/material/Switch";
import { useState } from "react";

export default function SwitchMode() {
  const [checked, setChecked] = useState(true);

  function handleToggle() {
    setChecked(!checked);
  }

  return (
    <Switch
      edge="end"
      onChange={handleToggle}
      checked={checked}
      inputProps={{
        "aria-labelledby": "switch-dark-mode",
      }}
    />
  );
}
