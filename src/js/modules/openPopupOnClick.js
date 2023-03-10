export default function openPopup(status) {
  if(status === 'success') {
    let button = document.createElement("button");
    button.classList.add('visually-hidden');
    button.dataset.path = "success-popup";
    document.body.appendChild(button);

    button.click();
    button.remove();
  } else if(status === 'error') {
    let button = document.createElement("button");
    button.classList.add('visually-hidden');
    button.dataset.path = "error-popup";
    document.body.appendChild(button);

    button.click();
    button.remove();
  }
}

window.openPopup = openPopup;