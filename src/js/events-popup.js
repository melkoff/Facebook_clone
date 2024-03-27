document.getElementById("showAllEventsPopup").addEventListener("click", function () {

   document.querySelector(".events-popup").classList.add("active-events");
   console.log("show events popup");
})

document.getElementById("closeAllEventsPopup").addEventListener("click", function () {
   document.querySelector(".events-popup").classList.remove("active-events");
})

const closeSingleEvent = document.querySelectorAll(".del-event");
const getSingleEvent = document.querySelectorAll(".my-event");

for (let i = 0; i < closeSingleEvent.length; i++) {

   closeSingleEvent[i].onclick = function () {
      let getSingleEvent = this.parentElement;
      getSingleEvent.style.display = "none";

   }
}