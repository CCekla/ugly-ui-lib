import './styles/dropdown.css';

class Dropdown {
    constructor(container) {
        this.container = container;
        this.trigger = container.querySelector('.ugly-trigger');
        this.content = container.querySelector('.ugly-content');
    }
    init() {
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('open');
        });
    }
}

export { Dropdown as default };