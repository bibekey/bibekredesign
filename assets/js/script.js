/*!* Bibek Rajbanshi Landing page
=========================================================

* Copyright: 2023-2024 BibekRajbanshi (https://rajbanshibibek.com.np/)
* Licensed: (https://rajbanshibibek.com.np/licenses)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}


// SMOOTH SCROLL ----------------------------------START

$(document).ready(function() {
    // Add smooth scroll animation to all anchor links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  });
  
  //  SMOOTH SCROLL ====================END
  
  
  

// TABLE OF CONTENT*---------------------------------START
    // JavaScript function to toggle the table of contents
  function toggleTableOfContents() {
    var toc = document.getElementById("table-of-contents");
    var button = document.getElementById("toggle-button");
    
    if (toc.style.display === "none") {
      toc.style.display = "block"; // Show the table of contents
      button.textContent = "Table of Contents  [Hide]";
    } else {
      toc.style.display = "none"; // Hide the table of contents
      button.textContent = "Table of Contents  [Show]";
    }
  }
 // TABLE OF CONTENT*=================== END
 
  // SCROLL UPT*=================== START
  let timeout;
        const scrollButton = document.getElementById("scrollUp");

        window.addEventListener("scroll", () => {
            scrollButton.style.opacity = "1";
            scrollButton.style.visibility = "visible";

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                scrollButton.style.opacity = "0";
                scrollButton.style.visibility = "hidden";
            }, 2000); // Hides after 2 seconds of inactivity
        });

// SCROLL UPT*=================== START


// DROPDOWN NAVBAR =================== START

document.querySelectorAll('.nav-item').forEach((item) => {
  const dropdown = item.querySelector('.dropdown-content');

  if (dropdown) {
    item.addEventListener('mouseenter', () => {
      dropdown.classList.add('show');
    });

    item.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!dropdown.matches(':hover')) {
          dropdown.classList.remove('show');
        }
      }, 200);
    });
  }
});

// DROPDOWN NAVBAR =================== END




// Detects and starts counting only when the section enters the viewport*=================== START

function animateCounter(counter) {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const speed = target / 100; // Adjust speed

            const updateCounter = () => {
                if (count < target) {
                    count += speed;
                    counter.innerText = Math.ceil(count) + (target >= 1000 ? "+" : "+"); 
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target + (target >= 1000 ? "+" : "+");
                }
            };

            updateCounter();
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target); // Stops observing after animation
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll(".counter").forEach(counter => observer.observe(counter));
        
// Detects and starts counting only when the section enters the viewport*=================== END

// Progress Bar Animation =================== START
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let bar = entry.target;
                let targetValue = parseInt(bar.getAttribute("data-target")); // Get target percentage
                let currentWidth = 0;

                const increaseWidth = () => {
                    if (currentWidth <= targetValue) {
                        bar.style.width = currentWidth + "%";
                        currentWidth++;
                        setTimeout(increaseWidth, 15); // Adjust speed (lower = faster)
                    }
                };

                increaseWidth();
                observer.unobserve(bar); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll(".progress-bar").forEach(bar => observer.observe(bar));
});

// Progress Bar Animation =================== END



document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let element = entry.target;
                let currentPosition = 30; // Start position (30px down)
                let opacity = 0;

                const animateElement = () => {
                    if (currentPosition > 0) {
                        currentPosition -= 1; // Move up gradually
                        opacity += 0.03; // Gradually increase opacity
                        element.style.transform = `translateY(${currentPosition}px)`;
                        element.style.opacity = opacity;
                        setTimeout(animateElement, 15); // Adjust speed
                    } else {
                        element.style.transform = "translateY(0)";
                        element.style.opacity = "1";
                    }
                };

                animateElement();
                observer.unobserve(element); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 });

    // Select both paragraph and heading elements
    document.querySelectorAll(".text-muted, .card-title").forEach(el => observer.observe(el));
});


  document.getElementById("newsletter-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    let form = this;
    let formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        alert("Thank you for subscribing!"); // Show success message
        form.reset(); // Clear the form after submission
      } else {
        alert("Something went wrong. Please try again!");
      }
    }).catch(error => {
      alert("Error submitting form. Please try again later.");
    });
  });

// coverlettter start
        function validateAndGenerate() {
            let name = document.getElementById("applicantName").value.trim();
            let domain = document.getElementById("domainName").value.trim();
            let nameError = document.getElementById("nameError");
            let domainError = document.getElementById("domainError");
            nameError.textContent = "";
            domainError.textContent = "";

            if (!name) {
                nameError.textContent = "Please enter your full name.";
                return;
            }
            if (!domain) {
                domainError.textContent = "Please enter your domain name.";
                return;
            }

            generateCoverLetter(name, domain);
        }

        function generateCoverLetter(name, domain) {
            let today = new Date();
            let formattedDate = today.toLocaleDateString('en-GB', {
                day: '2-digit', month: 'long', year: 'numeric'
            });

            document.getElementById("letterDate").innerText = `Date: ${formattedDate}`;
            document.getElementById("letterSubject").innerText = `Application for ${domain} Domain Registration`;
            document.getElementById("letterDomain").innerText = domain;
            document.getElementById("letterDomain2").innerText = domain;
            document.getElementById("letterDomain3").innerText = domain;
            document.getElementById("letterName").innerText = name;
            document.getElementById("letterSignature").innerText = name;

            document.getElementById("coverLetter").style.display = "block";
            document.getElementById("downloadPDF").style.display = "inline-block";
            document.getElementById("downloadJPG").style.display = "inline-block";
        }

        function downloadPDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            let content = document.getElementById("coverLetter").innerText;
            doc.setFont("times", "normal");
            doc.setFontSize(12);
            doc.text(content, 10, 10, { maxWidth: 180 });
            doc.save("CoverLetter.pdf");
        }

        function downloadJPG() {
            let coverLetterDiv = document.getElementById("coverLetter");
            html2canvas(coverLetterDiv).then(canvas => {
                let imgData = canvas.toDataURL("image/jpeg", 0.8);
                let a = document.createElement("a");
                a.href = imgData;
                a.download = "Cover_Letter.jpg";
                a.click();
            });
        } // coverletter end


(function () {
    const allowedHost = "rajbanshibibek.com.np"; // Your official domain
    const countdownTime = 25; // Countdown in seconds
    let countdown = countdownTime;

    if (window.location.hostname !== allowedHost) {
        document.body.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center; flex-direction: column;">
                    <h2 style="color: red;">🚨 Uh-oh! Caught Red-Handed! In The Act, illegal Activities Detected! 🚔😂</h2>                    
                    <p style="color: black;">Hey there, Digital Pirate! 🏴‍☠️ </p>
                    <p style="color: black;">Nice Try, But This Content Is <strong>only</strong> for VIPs on The Official site Only!😜</p>
                    <p style="color: black;">Don't worry, we won't call the internet police... <em>this time.</em> 👀</p>
                    <p style="color: black;">But seriously, You’ll Be Redirected Soon, So don’t Panic! <span id="countdown">${countdown}</span> seconds.</p>
                    <img src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif" alt="Warning GIF" width="300">

            </div>
        `;
        
        const countdownInterval = setInterval(() => {
            countdown--;
            document.getElementById("countdown").textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                window.location.href = "https://" + allowedHost;
            }
        }, 1000); // Update countdown every second
    }