module.exports = function(){
    return `
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <h2 class="form_header">Sign up for Livdin!</h2>
                <form class="signup">
                    <div class="">
                        <label class="form_labels"for="exampleInputEmail1">Email address</label>
                        <input autocomplete="email" onfocus="this.placeholder = ''"type="email" class="all_inputs_i" id="email-input" onblur="this.placeholder='Email'" placeholder="Email">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputPassword1">Password</label>
                        <input autocomplete="password" onfocus="this.placeholder = ''"type="password" class="all_inputs_i" id="password-input" onblur="this.placeholder='Password'" placeholder="Password">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputUsername1">Username</label>
                        <input onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="username-input" onblur="this.placeholder='Username'" placeholder="Username">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputName1">Name</label>
                        <input onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="name-input" onblur="this.placeholder='Name'" placeholder="Name">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputHometown1">Hometown</label>
                        <input onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="hometown-input" onblur="this.placeholder='Hometown'" placeholder="Hometown">
                    </div>
                    <div class="">
                        <label class="form_labels"for="exampleInputBio1">Bio</label>
                        <textarea onfocus="this.placeholder = ''"type="text" class="all_inputs_i" id="bio-input" onblur="this.placeholder='Bio'" placeholder="Bio"></textarea>
                    </div>
                    <div style="display: none" id="alert" class="alert alert-danger" role="alert">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span class="sr-only">Error:</span> <span class="msg"></span>
                    </div>
                    <div id="signup_or_login">
                        <button class="all_buttons_b" type="submit" class="btn btn-default">Sign Up</button>
                        <p id="or_login_p">Or log in <a id="or_login_p"class="all_buttons_b" id=""href="/login">here</a></p>
                    </div>
                    
                </form>
                <br />
                
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="../js/signup.js"></script>

</body>

</html>

`;
};