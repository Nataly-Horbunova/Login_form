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
            this.hideForm(this.signInFormWrapper);
            this.showForm(this.signUpFormWrapper);
        })
    }

    initShowSignInForm() {
        this.signInLink.addEventListener('click', () => {
            this.hideForm(this.signUpFormWrapper);
            this.showForm(this.signInFormWrapper);
        });

        this.backToSignInLink.addEventListener('click', () => {
            this.hideForm(this.forgotPswFormWrapper);
            this.showForm(this.signInFormWrapper);
        })
    }

    initShowForgotPasswordForm() {
        this.forgotPswLink.addEventListener('click', () => {
            this.hideForm(this.signInFormWrapper);
            this.showForm(this.forgotPswFormWrapper);
        })
    }

    showForm(form) {
        form.hidden = false;
    }

    hideForm(form) {
        form.hidden = true;
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