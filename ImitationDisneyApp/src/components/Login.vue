<template>
    <div class="Login">
        <div class="page-container">
            <router-link to="/SG" tag="div" active-class="active" class="SG" >
                <a href="javascript:;"></a>
            </router-link>
            <div class="signin-container">
                <div class="signin-inner">
                    <div class="signin-header">
                        <h1>Sign In</h1>
                        <div class="login-account-logo"></div>
                    </div>
                    <form action="" method="post">
                        <div class="signin-form">
                            <div class="input-row">
                                <div class="input-inner">
                                    <div class="username-wrap signin-item">
                                        <span class="username-label label">
                                            <label for="username-input">
                                                <span class="input-content">Username or Email Address</span>
                                            </label>
                                        </span>
                                        <div class="username-input-wrap">
                                            <input type="text" id="username-input">
                                        </div>
                                    </div>
                                    <div class="password-wrap signin-item">
                                        <span class="password-label label">
                                            <label for="password-input">
                                                <span class="input-content">
                                                    password
                                                </span>
                                            </label>
                                        </span>
                                        <div class="password-input-wrap">
                                            <input type="text" id="password-input">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-wrap">
                                <div class="rememberme-wrap">
                                    <div class="input-wrap">
                                        <input type="checkbox" name="" id="remember-me">
                                    </div>
                                    <div class="label-wrap">
                                        <label for="remember-me">
                                            <span>Remember Me</span>
                                        </label>
                                    </div>
                                </div>
                                <a class="signin-btn login-btn-wrap">
                                    <span class="loginPageSignInButton login-btn-inner">
                                        <span class="gradient">
                                            <span class="buttonText">Sign In</span>
                                        </span>
                                    </span>                                
                                </a>
                                <a class="cancel-btn login-btn-wrap">
                                    <span class="loginPageCancelButton login-btn-inner">
                                        <span class="gradient">
                                            <span class="buttonText">Cancel</span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </form>
                    <div class="account-wrap">
                        <h2>Don't have a Disney account?</h2>
                        <a href="" class="create-account-btn">
                            <div class="create-account-text">
                                    Create Account
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.Login {
    position: fixed;
    z-index: 10000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #1d96d7;
    min-height: 600px;
    min-width: 1024px;
}
.page-container {
    width: 940px;
    margin: 0 auto;
    padding-top: 75px;
}
.page-container .SG>a {
    background-image: url(../assets/images/login-logo.png);
    background-size: 263px 51px;
    width: 263px;
    height: 51px;
    display: block;
    margin: 0 auto 15px;
}
.signin-container {
    margin: auto;
    float: none;
    padding: 0 0 1px 0;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    -moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    background-color: #FFF;
    width: 560px;
    height: 294px;
}
.signin-inner {
    display: block;
    padding: 27px 30px 22px;
}
.signin-header {
    width: 100%;
    zoom: 1;
}
.signin-header::after {
    content: "";
    display: block;
    clear: both;
}
.signin-header h1 {
    display: inline-block;
    float: left;
    font-family:Avenir, Helvetica, Arial, sans-serif;
    font-size: 28px;
    padding: 0 0 9px 0;
    line-height: 1;
    font-weight: 100;
    color: #253B56;
    white-space: nowrap;
}
.signin-header .login-account-logo {
    display: inline-block;
    float: right;
    margin: 1px 0 0 0;
    padding: 0;
    width: 114px;
    height: 30px;
    background-image: url(../assets/images/login-account.png);
    background-size: 116px 30px;
    background-repeat: no-repeat;
}
.signin-form {
    zoom: 1;
}
.signin-form::after {
    content: "";
    display: block;
    clear: both;
}
.signin-form .input-inner {
    zoom: 1;
}
.signin-form .input-inner::after {
    content: "";
    display: block;
    clear: both;
}
.signin-form .signin-item {
    float: left;
}
.signin-form .username-wrap {
    margin-right: 15px;
}
.signin-form .signin-item .label{
    display: block;
}
.signin-form .signin-item .label .input-content {
    display: block;
    line-height: 14px;
    font-size: 12px;
    font-weight: bold;
    color: #253B56;
    text-align: left;
}
.signin-form .signin-item .username-input-wrap {
}
.signin-form .signin-item  input {
    border: 1px solid transparent;
    width: 242px;
    padding: 5px 6px 4px;
    font-size: 14px;
    -webkit-box-shadow: 0 1px 3px 0 #777;
    -moz-box-shadow: 0 1px 3px 0 #777;
    box-shadow: 0 1px 3px 0 #777;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    background-image: none;
    -webkit-appearance: none;
    margin: 6px 0;
    min-height: 13px;
}
.signin-form .signin-item .password-babel{}
.signin-form .signin-item .password-input-wrap{}
.signin-form .btn-wrap {
    padding-top: 25px;
    zoom: 1;
    padding-bottom: 25px;
    position: relative;
}
.signin-form .btn-wrap::before {
    content: "";
    display:block;
    width: 100%;
    height: 1px;
    border-bottom:1px solid rgba(0, 0, 0, 0.26);
    transform: scaleY(.5);
    position: absolute;
    bottom: 0px;
}
.signin-form .btn-wrap::after {
    content: "";
    display:block;
    clear: both;
}
/* btn-wrap remenber-wrap*/
.signin-form .btn-wrap .rememberme-wrap{
    float: left;
}
.signin-form .btn-wrap .rememberme-wrap .input-wrap {
    line-height: 27px;
    float: left;
    height: 27px;
    padding-top: 4px;
    border-radius: 9px;
    margin-right: 8px;
    background: linear-gradient(to bottom, #FFF 0%,#ececec 100%);
}
.signin-form .btn-wrap .rememberme-wrap input {
    color: #fff;
    display: inline-block;
    padding: 5px;
    width: 19px;
    height: 19px;
    border: 1px solid rgb(161, 175, 192);
    box-shadow: 0 1px 2px 0 #999;
    cursor: pointer;
    border-radius: 11px;
    background: linear-gradient(to bottom, #FFF 0%,#ececec 100%);
}
.signin-form .btn-wrap .rememberme-wrap .label-wrap {
    height: 27px;
    line-height: 27px;
    float: left;
}
.signin-form .btn-wrap .rememberme-wrap label {
    
}
.signin-form .btn-wrap .rememberme-wrap span {
    font-size: 14px;
    color: #253B56;
}
/* btn-wrap login-btn*/
.btn-wrap .login-btn-wrap {
    display: block;
    float: right;
    display: block;
    -webkit-border-radius: 20px;
    cursor: pointer;
}
.btn-wrap .cancel-btn {
    margin: 0 15px 0 5px;
}
.btn-wrap .signin-btn {
    background-color: #61941B;
}
.btn-wrap .login-btn-inner {
    padding: 0 5px;
    text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.35);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
    -webkit-border-radius: 20px;
    width: 102px;
    height: 27px;
    display: block;
}
.btn-wrap .login-btn-inner .gradient{
    padding: 0 16px;
    width: 92px;
    height: 17px;
    -webkit-border-radius: 20px;
    display:block;
    position: relative;
}
.btn-wrap .cancel-btn .gradient{
    background: linear-gradient(to bottom, rgba(255,255,255,0.56) 0%,rgba(255,255,255,0) 100%);
}
.btn-wrap .signin-btn .gradient{
    background: linear-gradient(to bottom, rgba(255,255,255,0.56) 0%,rgba(255,255,255,0) 100%);
}
.btn-wrap  .login-btn-inner .buttonText{
    color: #65778A;
    width: 60px;
    height: 17px;
    font-size: 13px;
    text-align: center;
    position: absolute;
    top: 5px;
    white-space: nowrap;
    display: block;
}
.btn-wrap  .signin-btn .buttonText {
    color: #FFF;
}
.account-wrap {
    padding-top: 15px;
}
.account-wrap h2 {
    font-size: 18px;
    font-weight: bold;
    color: #253B56;
    text-align: left;
}
.account-wrap .create-account-btn {
    padding-top: 15px;
    display: block;
    width: 150px;
    height: 21px;
    cursor: pointer;
}
.account-wrap .create-account-btn .create-account-text {
    line-height: 21px;
    font-size: 14px;
    font-weight: bold;
    color: #253B65;
    text-align: left;
}
</style>