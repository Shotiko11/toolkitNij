

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

    const combinedElement = document.createElement('div');
    combinedElement.classList.add('combined-element'); 
    combinedElement.style.position = 'absolute';
    combinedElement.style.zIndex = '99999';
    combinedElement.style.top = '65px'; 
    combinedElement.style.left = 'calc(50% - 218px)'; 

    const rectangle = document.createElement('div');
    rectangle.style.width = '220px';
    rectangle.style.height = '33px';
    rectangle.style.backgroundColor = '#F1EEDF';
    rectangle.style.borderRadius = '10px';
    rectangle.style.textAlign = 'center'; 
    rectangle.style.lineHeight = '33px'; 
    rectangle.style.color = 'brown'; 
    rectangle.textContent = 'This is home page'; 
   
    const triangle = document.createElement('div');
    triangle.style.width = '0';
    triangle.style.height = '0';
    triangle.style.borderLeft = '10px solid transparent';
    triangle.style.borderRight = '10px solid transparent';
    triangle.style.borderBottom = '10px solid #F1EEDF';
    triangle.style.position = 'absolute';
    triangle.style.top = '-10px'; 
    triangle.style.left = 'calc(50% - 10px)';

    rectangle.appendChild(triangle);

    combinedElement.appendChild(rectangle);

    overlay.appendChild(combinedElement);
  }

  function hideOverlay() {
    overlay.style.display = 'none';

    const buttonContainer = overlay.querySelector('.button-container');
    if (buttonContainer) {
      overlay.removeChild(buttonContainer);
    }

    const combinedElement = overlay.querySelector('.combined-element');
    if (combinedElement) {
      overlay.removeChild(combinedElement);
    }

    buttonsVisible = false;
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