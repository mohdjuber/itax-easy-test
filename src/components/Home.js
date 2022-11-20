import React from "react";
import Button from "@mui/material/Button";
import BasicCard from "./Card";
import BasicCard2 from "./Card2";
import BasicCard3 from "./Card3";
function Home() {
  return (
    <div>
      <h1>
        Save <span className="gradient">money.</span> Save{" "}
        <span className="gradient">time.</span>
      </h1>
      <p>India’s largest tax and financial services software platform</p>
      <div className="btn  ">
        <Button variant="contained">Get Started</Button>
        <Button variant="outlined">Request a Demo</Button>
      </div>
      <div className="card">
        {" "}
        <BasicCard />
        <BasicCard2 />
        <BasicCard3 />
      </div>
    </div>
  );
}
export default Home;
