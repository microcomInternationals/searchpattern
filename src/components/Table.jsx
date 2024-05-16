import { useContext } from "react";
import { Contextapi } from "../Contextapi";

function Table() {
  const { data } = useContext(Contextapi)
  return (
    <>
      {/* Data for each Prefix */}
      {Object.entries(data).map(([prefix, items]) => (
        <div className="col-4 mt-5" key={prefix} id="table">
          <h3 className="text-white">Data for "{prefix}" Prefix:</h3>
          <ul>
            {undefined !== items && items.map((item, index) => (
              <a key={index} href={"https://www.google.com/search?q=" + item} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
                <li key={index}>{item}</li>
              </a>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Table;