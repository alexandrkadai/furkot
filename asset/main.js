const x = document.querySelector('#icon-menu__container');
const y = document.querySelector('#navig');

let isOpen = false;

x.addEventListener('click', () => {
  if (!isOpen) {
    x.classList.add('open');
    y.style.left = '0';
    isOpen = true;
  } else {
    x.classList.remove('open');
    y.style.left = '-100%';
    isOpen = false;
  }
});
