const components = {}
components.welcomeScreen = '<h3> Hello World! </h3>'
components.registerPage = `
<body>
    <div class="register-container">
        <div class="background-image">

        </div>
        <div class="form-wrapper">
            <div class="register-header">MindX Chat</div>
            <div id="register-form">
                <div class="name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" placeholder="First Name" name="firstName">
                        <div id="first-name-error" class="err"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" placeholder="Last Name" name="lastName">
                        <div id="last-name-error" class="err"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="email" placeholder="Email" name="email">
                    <div id="email-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Password" name="password">
                    <div id="password-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Confirm Password" name="confirmPassword">
                    <div id="confirm-password-error" class="err"></div>
                </div>
                <div class="register-form-action">
                    <div>
                        Already have an account? <span id="redirect-login" class="cursor-pointer">Login</span>
                    </div>
                    <button class="btn" type="submit">Register</button>
                </div>
            </div>
        </div>

    </div>
</body>
`
components.loginPage = `
<body>
    <div class="login-container">
        <div class="background-image">

        </div>
        <div class="form-wrapper">
            <div class="register-header">MindX Chat</div>
            <div id="login-form">

                <div class="input-wrapper">
                    <input type="email" placeholder="Email" name="email">
                    <div id="email-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Password" name="password">
                    <div id="password-error" class="err"></div>
                </div>

                <div class="login-form-action">
                    <div>
                        Don't have an account ? <span id="redirect-register" class="cursor-pointer">Register</span>
                    </div>
                    <button class="btn" type="submit">Login</button>
                </div>
            </div>
        </div>

    </div>
`