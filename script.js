document.addEventListener('DOMContentLoaded', function () {
  const showButtonsButton = document.getElementById('showButtons');
  const overlay = document.getElementById('overlay');
  const closeOverlayButton = document.getElementById('closeOverlay');

  let buttonsVisible = false;

  let tooltipIndex = 0; // Set the initial tooltip index to 0
  const tooltips = [
    'This is home page',
    'This is contact page',
    'sudfusdbfausdfudsa',
    'Close Overlay' // New tooltip
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

    // Adjust the left position of the triangle
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

      if (tooltipIndex === 0) {
        // Reset the position for the first tooltip
        combinedElement.style.left = 'calc(50% - 218px)'; // Original left position
      }else if (tooltipIndex === 1) {
        // Move the second tooltip 100px to the right
        combinedElement.style.left = 'calc(50% - 118px)'; // Adjust the left position
      } else if (tooltipIndex === 2) {
        // Move the third tooltip 100px to the right
        combinedElement.style.left = 'calc(50% - 20px)'; // Adjust the left position
      } else if (tooltipIndex === 3) {
        // Create a new tooltip for "Close Overlay"
        const closeOverlayText = document.createElement('span');
        closeOverlayText.textContent = tooltips[3]; // Text for "Close Overlay"

        // Adjust the left position of the "Close Overlay" tooltip based on screen width
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenWidth < 768) {
          combinedElement.style.left = 'calc(90% - 110px)';3
        } else {
          combinedElement.style.left = 'calc(90% - 33px)';
        }

        const closeOverlayRectangle = document.createElement('div');
        closeOverlayRectangle.style.width = '220px';
        closeOverlayRectangle.style.height = '33px';
        closeOverlayRectangle.style.backgroundColor = '#F1EEDF';
        closeOverlayRectangle.style.borderRadius = '10px';
        closeOverlayRectangle.style.textAlign = 'center';
        closeOverlayRectangle.style.lineHeight = '33px';
        closeOverlayRectangle.style.color = 'brown';

        closeOverlayRectangle.appendChild(closeOverlayText);

        const closeOverlayCombinedElement = document.createElement('div');
        closeOverlayCombinedElement.classList.add('combined-element');
        closeOverlayCombinedElement.style.position = 'absolute';
        closeOverlayCombinedElement.style.zIndex = '99999';
        closeOverlayCombinedElement.style.top = '65px';

        // Adjust the left position of the "Close Overlay" tooltip and its triangle
        closeOverlayCombinedElement.style.left = 'calc(50% + 120px)';
        const closeOverlayTriangle = closeOverlayRectangle.querySelector('div');
        closeOverlayTriangle.style.left = 'calc(50% - 10px)';

        closeOverlayCombinedElement.appendChild(closeOverlayRectangle);

        overlay.appendChild(closeOverlayCombinedElement);
      } else {
        // Reset the position for the first tooltip
        combinedElement.style.left = 'calc(50% - 218px)'; // Original left position
      }
    });

    // Add event listener to the "Previous" button to navigate to the previous tooltip
    button1.addEventListener('click', function () {
      tooltipIndex = (tooltipIndex - 1 + tooltips.length) % tooltips.length; // Cycle through tooltips in reverse
      textElement.textContent = tooltips[tooltipIndex]; // Update only the text content

      if (tooltipIndex === 1) {
        // Move the second tooltip 100px to the right
        combinedElement.style.left = 'calc(50% - 118px)'; // Adjust the left position
      } else if (tooltipIndex === 2) {
        // Move the third tooltip 100px to the right
        combinedElement.style.left = 'calc(50% - 20px)'; // Adjust the left position
      } else if (tooltipIndex === 3) {
        // Create a new tooltip for "Close Overlay"
        const closeOverlayText = document.createElement('span');
        closeOverlayText.textContent = tooltips[3]; // Text for "Close Overlay"

        // Adjust the left position of the "Close Overlay" tooltip based on screen width
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenWidth < 768) {
          combinedElement.style.left = 'calc(90% - 110px)';
        } else {
          combinedElement.style.left = 'calc(90% - 33px)';
        }

        const closeOverlayRectangle = document.createElement('div');
        closeOverlayRectangle.style.width = '220px';
        closeOverlayRectangle.style.height = '33px';
        closeOverlayRectangle.style.backgroundColor = '#F1EEDF';
        closeOverlayRectangle.style.borderRadius = '10px';
        closeOverlayRectangle.style.textAlign = 'center';
        closeOverlayRectangle.style.lineHeight = '33px';
        closeOverlayRectangle.style.color = 'brown';

        closeOverlayRectangle.appendChild(closeOverlayText);

        const closeOverlayCombinedElement = document.createElement('div');
        closeOverlayCombinedElement.classList.add('combined-element');
        closeOverlayCombinedElement.style.position = 'absolute';
        closeOverlayCombinedElement.style.zIndex = '99999';
        closeOverlayCombinedElement.style.top = '65px';

        // Adjust the left position of the "Close Overlay" tooltip and its triangle
        closeOverlayCombinedElement.style.left = 'calc(50% + 120px)';
        const closeOverlayTriangle = closeOverlayRectangle.querySelector('div');
        closeOverlayTriangle.style.left = 'calc(50% - 10px)';

        closeOverlayCombinedElement.appendChild(closeOverlayRectangle);

        overlay.appendChild(closeOverlayCombinedElement);
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
