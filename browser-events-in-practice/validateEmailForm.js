export function validateEmailForm() {
    const form = document.querySelector('.email-form');
    const toField = form.querySelector('#to-field');
    const toValidMark = form.querySelector('.email-form__valid-mark');
    const topicField = form.querySelector('#topic-field');
    const acceptTerms = form.querySelector('.email-form__accept-terms');
    const submitButton = form.querySelector('.email-form__button');

    function isValidEmail(value) {
        if (value.trim() !== value) {
            return false;
        }
        if (value.length < 4) {
            return false;
        }
        if (value.includes(' ')) {
            return false;
        }
        const atIndex = value.indexOf('@');
        if (atIndex <= 0 || atIndex === value.length - 1) {
            return false;
        }
        return true;
    }
    toField.addEventListener('input', () => {
        if (isValidEmail(toField.value)) {
            toValidMark.classList.remove('hidden');
        } else {
            toValidMark.classList.add('hidden');
        }
    });
    topicField.addEventListener('focus', () => {
        topicField.classList.remove('email-form__input_warning');
    });
    topicField.addEventListener('blur', () => {
        if (topicField.value.trim() === '') {
            topicField.classList.add('email-form__input_warning');
        }
    });
    acceptTerms.addEventListener('change', () => {
        submitButton.disabled = !acceptTerms.checked;
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.dispatchEvent(
            new CustomEvent('email-form-submit', {
                bubbles: true,
            })
        );
    });
}
