export async function tryCatch(promise) {
  try {
    return [null, await promise];
  } catch (e) {
    return [e, null];
  }
}

export const disableForm = (form) => {
  Array.from(form.elements).forEach(
    (formElement) => (formElement.disabled = true)
  );
};

export const enableForm = (form) => {
  Array.from(form.elements).forEach(
    (formElement) => (formElement.disabled = false)
  );
};
