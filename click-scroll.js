document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var homeLink = document.querySelector('.navbar-nav .nav-link[href="#section_1"]');
    var collectionLink = document.querySelector('.navbar-nav .nav-link[href="collection.html"]');

    function setActiveLink(link) {
        navLinks.forEach(function(navLink) {
            navLink.classList.remove('active');
        });
        link.classList.add('active');
    }

    // Handle page load state
    if (window.location.pathname.endsWith("collection.html")) {
        setActiveLink(collectionLink);
    } else if (window.scrollY === 0) {
        setActiveLink(homeLink);
    }

    // Handle scroll event for sections
    document.addEventListener('scroll', function() {
        var sections = document.querySelectorAll('section');
        var docScroll = window.scrollY;

        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect();
            var offsetSection = rect.top + window.scrollY - 100; // Adjust as needed

            if (docScroll >= offsetSection && docScroll < offsetSection + section.offsetHeight) {
                var activeLink = document.querySelector('.navbar-nav .nav-link[href="#' + section.id + '"]');
                if (activeLink) {
                    setActiveLink(activeLink);
                }
            }
        });

        // Handle home link separately
        if (window.scrollY === 0) {
            setActiveLink(homeLink);
        }
    });

    // Handle click event
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            setActiveLink(link);
        });
    });
});
