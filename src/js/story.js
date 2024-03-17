document.addEventListener('DOMContentLoaded', function () {
   const storyGallery = document.querySelector('.story-gallery');
   let isDragging = false;
   let startX = null;
   let scrollLeft = 0;

   function handleStart(e) {
      isDragging = true;
      startX = e.type === 'touchstart' ? e.touches[0].pageX - storyGallery.offsetLeft : e.pageX - storyGallery.offsetLeft;
      scrollLeft = storyGallery.scrollLeft;
   }

   function handleMove(e) {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.type === 'touchmove' ? e.touches[0].pageX - storyGallery.offsetLeft : e.pageX - storyGallery.offsetLeft;
      const walk = (x - startX) * 3; // Збільшуємо швидкість прокрутки
      storyGallery.scrollTo({
         left: scrollLeft - walk,
         behavior: 'smooth' // Додаємо плавність
      });
   }

   function handleEnd() {
      isDragging = false;
   }

   storyGallery.addEventListener('mousedown', handleStart);
   storyGallery.addEventListener('mousemove', handleMove);
   storyGallery.addEventListener('mouseup', handleEnd);

   storyGallery.addEventListener('touchstart', handleStart);
   storyGallery.addEventListener('touchmove', handleMove);
   storyGallery.addEventListener('touchend', handleEnd);
});

