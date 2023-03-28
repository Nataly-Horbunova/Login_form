class App {
    constructor() {
        this.signInForm = new Form('signInForm');
        this.signUpForm = new Form('signUpForm');
        this.forgotPswForm = new Form('forgotPswForm');

        this.signInFormWrapper = document.querySelector('.sign-in-wrapper');
        this.signUpFormWrapper = document.querySelector('.sign-up-wrapper');
        this.forgotPswFormWrapper = document.querySelector('.forgot-psw-wrapper');

        this.signInLink = document.querySelector('.sign-in-link');
        this.signUpLink = document.querySelector('.sign-up-link');
        this.forgotPswLink = document.querySelector('.forgot-password-link');
        this.backToSignInLink = document.querySelector('.back-to-sign-in-link');
    }

    initShowSignUpForm() {
        this.signUpLink.addEventListener('click', () => {
            this.toggleForm(this.signInFormWrapper);
            this.toggleForm(this.signUpFormWrapper);
        })
    }

    initShowSignInForm() {
        this.signInLink.addEventListener('click', () => {
            this.toggleForm(this.signUpFormWrapper);
            this.toggleForm(this.signInFormWrapper);
        });

        this.backToSignInLink.addEventListener('click', () => {
            this.toggleForm(this.forgotPswFormWrapper);
            this.toggleForm(this.signInFormWrapper);
        })
    }

    initShowForgotPasswordForm() {
        this.forgotPswLink.addEventListener('click', () => {
            this.toggleForm(this.signInFormWrapper);
            this.toggleForm(this.forgotPswFormWrapper);
        })
    }

    toggleForm(form) {
        form.hidden = !form.hidden;
    }

    init() {
        this.signInForm.init();
        this.signUpForm.init();
        this.forgotPswForm.init();
        this.initShowSignUpForm();
        this.initShowSignInForm();
        this.initShowForgotPasswordForm();
    }
}