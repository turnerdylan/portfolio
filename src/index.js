import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Sticky header
window.addEventListener('scroll', function(){
  var header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 0);
});


// var myModal = document.getElementById("myModal");
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
// myInput.focus()
// })



// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
// modal.style.display = "block";
// modalImg.src = this.src;
// captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
// modal.style.display = "none";
// }

// $(document).ready(function() {
//   $('#bt1').click(function() {
//       $('#fr1').attr('action',
//                      'mailto:test@test.com?subject=' +
//                      $('#tb1').val() + '&body=' + $('#tb2').val());
//       $('#fr1').submit();
//   });
// });


