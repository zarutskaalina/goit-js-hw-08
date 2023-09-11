import throttle from 'lodash.throttle';

const data = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textArea: document.querySelector('textarea'),
};

const formData = {
  email: '',
  message: '',
};

fillTextarea();

data.form.addEventListener('input', throttle(onInput, 500));
data.form.addEventListener('submit', onSubmit);

function onInput(e) {
  formData[e.target.name] = e.target.value;
  const formDataKey = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', formDataKey);
}

function onSubmit(e) {
  e.preventDefault();
  if (data.input.value === '' || data.textArea.value === '') {
    return alert('All fields must be filled.');
  }

  const removedData = localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
  console.log(formData);
}

function fillTextarea() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData === null) {
    return;
  }

  data.input.value = savedData.email || '';
  data.textArea.value = savedData.message || '';
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
}
