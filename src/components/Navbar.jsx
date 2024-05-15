

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black ">
        <div className="container-fluid">
          <img src="images\S P LOGO 3.png" style={{ width: "220px" }} alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Learn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Use Cases</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Consulting</a>
              </li>
            </ul>
            <h5 className="Signin p-2"><a href="#">Sign In</a></h5>
            <button className="btn btn-outline-success" type="submit" id="pro-btn">UPGRADE TO PRO</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;