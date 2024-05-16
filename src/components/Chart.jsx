import { useContext } from "react";
import { Contextapi } from "../Contextapi";

function Chart() {
  const { chartRef } = useContext(Contextapi)
  return (
    <>
      {/* Chart for each Prefix  */}
      <div className="col-12" style={{ width: "100%" }} id="chart">
        <svg ref={chartRef}></svg>
      </div>
    </>
  );
}

export default Chart;