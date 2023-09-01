document.addEventListener('DOMContentLoaded', function () {
  const showButtonsButton = document.getElementById('showButtons');
  const overlay = document.getElementById('overlay');
  const closeOverlayButton = document.getElementById('closeOverlay'); 

  let buttonsVisible = false;

  function showOverlay() {
    overlay.style.display = 'block';

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const button1 = document.createElement('button');
    button1.textContent = 'Previous';
    button1.classList.add('custom-button');

    const button2 = document.createElement('button');
    button2.textContent = 'Next';
    button2.classList.add('custom-button');

    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(document.createTextNode('\u00A0\u00A0'));
    buttonContainer.appendChild(button2);

    buttonContainer.style.marginTop = '600px'; 
    buttonContainer.style.marginLeft = '100px';
    
    overlay.appendChild(buttonContainer);
  }

  function hideOverlay() {
    overlay.style.display = 'none';

    const buttonContainer = overlay.querySelector('.button-container');
    if (buttonContainer) {
      overlay.removeChild(buttonContainer);
    }

    buttonsVisible = false; // Reset buttonsVisible to false when the overlay is closed
  }

  showButtonsButton.addEventListener('click', function () {
    if (buttonsVisible) {
      hideOverlay(); 
    } else {
      showOverlay(); 
    }

    buttonsVisible = !buttonsVisible;
  });

  closeOverlayButton.addEventListener('click', function () {
    hideOverlay(); 
  });
});
