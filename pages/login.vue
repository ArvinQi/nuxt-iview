<template>
    <div class="signin">
        <form class="box">
            <div class="logo">
                <img src="~static/logo.png" alt="">
            </div>
            <div class="input-field">
                <input type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>User Name</label>
            </div>
            <div class="input-field password">
                <input type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Password</label>
            </div>
            <div class="forget">
                <a href="#">Forget Password?</a>
            </div>
            <div>
                <button class="btn-signin">Sign In</button>
            </div>
        </form>
    </div>
</template>
<style lang="scss" scoped>
.signin {
    height: 100%;
    background: url('~static/singIn-bg.jpg') no-repeat;
    background-attachment: fixed;
    background-size: cover;
}

.box {
    // display: flex;
    // flex-direction: column; // justify-content: space-between;
    // align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -320px;
    width: 640px;
    height: 400px;
    border-radius: 16px;
    background-color: #16122e;
    box-shadow: 3px 3px 8px rgba(#000, .12);
    &>div {
        width: 450px;
        margin-left: auto;
        margin-right: auto;
    }
    .password{
        margin-bottom: 0;
    }
}

.logo {
    padding-top: 40px;
    margin-bottom: 40px;
    img {
        display: block;
        margin: 0 auto;
    }
}

.forget {
    height: 32px;
    margin-bottom: 30px;
    a {
        float: right;
        padding: 5px;
        color: #8a8e9c;
    }
}
.btn-signin{
    display: block;
    margin: 0 auto;
    width: 300px;
    height: 40px;
    color: #fff;
    font-size: 18px;
    background: #8b52e8;
    border: 0;
    border-radius: 20px;
    box-shadow: 3px 3px 8px rgba(#000, .12);
    outline: none;
    cursor: pointer;
}
.input-field {
    position: relative;
    margin-bottom: 40px;
    box-sizing: border-box;
    font-family: 'Open Sans';
    /* Label Active State */
    /* Bottom Bar */
    /* Input Active State */
    /* Highlighter */
    /* Highlight input active state */
    input {
        margin: 0 auto;
        padding: 8px 0;
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1px solid #585d72;
        background: transparent;
        &:focus {
            outline: none;
        }
    }
    label {
        font-size: 1em;
        color: #8a8e9c;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        top: 8px;
        transition: 0.4s ease all;
        -moz-transition: 0.4s ease all;
        -webkit-transition: 0.4s ease all;
    }
    input {
        &:focus~label,
        &:valid~label,
        &:disabled~label {
            top: -16px;
            font-size: 11px;
            color: #5F5F5F;
            font-weight: bold;
        }
    }
    .bar {
        position: relative;
        display: block;
        width: 100%;
        &:before,
        &:after {
            content: '';
            height: 1px;
            width: 0;
            bottom: 1px;
            position: absolute;
            background: #fff;
            transition: 0.4s ease all;
            -moz-transition: 0.4s ease all;
            -webkit-transition: 0.4s ease all;
        }
        &:before {
            left: 50%;
        }
        &:after {
            right: 50%;
        }
    }
    input:focus~.bar {
        &:before,
        &:after {
            width: 50%;
        }
    }
    .highlight {
        position: absolute;
        height: 60%;
        width: 100px;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    }
    input:focus~.highlight {
        -webkit-animation: inputHighlighter 0.3s ease;
        -moz-animation: inputHighlighter 0.3s ease;
        animation: inputHighlighter 0.3s ease;
    }
}
</style>

<script>
export default {
    layout: 'empty',
    data() {
        return {
        }
    },
    computed: {
    },
    components: {
    },
    methods: {
    }
}
</script>
