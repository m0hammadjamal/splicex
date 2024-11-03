// JavaScript for dropdown functionality
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
      centeredSlides: false,
      breakpoints: {
          480: {
            slidesPerView: 1
        }
      },
      autoplay: {
        delay: 2000,
      },
      pagination: {                      
        el: '.swiper-pagination',
    },
  });

});






function handleOptionChange(radio) {
  var labels = document.querySelectorAll('.option-label');
  labels.forEach(function(label) {
      label.style.backgroundColor = 'white'; // Reset background color for all labels
      label.style.borderColor = 'rgba(0,0,0,0.1)'; // Reset border color for all labels
      label.style.color = '#333'; // Reset text color for all labels
  });
  if (radio.checked) {
      var label = radio.nextElementSibling; // Get the label associated with the selected radio button
      label.style.backgroundColor = 'white'; // Change background color for the selected label
      label.style.borderColor = 'white'; // Change border color for the selected label
      label.style.color = '#29B749'; // Change text color for the selected label
      document.getElementById('submit-btn').disabled = false; // Enable the submit button
  } else {
      document.getElementById('submit-btn').disabled = true; // Disable the submit button if no option is selected
  }
}
