import { useState } from "react";


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [emailValidated, setEmailValidated] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordValidated, setPasswordValidated] = useState(false)

    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(false)

    function validateEmail(email) {
        let index_of_at = email.indexOf('@')
        let index_of_dot = email.lastIndexOf('.')
        return (index_of_at > 0 && index_of_dot && index_of_dot > index_of_at)
    }

    function validatePassword(password) {
        return password.length >= 8
    }

    function validateConfirmPassword(password, confirmPassword) {
        return password === confirmPassword
    }

    function handleEmailChange(e) {
        let email_value = e.target.value
        setEmail(email_value)
        setEmailValidated(validateEmail(email_value))
    }


    function handlePasswordChange(e) {
        let password_value = e.target.value
        setPassword(password_value)
        setPasswordValidated(validatePassword(password_value))
    }


    function handleConfirmPasswordChange(e) {
        let confirmPassword_value = e.target.value
        setConfirmPassword(confirmPassword_value)
        setConfirmPasswordValidated(validateConfirmPassword(password, confirmPassword_value))    // password is from line 8
    }

    function handleSubmit(e) {
        e.preventDefault()                                                                      // will prevent the form from reloading
        // all inputs are correct or not, we will get this info from 'emailValidated, passwordValidated, confirmPasswordValidated'
        // if all fields are ok, then we r ready to submit else not

        if (emailValidated == true && passwordValidated && confirmPasswordValidated) {
            alert("Form submitted Successfully")
        }
        else {
            alert("Can't submit the form")
        }
    }


    return (
        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="email"> Email </label>
                <input type="email" id="email" value={email}
                    onChange={handleEmailChange}                                  // email box mein har letter input k sath ye functn run hoga
                    className={emailValidated == true ? "isValid" : "isInvalid"}
                />
                {emailValidated == true ? null : <div className="errorMsg"> Please enter a valid email </div>}
            </div>

            <div className="form-group">
                <label htmlFor="password"> Password </label>
                <input type="password" id="password" value={password}                 // can ignore 'value'...onchange is not accessing it
                    onChange={handlePasswordChange}
                    className={passwordValidated == true ? "isValid" : "isInvalid"}
                />
                {passwordValidated == true ? null : <div className="errorMsg"> Password must be atleast 8 characters long</div>}
            </div>

            <div className="form-group">
                <label htmlFor="confirm-password"> Confirm Password </label>
                <input type="password" id="confirm-password" value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className={confirmPasswordValidated == true ? "isValid" : "isInvalid"}
                />
                {confirmPasswordValidated == true ? null : <div className="errorMsg"> Passwords do not match </div>}
            </div>

            <button type="submit" className="btn"> Sign Up </button>


        </form>
    )
}



export default SignUp;