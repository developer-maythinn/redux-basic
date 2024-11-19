import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

export default function SwitchTheme({ children }) {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
      }}
    >
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      {children}
    </div>
  );
}
