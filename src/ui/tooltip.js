import './styles/tooltip.css'

class Tooltip {
    constructor(el) {
        this.element = el;
        this.message = el.getAttribute('data-msg');
    }
    init() {
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);

        //I will control the visibility through the :hover
    }
}

export { Tooltip as default }