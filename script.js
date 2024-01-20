alert("NOTE: Website is optimized for desktop only !\nWill be available for other devices soon . . .");
  window.onload = function() {

var blur = document.getElementById('blur');
blur.classList.toggle('active')

var popup = document.getElementById('popup');
popup.classList.toggle('active')


};

function toggle()
{
var blur = document.getElementById('blur');
blur.classList.toggle('active') 
var popup = document.getElementById('popup');
popup.classList.toggle('active') 
}


function scrollToSocialMedia() {
        const socialMediaSection = document.querySelector(".social_media");
        if (socialMediaSection) {
            const offset = -70; 
            const socialMediaSectionTop = socialMediaSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: socialMediaSectionTop + offset,
                behavior: "smooth"
            });
        }
    }


function scrollToEducationBox() {
            const educationBox = document.querySelector(".education_box");
            if (educationBox) {
                const offset = -103; 
                const educationBoxTop = educationBox.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: educationBoxTop + offset,
                    behavior: "smooth"
                });
            }
        }

        
        const qualificationsLink = document.getElementById("qualificationsLink");
        qualificationsLink.addEventListener("click", scrollToEducationBox);

        function scrollToTop() {
            window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
        }

        function scrollToBottom() {
    const footer = document.querySelector("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToSection() {
    const aboutMeSectionDiv = document.querySelector(".about_me_section");
    if (aboutMeSectionDiv) {
        const offset = -150; 
        const sectionTop = aboutMeSectionDiv.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: sectionTop + offset,
            behavior: "smooth"
        });
    }
}



const contactMeLink = document.querySelector(".navbar_links4");
contactMeLink.addEventListener("click", function () {
    scrollToSection('social_media');
});


const aboutLink = document.querySelector(".navbar_links");
aboutLink.addEventListener("click", function() {
    scrollToSection('about_me_section');
});



  function fadeOutEffect(destination) {
    document.body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = destination;
    }, 500);
  }
