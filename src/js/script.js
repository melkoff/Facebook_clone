
// hide advertisement
let closeAdvertisement = document.getElementById('closeAdvertisement');
let hideAdvertisement = document.getElementsByClassName('sidebar-advertisement');

closeAdvertisement.addEventListener('click', () => {
   hideAdvertisement[0].style.display = 'none';
})

// hide and show chat
let hideBtn = document.getElementById('hideChat');
let hideChat = document.getElementsByClassName('online-list');

hideBtn.addEventListener('click', () => {

   for (let i = 0; i < hideChat.length; i++) {
      if (hideChat[i].style.display === 'none') {
         hideChat[i].style.display = 'flex';
         hideBtn.innerHTML = 'Сховати чат';

      }
      else {
         hideChat[i].style.display = 'none';
         hideBtn.innerHTML = 'Показати чат';

      }
   }

});
