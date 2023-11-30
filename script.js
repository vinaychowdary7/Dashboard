
function toggleSubmenu(submenu) {
  submenu.classList.toggle('active');
}

function openModal() {
  document.getElementById("closeAccountModal").style.display = "block";
}

function closeModal() {
  document.getElementById("closeAccountModal").style.display = "none";
}

function submitCloseAccount() {
  // Add logic to handle form submission (send data to server, etc.)
  var form = document.getElementById("closeAccountForm");

  // Loop through each form element and set its value to an empty string
  var elements = form.elements;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].type !== "submit") {
      elements[i].value = "";
    }
  }

  // Optionally, reset the form to clear any validation or other form-related states
  form.reset();
  alert("Close Account Form Submitted!");
  closeModal();

}
function showContent(contentId, link) {
  console.log("in func");
  var list = document.querySelectorAll('.navbar a')
  var disp = document.querySelectorAll(".disp-content");
  list.forEach(function (list) {
    list.classList.remove("active");
  });
  link.classList.add('active');
  disp.forEach(function (disp) {
    disp.style.display = "none";
  });
  document.querySelector('#' + contentId).style.display = 'block';
}

function setStatus(lk) {
  console.log(document.querySelectorAll('.status').length);
  document.querySelectorAll('.status').forEach(function (item) {
    item.style.borderColor = "rgb(228,228,228)";
    item.style.color = "rgb(228,228,228)";
  })
  lk.style.borderColor = "rgb(107,125,207)";
  lk.style.color = "rgb(107,125,207)";
}

function changeTable(tab_id, tab) {
  var list = document.querySelectorAll(".main .table");
  list.forEach(function (table) {
    table.style.display = "none";
  })
  document.querySelector("#" + tab_id).style.display = "block";
  setStatus(tab);
}

function showNav() {
  document.querySelector('.nav-width').style.display = "block";
}

function closeNav() {
  document.querySelector('.nav-width').style.display = "none";
}

function checkMediaQuery() {
  var isLargeScreen = window.matchMedia('(min-width: 800px)').matches;

  // Select the elements by class name
  var mainElement = document.querySelector('.main');
  var navElement = document.querySelector('nav');

  // Toggle the classes based on the screen width
  mainElement.classList.toggle('main-media', !isLargeScreen);
  navElement.classList.toggle('nav-width', !isLargeScreen);

  if (isLargeScreen) {
    if (navElement.style.display == "none") {
      navElement.style.display = "block";
    }
  }

}

// Add a resize event listener to check the media query on window resize
window.onresize = checkMediaQuery;

// Check the media query on page load
checkMediaQuery();


document.querySelector('#closeAccountForm').addEventListener('input', function () {
  var formIsValid = document.querySelector('#closeAccountForm').checkValidity();
  document.querySelector('#form-but').disabled = !formIsValid;
});
// code is completed.