<template>
    <div></div>
</template>
<style lang="scss" scoped>
@import '~assets/scss/core.scss';
.signin {
    height: 100%;
    min-height: 400px;
    min-width: 640px;
    background: $primary-color  url('~static/singIn-bg.jpg') no-repeat;
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
        color: $text-color;
    }
}
.btn-signin{
    display: block;
    margin: 0 auto;
    width: 300px;
    height: 40px;
    color: $btn-primary-color;
    font-size: 18px;
    background: $primary-color ;
    border: 0;
    border-radius: 20px;
    box-shadow: 3px 3px 8px $shadow-color;
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
        border-bottom: 1px solid $border-color-base;
        background: transparent;
        color: $input-color;
        font-size: $input-font-size;
        &:focus {
            outline: none;
        }
        /* override chrome autofill color */
        &:-webkit-autofill{
            box-shadow: 0 0 0px 1000px $background-color-dark inset;
            -webkit-text-fill-color: $input-color;
        }
    }
    label {
        font-size: 1em;
        color: $label-color;
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
            font-size: $input-font-size;
            color: $text-color;
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
            background: $background-color-base;
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
    layout: 'admin',
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
