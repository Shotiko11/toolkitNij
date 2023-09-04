document.addEventListener('DOMContentLoaded', function () {
  const showButtonsButton = document.getElementById('showButtons');
  const overlay = document.getElementById('overlay');
  const closeOverlayButton = document.getElementById('closeOverlay');

  let buttonsVisible = false;

  let tooltipIndex = 0;
  const tooltips = [
    'This is home page',
    'This is contact page',
    'This is about page'
  ];

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
  
    const rectangle = document.createElement('div');
    rectangle.style.width = '220px';
    rectangle.style.height = '33px';
    rectangle.style.backgroundColor = '#F1EEDF';
    rectangle.style.borderRadius = '10px';
    rectangle.style.textAlign = 'center';
    rectangle.style.lineHeight = '33px';
    rectangle.style.color = 'brown';
  
    const textElement = document.createElement('span'); // Create a separate element for text
    textElement.textContent = tooltips[tooltipIndex]; // Display the current tooltip
  
    const triangle = document.createElement('div');
    triangle.style.width = '0';
    triangle.style.height = '0';
    triangle.style.borderLeft = '10px solid transparent';
    triangle.style.borderRight = '10px solid transparent';
    triangle.style.borderBottom = '10px solid #F1EEDF';
    triangle.style.position = 'absolute';
    triangle.style.top = '-10px';
    triangle.style.left = 'calc(50% - 10px)';
  
    rectangle.appendChild(textElement); // Add the text element to the rectangle
    rectangle.appendChild(triangle); // Add the triangle to the rectangle
  
    combinedElement.appendChild(rectangle);
  
    overlay.appendChild(buttonContainer);
    overlay.appendChild(combinedElement);
  
    // Add event listener to the "Next" button to cycle through tooltips
    button2.addEventListener('click', function () {
      tooltipIndex = (tooltipIndex + 1) % tooltips.length; // Cycle through tooltips
      textElement.textContent = tooltips[tooltipIndex]; // Update only the text content
  
      if (tooltipIndex === 1) {
        // Move the second tooltip 100px to the right
        combinedElement.style.left = 'calc(50% - 118px)'; // Adjust the left position
      } else if (tooltipIndex === 2) {
        // Move the third tooltip 100px to the right
        combinedElement.style.left = 'calc(50% - 20px)'; // Adjust the left position
      } else {
        // Reset the position for the first tooltip
        combinedElement.style.left = 'calc(50% - 218px)'; // Original left position
      }
    });
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
