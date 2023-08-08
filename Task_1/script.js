/*script.js*/
document.addEventListener("DOMContentLoaded", function () {
  const surveyForm = document.getElementById("surveyForm");
  const talkToUsButton = document.getElementById("talkToUs");
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const thankYouMessage = document.getElementById("thankYouMessage");

  talkToUsButton.addEventListener("click", function () {
    if (surveyForm.checkValidity()) {
      const countryCode = document.getElementById("countryCode").value;
      const email = encodeURIComponent(document.getElementById("email").value);
      const mobile = encodeURIComponent(
        document.getElementById("mobile").value
      );
      
      window.location.href = `${
        window.location.href.split("/")[0]
      }/Task_1/page2.html?email=${email}&mobile=${mobile}`;

      thankYouMessage.classList.remove("hidden");
      page1.classList.add("hidden");
      page2.classList.remove("hidden");
    } else {
      // Handle form validation errors here
      const emailInput = document.getElementById("email");
      const mobileInput = document.getElementById("mobile");

      if (!emailInput.checkValidity()) {
        // Display custom error message for email
        alert("Please enter a valid email address.");
      }

      if (!mobileInput.checkValidity()) {
        // Display custom error message for mobile
        alert("Please enter a valid 10-digit mobile number.");
      }
    }
  });
});
