const showMenu = () => {
  let x = document.getElementById('navig');
  let y = document.getElementById('icon-menu');
  let yAfter = window.getComputedStyle(y, "::after");
  let yBefore = window.getComputedStyle(y, "::before");
  if (x.style.left === '-100%') {
    x.style.left = '0';
    y.style.display = 'none';
    yAfter.style.translate = 
  } else {
    x.style.left = '-100%';
  }
};

document.getElementById('icon-menu__container').addEventListener('click', showMenu);
