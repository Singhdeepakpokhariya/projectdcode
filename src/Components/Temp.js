import React from 'react';

const Temp = () => {
    return (
        <div>
            <div class="auth">
    <div class="container" :class="{'desktop':!isMobile,'mobile':isMobile}">
        <h3 class="text-center">Corporate Sign In</h3>
        <div class="row">
            <div class="col">
                <input type="text" class="form-control" placeholder="Email / Mobile" v-model="username" :class="{'error':(status=='error' || !validUsername)}">
                <input type="password" class="form-control" placeholder="Password" v-model="password" :class="{'error':status=='error'}" @keyup.enter="login">
                <label class="remember-me text-center" v-if="!isMobile">
                    <input type="checkbox" v-model="remember"> Remember Me
                </label>
                <button type="button" class="login" @click="login" :disabled="status == 'loading'"><span v-if="status == 'loading'" class="spinner-border spinner-border-sm"></span> Log In</button>
                <label class="remember-me text-center" v-if="isMobile">
                    <input type="checkbox" v-model="remember"> Remember Me
                </label>
                <router-link :to="{name:'forgot', query: {username:username}}" class="forgot">Forgot your Password?</router-link>
                <div class="sign-up text-center">
                    <router-link :to="{name:'signup'}">Sign Up for Corporate</router-link>
                </div>
            </div>
        </div>
        <div class="copyright">&#xa9;2020 <a href="https://dcodeai.com" target="_blank">DcodeAI Private Limited</a></div>
        <div v-if="message.text" class="msg-toast" :class="{'error':message.type=='error', 'success':message.type=='success'}">{{message.text}}</div>
    </div>
</div>
        </div>
    );
}

export default Temp;
