import { Childone } from "./childone";
import { Childtwo } from "./childtwo";
import { useState } from "react";

export function Parent({ themecolor, handletheme }) {
  return (
    <div
      style={{
        border: "1px solid black",
        alignContent: "center",
        padding: "20px",
        backgroundColor: themecolor ? "plum" : "tomato",
      }}
    >
      <h1>Parent</h1>
      <button onClick={handletheme} style={{ padding: "20px 30px",fontSize:"25px",fontWeight:"700" }}>
        {themecolor ? "Plum-Theme" : "Tomato-Theme"}
      </button>
      <Childone />
      <Childtwo />
    </div>
  );
}
