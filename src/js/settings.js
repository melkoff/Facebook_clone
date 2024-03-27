// Get settings menu
let settingsMenu = document.querySelector('.settings-menu');
// Set class to settings menu
function settingsMenuToggle() {
   settingsMenu.classList.toggle('settings-active');
}

// Get dark theme btn
let darkBtn = document.getElementById('dark-theme');
// Call dark theme function
darkBtn.onclick = function () {
   darkBtn.classList.toggle('dark-btn');
   // Set class to body
   document.body.classList.toggle('dark-theme');

   // Save theme in local storage
   if (localStorage.getItem('theme') == 'light') {
      localStorage.setItem('theme', 'dark');
   }
   else {
      localStorage.setItem('theme', 'light');
   }

}

// Change theme according to local storage
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

