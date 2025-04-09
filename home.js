document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded!"); // Debugging to check if the script is running

  // =======================
  // Guest Input Handling
  // =======================
  const guestInput = document.querySelector(".search-field input[type='number']");
  const placeholderText = "Select Guests";

  if (guestInput) {
      guestInput.value = ""; // Start empty
      guestInput.setAttribute("placeholder", placeholderText);

      guestInput.addEventListener("focus", () => {
          if (guestInput.value.trim() === "") {
              guestInput.value = 0;
              guestInput.removeAttribute("placeholder");
          }
      });

      guestInput.addEventListener("input", () => {
          let value = parseInt(guestInput.value);
          if (isNaN(value) || value < 0) {
              guestInput.value = 0;
          }
      });

      guestInput.addEventListener("keydown", (event) => {
          if (!/[0-9]/.test(event.key) && event.key !== "Backspace" && event.key !== "ArrowUp" && event.key !== "ArrowDown") {
              event.preventDefault();
          }
      });

      guestInput.addEventListener("input", () => {
          if (guestInput.value.trim() === "") {
              guestInput.setAttribute("placeholder", placeholderText);
          }
      });

      guestInput.addEventListener("keyup", (event) => {
          if (event.key === "Backspace" && guestInput.value.trim() === "") {
              guestInput.value = "";
              guestInput.setAttribute("placeholder", placeholderText);
          }
      });

      guestInput.addEventListener("blur", () => {
          if (guestInput.value.trim() === "" || guestInput.value === "0") {
              guestInput.value = "";
              guestInput.setAttribute("placeholder", placeholderText);
          }
      });
  }

  // =======================
  // Pill Selection Handling
  // =======================
  const pillSpans = document.querySelectorAll(".pill-container span");

  if (pillSpans.length > 0) {
      pillSpans.forEach(span => {
          span.style.position = "relative";
          span.style.paddingBottom = "5px";

          // Hover effect
          span.addEventListener("mouseover", () => {
              span.style.color = "#007bff"; // Change color on hover
          });

          span.addEventListener("mouseout", () => {
              if (!span.classList.contains("selected")) {
                  span.style.color = "#ACABAC"; // Revert if not selected
              }
          });

          // Click effect - Selecting a pill
          span.addEventListener("click", () => {
              pillSpans.forEach(s => {
                  s.classList.remove("selected");
                  s.style.color = "#ACABAC"; // Reset color
                  let underline = s.querySelector(".underline");
                  if (underline) underline.remove(); // Remove previous underline
              });

              span.classList.add("selected");
              span.style.color = "#007bff"; // Keep selected color

              // Create and add underline
              let underline = document.createElement("div");
              underline.classList.add("underline");
              underline.style.position = "absolute";
              underline.style.bottom = "-3px";
              underline.style.left = "50%";
              underline.style.width = "50%";
              underline.style.height = "2px";
              underline.style.backgroundColor = "#007bff";
              underline.style.transform = "translateX(-50%)";
              underline.style.transition = "all 0.3s ease";

              span.appendChild(underline);
          });
      });
  } else {
      console.error("No .pill-container span elements found.");
  }

  // =======================
  // Hover & Click Effects for .event-box and .dining-box
  // =======================
  const eventBoxes = document.querySelectorAll(".event-box");
  const diningBoxes = document.querySelectorAll(".dining-box");

  if (eventBoxes.length === 0 || diningBoxes.length === 0) {
      console.error("Elements not found! Check class names.");
  } else {
      function addHoverEffect(boxes) {
          boxes.forEach(box => {
              box.addEventListener("mouseover", function () {
                  this.style.transform = "scale(1.05)";
                  this.style.transition = "transform 0.3s ease-in-out";
              });

              box.addEventListener("mouseleave", function () {
                  this.style.transform = "scale(1)";
              });

              box.addEventListener("click", function () {
                  alert("You clicked: " + this.querySelector(".event-text, .dining-text")?.textContent);
              });
          });
      }

      addHoverEffect(eventBoxes);
      addHoverEffect(diningBoxes);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const venueBoxes = document.querySelectorAll(".venue-box");

  if (venueBoxes.length === 0) {
      console.error("Elements not found! Check class names.");
  } else {
      venueBoxes.forEach(box => {
          box.addEventListener("mouseover", function () {
              this.style.transform = "scale(1.08)";
              this.style.transition = "transform 0.3s ease-in-out";
          });

          box.addEventListener("mouseleave", function () {
              this.style.transform = "scale(1)";
          });

          box.addEventListener("click", function () {
              alert("You clicked: " + this.querySelector(".venue-text")?.textContent);
          });
      });
  }
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".blog-image");

    images.forEach(image => {
        image.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        image.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});


function toggleMenu() {
    var menu = document.getElementById("navMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}




