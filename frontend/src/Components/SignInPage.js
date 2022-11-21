import React from "react"

class SignInPage extends React.Component {

    render() {
        return (
            <div class="signup-form">
                <form>
                    <h2>Sign In</h2>
                    <div class="form-group">
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" placeholder="Email" required="required" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-lg">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInPage