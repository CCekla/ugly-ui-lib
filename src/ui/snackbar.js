import './styles/snackbar.css'

class Snackbar {
    constructor() {
        this.snackbar = document.createElement('div');
    }
    init() {
        this.snackbar.classList.add('ugly-snackbar');
        document.querySelector('body').appendChild(this.snackbar);
    }
    show(mess) {
        this.snackbar.innerHTML = mess;
        this.snackbar.classList.add('show');
        //show the bar only for 4 seconds
        setTimeout(() => {
            this.snackbar.classList.remove('show');
        }, 4000);
    }
}

export { Snackbar as default }