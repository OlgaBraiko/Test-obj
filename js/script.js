const forms = document.querySelectorAll("form");
const inputs = document.querySelectorAll("input");

const postData = async (url, data) => {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });
  return await result.text();
};

const clearForms = () => {
  inputs.forEach((input) => {
    input.value = "";
  });
};

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const objDataForm = {};

    formData.forEach((value, key) => (objDataForm[key] = value));
    const json = JSON.stringify(objDataForm);

    postData("https://simple-server-cumz.onrender.com/api/data", json).then(
      () => {
        clearForms();
      }
    );
    console.log(objDataForm);
  });
});
