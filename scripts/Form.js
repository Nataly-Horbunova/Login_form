class Form {
    validators = new Validators();
    constructor(formName) {
        this.form = document.forms[formName];
        this.elements = document.querySelectorAll(`[name=${formName}] [data-val='true']`);
    }

    initSubmit() {
        this.form.addEventListener("submit", this.onSubmitHandler.bind(this));
    }

    initChange() {
        this.elements.forEach(element => {
            if (element.type !== 'checkbox') {
                element.addEventListener("change", this.onChangeAnaBlurHandler.bind(this));
            }
        });
    }

    initBlur() {
        this.elements.forEach(element => {
            element.addEventListener("blur", this.onChangeAnaBlurHandler.bind(this));
        });
    }

    onChangeAnaBlurHandler(e) {
        const element = e.target;
        if (element.tagName === "INPUT") {
            this.validateElement(element);
        }
    }

    onSubmitHandler(e) {
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            let valid = this.validateElement(element);
            console.log(valid);
            if (!valid) {
                e.preventDefault();
            }
        }
    }

    validateElement(element) {
        console.log(this.validators)
        for (const key in this.validators) {
            console.log(key);
            if (element.dataset[key]) {
                const validator = this.validators[key];
                if (!validator.isValid(element))
                    return false;
            }
        }
        return true;
    }

    init() {
        this.initSubmit();
        this.initChange();
        this.initBlur();
    }
}
