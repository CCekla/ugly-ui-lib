import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';
import Tabs from './ui/tabs';
import Snackbar from './ui/snackbar';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.ugly-tooltip'));
tooltip.init();

//create a dropdown
const drops = document.querySelectorAll('.ugly-dropdown');
drops.forEach(drop => {
    const dropdown = new Dropdown(drop);
    dropdown.init();
});

//create tabs
const tabs = new Tabs(document.querySelector('.ugly-tabs'));
tabs.init();

//create a snackbar
const snackbar = new Snackbar();
snackbar.init();

//add event listener to the snackbar button
const btn = document.querySelector('.ugly-snack-trigger');
btn.addEventListener('click', () => {
    snackbar.show('&#127850; &#127850; &#127850;');
});
