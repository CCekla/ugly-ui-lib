import './styles/tabs.css';

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.ugly-trigger');
    }
    init() {
        this.tabs.forEach(tab => { 
            tab.addEventListener('click', event => {
                this.toggleTabs(event);
                this.toggleContent(event);
        });});
    }
    toggleTabs(event) {
        //remove selected class
        this.tabs.forEach(tab => tab.classList.remove('selected'));
        //add selected class to the clicked tab
        event.target.classList.add('selected');
    }
    toggleContent(event) {
        //remove open class to contents
        this.container.querySelectorAll('.ugly-content').forEach(content => {
            content.classList.remove('open');
        });
        //add open class to the selected tab content
        const tabId = event.target.getAttribute('data-target');
        document.getElementById(tabId).classList.add('open');
    }
}

export { Tabs as default };