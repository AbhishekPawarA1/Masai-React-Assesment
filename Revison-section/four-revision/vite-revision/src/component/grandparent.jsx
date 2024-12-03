import { Parent } from "./parent"
import { useState } from "react";
export function Grandparent() {

    let [themecolor, setthemecolor] = useState(true)
    function handletheme() {
        setthemecolor(!themecolor)
    }
    return (
      <>
        <div
          style={{
            border: "1px solid black",
            alignContent: "center",
            padding: "20px",
            backgroundColor: themecolor ? "plum" : "tomato",
          }}
        >
          <h1>GrandParent</h1>
          <button
            onClick={handletheme}
            style={{
              padding: "20px 30px",
              fontSize: "25px",
              fontWeight: "700",
            }}
          >
            {themecolor ? "Plum-Theme" : "Tomato-Theme"}
          </button>

          <Parent themecolor={themecolor} />
        </div>
      </>
    );
}