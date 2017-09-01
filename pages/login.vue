<template>
    <div class="signin">
        <form class="box animated-form">
            <div class="logo">
                <img src="~static/logo.png" alt="">
            </div>
            <div class="input-field">
                <input type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Username
                    <span>*</span>
                </label>
            </div>
            <div class="input-field">
                <input type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Password
                    <span>*</span>
                </label>
            </div>
            <div class="forget">
                <a href="#">Forget Password?</a>
            </div>
            <div class="btn">
                <button>Sign In</button>
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
    display: flex;
    flex-direction: column;

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
}

.animated-form .input-field {
    position: relative;
    margin-bottom: 40px;
    box-sizing: border-box;
    font-family: 'Open Sans';
    /* Label Active State */
    /* Bottom Bar */
    /* Input Active State */
    /* Highlighter */
    /* Highlight input active state */
}

.animated-form .input-field input {
    padding: 8px 0;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #2d2d2d;
}

.animated-form .input-field input:focus {
    outline: none;
}

.animated-form .input-field label {
    font-size: 1em;
    color: #999;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    top: 8px;
    transition: 0.4s ease all;
    -moz-transition: 0.4s ease all;
    -webkit-transition: 0.4s ease all;
}

.animated-form .input-field label span {
    color: #E51313;
}

.animated-form .input-field input:focus~label,
.animated-form .input-field input:valid~label,
.animated-form .input-field input:disabled~label {
    top: -16px;
    font-size: 11px;
    color: #5F5F5F;
    font-weight: bold;
}

.animated-form .input-field .bar {
    position: relative;
    display: block;
    width: 100%;
}

.animated-form .input-field .bar:before,
.animated-form .input-field .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #004771;
    transition: 0.4s ease all;
    -moz-transition: 0.4s ease all;
    -webkit-transition: 0.4s ease all;
}

.animated-form .input-field .bar:before {
    left: 50%;
}

.animated-form .input-field .bar:after {
    right: 50%;
}

.animated-form .input-field input:focus~.bar:before,
.animated-form .input-field input:focus~.bar:after {
    width: 50%;
}

.animated-form .input-field .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
}

.animated-form .input-field input:focus~.highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
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
