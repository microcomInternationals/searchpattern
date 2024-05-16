import { Link } from "react-router-dom";

function Login() {
  return (

    <>
      <div id="login" class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <form onsubmit="event.preventDefault()" class="box">
                <img src="" alt="" />
                <h2>Login</h2>
                <p class="text-muted"> Please enter your login id and password!</p>
                <input type="text" name="" placeholder="Email/Number" />
                <input type="password" placeholder="Password" />
                <a class="forgot text-muted" href="#">Forgot password?</a>
                <input type="submit" name="" value="Login" href="#" />
                <Link class="forgot text-muted" to="/signup">Create Account</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;