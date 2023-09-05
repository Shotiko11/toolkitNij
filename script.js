class Tooltip {
  constructor(text, backgroundColor) {
    this.text = text;
    this.backgroundColor = backgroundColor;
  }

  create() {
    const element = document.createElement('div');
    element.style.width = '220px';
    element.style.height = '33px';
    element.style.backgroundColor = this.backgroundColor;
    element.style.borderRadius = '10px';
    element.style.textAlign = 'center';
    element.style.lineHeight = '33px';
    element.style.color = 'brown';

    const textElement = document.createElement('span');
    textElement.textContent = this.text;

    element.appendChild(textElement);
    return element;
  }
}

class Triangle {
  create() {
    const triangle = document.createElement('div');
    triangle.style.width = '0';
    triangle.style.height = '0';
    triangle.style.borderLeft = '10px solid transparent';
    triangle.style.borderRight = '10px solid transparent';
    triangle.style.borderBottom = '10px solid #F1EEDF';
    triangle.style.position = 'absolute';
    triangle.style.top = '-10px';
    triangle.style.left = 'calc(50% - 10px)';
    return triangle;
  }
}

class TooltipOverlay {
  constructor(overlayId, tooltips) {
    this.overlay = document.getElementById(overlayId);
    this.tooltips = tooltips;
    this.tooltipIndex = 0;
    this.buttonsVisible = false;
  }

  show() {
    this.overlay.style.display = 'block';

    this.createButtonContainer();
    this.createCombinedElement();

    this.attachEventListeners();

    this.overlay.addEventListener('click', (event) => {
      if (event.target === this.overlay) {
        this.hide();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.hide();
      }
    });
  }

  hide() {
    this.overlay.style.display = 'none';

    const buttonContainer = this.overlay.querySelector('.button-container');
    if (buttonContainer) {
      this.overlay.removeChild(buttonContainer);
    }

    const combinedElement = this.overlay.querySelector('.combined-element');
    if (combinedElement) {
      this.overlay.removeChild(combinedElement);
    }

    this.buttonsVisible = false;
  }

  createButtonContainer() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const button1 = this.createButton('Previous');
    const button2 = this.createButton('Next');

    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(document.createTextNode('\u00A0\u00A0'));
    buttonContainer.appendChild(button2);

    buttonContainer.style.marginTop = '600px';
    buttonContainer.style.marginLeft = '100px';

    this.overlay.appendChild(buttonContainer);
  }

  createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('custom-button');
    return button;
  }

  createCombinedElement() {
    const combinedElement = document.createElement('div');
    combinedElement.classList.add('combined-element');
    combinedElement.style.position = 'absolute';
    combinedElement.style.zIndex = '99999';
    combinedElement.style.top = '57px';

    const text = this.tooltips[this.tooltipIndex];
    const rectangle = new Tooltip(text, '#F1EEDF').create();
    const triangle = new Triangle().create();

    combinedElement.appendChild(rectangle);
    combinedElement.appendChild(triangle);

    if (this.tooltipIndex === 3) {
      combinedElement.style.left = 'calc(90% - 33px)';
    } else {
      combinedElement.style.left = 'calc(50% - 218px)';
    }

    this.overlay.appendChild(combinedElement);
  }

  attachEventListeners() {
    const button1 = document.querySelector('.button-container button:first-child');
    const button2 = document.querySelector('.button-container button:last-child');

    button2.addEventListener('click', () => {
      if (this.tooltipIndex === 3) {
        return;
      }
      this.tooltipIndex = (this.tooltipIndex + 1) % this.tooltips.length;
      this.updateTooltip();
    });

    button1.addEventListener('click', () => {
      if (this.tooltipIndex === 0) {
        return;
      }
      this.tooltipIndex = (this.tooltipIndex - 1 + this.tooltips.length) % this.tooltips.length;
      this.updateTooltip();
    });
  }

  
  updateTooltip() {
    const textElement = this.overlay.querySelector('.combined-element span');
    textElement.textContent = this.tooltips[this.tooltipIndex];
    
    const combinedElement = this.overlay.querySelector('.combined-element');

    if (this.tooltipIndex === 0) {
      combinedElement.style.left = 'calc(50% - 218px)';
      combinedElement.style.transform = 'none';
      combinedElement.style.top = '57px';
    } else if (this.tooltipIndex === 1) {
      combinedElement.style.left = 'calc(50% - 118px)';
      combinedElement.style.transform = 'none';
      combinedElement.style.top = '57px';
    } else if (this.tooltipIndex === 2) {
      combinedElement.style.left = 'calc(50% - 20px)';
      combinedElement.style.transform = 'none';
      combinedElement.style.top = '57px';
    } else if (this.tooltipIndex === 3) {
      combinedElement.style.left = 'calc(90% - 20px)';
      combinedElement.style.transform = 'rotate(35deg)';
      combinedElement.style.top = '70px';
      
      const closeOverlayCombinedElement = this.overlay.querySelector('.close-overlay-element');
      if (closeOverlayCombinedElement) {
        this.overlay.removeChild(closeOverlayCombinedElement);
      }
    } else {
      combinedElement.style.left = 'calc(50% - 218px)';
      combinedElement.style.transform = 'none';
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const tooltips = [
    'This is home page',
    'This is contact page',
    'This is About page',
    'Close Overlay',
  ];

  const tooltipOverlay = new TooltipOverlay('overlay', tooltips);
  const showButtonsButton = document.getElementById('showButtons');
  const closeOverlayButton = document.getElementById('closeOverlay');

  showButtonsButton.addEventListener('click', function () {
    if (tooltipOverlay.buttonsVisible) {
      tooltipOverlay.hide();
    } else {
      tooltipOverlay.show();
    }

    tooltipOverlay.buttonsVisible = !tooltipOverlay.buttonsVisible;
  });

  closeOverlayButton.addEventListener('click', function () {
    tooltipOverlay.hide();
  });
});
