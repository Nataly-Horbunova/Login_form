class Validators {
    required = {
        isValid(element) {
            let message = element.dataset.required;
            return Validators.validate(element, message, () => element.value.length > 0);
        },
    }

    pattern = {
        isValid(element) {
            let message = element.dataset.patternMsg;
            let regex = new RegExp(element.dataset.pattern);
            return Validators.validate(element, message, () => regex.test(element.value));
        },
    }

    confirm = {
        isValid(element) {
            let message = element.dataset.confirmMsg;
            let confirmInput = document.querySelector("#" + element.dataset.confirm);
            return Validators.validate(element, message, () => element.value == confirmInput.value);
        },
    }

    checkbox = {
        isValid(element) {
            let message = element.dataset.checkbox;
            return Validators.validate(element, message, () => element.checked === true);
        }
    }

    static validate(element, message, predicate) {
        let errorLabel = document.querySelector("#" + element.dataset.errorLabel);
        errorLabel.innerHTML = message;
        errorLabel.style.display = "none";
        element.classList.remove("invalid");

        if (typeof predicate == "function" && predicate()) {
            return true;
        } else {
            element.classList.add("invalid");
            errorLabel.style.display = "block";
            return false;
        }
    }
}