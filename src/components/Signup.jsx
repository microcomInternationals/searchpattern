import { Link } from "react-router-dom";

function Signup() {
  return (

    <>
      <div class="container" id="signin">
        <div class="row justify-content-center ms-5">

          <div class="col-md-6">
            <div class="">
              <form onsubmit="event.preventDefault()" class="box">
                <h1><span>Search</span> Pattern</h1>
                <h3>Create your FREE Account</h3>
                <p class="freesearch">Signup today & get 3 free searches per day!</p>
                <h2>SIGN UP</h2>
                <p class="text-muted">Please enter your information!</p>
                <div class="signupbox">
                  <div class="mt-1" id="flex">
                    <input type="text" name="firstName" class="form-control" placeholder="First Name" required />
                    <input type="text" name="lastName" class="form-control" placeholder="Last Name" required />
                  </div>
                  <div class="mt-1" id="flex">
                    <input type="tel" pattern="[0-9\+]+" maxlength="11" name="mobile" class="form-control" placeholder="Mobile Number" required />
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                  </div>
                  <div class="mt-1" id="flex">
                    <input type="password" name="password" class="form-control" placeholder="Password" required />

                    <input type="password" name="confirmPassword" class="form-control" placeholder="Confirm Password" required />
                  </div>
                  <div class="text-black" id="flex">
                    <input type="date" name="birthdate" class="form-control" required />

                    <select name="gender" class="form-control" required>
                      <option id="gndr">Male</option>
                      <option id="gndr">Female</option>
                      <option id="gndr">Other</option>
                    </select>
                  </div>
                </div>
                <input type="submit" class="btn btn-primary btn-block" value="Sign Up" />
                <Link class="forgot text-muted" to="/login">Already have Account? Click here to login</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;