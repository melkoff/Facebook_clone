let settingsMenu = document.querySelector('.settings-menu');
function settingsMenuToggle() {
   settingsMenu.classList.toggle('settings-active');
}

let darkBtn = document.getElementById('dark-theme');
darkBtn.onclick = function () {
   darkBtn.classList.toggle('dark-btn');
   document.body.classList.toggle('dark-theme');

   if (localStorage.getItem('theme') == 'light') {
      localStorage.setItem('theme', 'dark');
   }
   else {
      localStorage.setItem('theme', 'light');
   }

}

if (localStorage.getItem('theme') == 'light') {
   darkBtn.classList.remove('dark-btn');
   document.body.classList.remove('dark-theme');
}
else if (localStorage.getItem('theme') == 'dark') {
   darkBtn.classList.add('dark-btn');
   document.body.classList.add('dark-theme');
}
else {
   localStorage.setItem('theme', 'light');
}

