import React from "react"
import "../CSS/SignUpPage.css"
function SignUpPage() {
    return (
        <div class="signup-form">
            <form>
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <div class="form-group">
                    <input type="text" class="form-control" name="username" placeholder="Username" required="required" />
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" name="email" placeholder="Email" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                </div>        
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpPage