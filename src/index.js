import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.ugly-tooltip'));

tooltip.init();

//create a dropdown
const drops = document.querySelectorAll('.ugly-dropdown');
drops.forEach(drop => {
    const dropdown = new Dropdown(drop);
    dropdown.init();
});
