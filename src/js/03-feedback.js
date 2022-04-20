import throttle from "lodash.throttle";

const KEY = "feedback-form-state";
const formData = {};

const refs = {
    formRef: document.querySelector(".feedback-form")
};

refs.formRef.addEventListener('input', throttle(onFormInput, 500));
refs.formRef.addEventListener('submit', onFormSubmit);

updateForm();

function onFormSubmit(e) {
    e.preventDefault();

    const { email, message } = formData;

    const form = e.currentTarget;
    const formEmail = email;
    const formMessage = message;

    form.reset();
    console.log(`email: ${formEmail}`)
    console.log(`message: ${message}`)
    localStorage.clear()
};

function updateForm() {
    const localStorageData = localStorage.getItem(KEY)
    if (localStorageData) {
        const { email, message } = JSON.parse(localStorageData);
        refs.formRef.email.value = email;
        refs.formRef.message.value = message;
        formData.email = email;
        formData.message = message;
    }
};

function onFormInput(e) {
    formData.email = refs.formRef.elements.email.value;
    formData.message = refs.formRef.elements.message.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
};

