document.addEventListener('DOMContentLoaded', function() {
    // Toggle icon navbar
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    // Smooth scroll function
    function scrollToSection(id) {
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Scroll to projects section on page load if URL has hash
    if (window.location.hash && window.location.hash === '#projects') {
        scrollToSection('projects');
    }

    // Scroll to projects section on navbar Projects link click
    let projectsLink = document.querySelector('header nav a[href="#projects"]');
    if (projectsLink) {
        projectsLink.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('projects');

            // Close the navbar menu after clicking on the link
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    }

    // Scroll sections on window scroll
    let sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                // Active navbar links
                let navLinks = document.querySelectorAll('header nav a');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
                // Active sections for animation on scroll
                sec.classList.add('show-animate');
            } else {
                sec.classList.remove('show-animate');
            }
        });

        // Sticky navbar
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Animation footer on scroll
        let footer = document.querySelector('footer');
        footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    });
});
