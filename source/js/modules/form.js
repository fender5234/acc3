export default (formElement) => {
  const fieldElements = formElement.querySelectorAll('[name]');

  fieldElements.forEach((fieldElement) => {
    const {id, type} = fieldElement;

    if (type === 'password') {
      return;
    }

    const value = localStorage.getItem(id);
    if (value !== null) {
      fieldElement.value = value;
    }

    fieldElement.addEventListener('change', () => {
      if (fieldElement.checkValidity()) {
        localStorage.setItem(id, fieldElement.value);
      }
    });
  });
};
