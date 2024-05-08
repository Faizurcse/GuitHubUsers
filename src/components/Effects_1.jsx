import React, { useEffect, useState } from "react";

function Effects_1() {
  const [width, setWidth] = useState(window.screen.width);

  function addData() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", addData);
    console.log("Add Event")

    // cleanup function is used for memory se extra data delete krna jisak used nai ho

    return () => {
      window.removeEventListener("resize", addData);
      console.log("remove Event");
    };
  },[]);
  return (
    <div>
      <h2>The actual size of the window is :</h2>
      <p>{width}</p>
    </div>
  );
}

export default Effects_1;
