<template>
    <div class="signin">
        <form class="box" autocomplete="smartystreets">
            <div class="logo">
                <img src="~static/logo.png" alt="">
            </div>
            <div class="input-field">
                <input type="text" autocomplete="smartystreets" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>User Name</label>
            </div>
            <div class="input-field password">
                <input type="password" autocomplete="smartystreets" required>
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
@import '~assets/scss/core.scss';
.signin {
    height: 100%;
    min-height: 400px;
    min-width: 640px;
    background: $primary-color url('~static/singIn-bg.jpg') no-repeat;
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
    background-color: $background-color-dark;
    box-shadow: 3px 3px 8px $shadow-color;
    &>div {
        width: 450px;
        margin-left: auto;
        margin-right: auto;
    }
    .password {
        margin-bottom: 0;
    }
    .input-field {
        margin-bottom: 40px;
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
        color: $text-color;
    }
}

.btn-signin {
    display: block;
    margin: 0 auto;
    width: 300px;
    height: 40px;
    color: $btn-primary-color;
    font-size: 18px;
    background: $primary-color;
    border: 0;
    border-radius: 20px;
    box-shadow: 3px 3px 8px $shadow-color;
    outline: none;
    cursor: pointer;
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
