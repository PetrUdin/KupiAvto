
let message = {
  loading: "Загрузка",
  success: "Спасибо, мы с Вами свяжемся в ближайшее время",
  failure: "Что-то пошло не так"
};

let form = document.querySelector('.form');
let input = form.getElementsByTagName('input');
let statusMessage = document.createElement('div');

statusMessage.classList.add("status");

form.addEventListener('submit', function (event) {
  event.preventDefault();
  form.appendChild(statusMessage);

  let request = new XMLHttpRequest();
  request.open('POST', 'send.php', true);
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");

  let formData = new FormData(form);
  let obj = {};
  formData.forEach(function (value, key) {
    obj[key] = value;
  });
  let json = JSON.stringify(obj);
  request.send(json);


  request.addEventListener('readystatechange', function () {
    if (request.status < 4) {
      statusMessage.innerHTML = message.loading;
    } else if (request.status == 200 && request.readyState === 4) {
      statusMessage.innerHTML = message.success;
    } else {
      statusMessage.innerHTML = message.failure;
    }
  });
  for (let i = 0; i < input.length; i++) {
    input[i].value = '';
  }
});