const showMenu = () => {
  let x = document.getElementById('navig');
  if (x.style.left === '-100%') {
    x.style.left = '0';
  } else {
    x.style.left = '-100%';
  }
};

document.getElementById('icon-menu__container').addEventListener('click', showMenu);
