import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = {
    email: '',
    message: '',
}

updateForm();

form.addEventListener('input', throttle(onSaveInput, 500));

function onSaveInput(e) {
    feedbackForm.email = input.value;
    feedbackForm.message = textarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function updateForm() {
    const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedForm) {
        input.value = savedForm.email;
        textarea.value = savedForm.message;
    }
}
