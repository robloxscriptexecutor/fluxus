// JavaScript for smooth scrolling when navigating via Table of Contents links
document.addEventListener('DOMContentLoaded', function () {
    // Get all anchor links from the table of contents
    const tocLinks = document.querySelectorAll('.toc-section ul li a');

    
    // Add smooth scroll effect
    tocLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute('href').substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            // Smoothly scroll to the target section
            window.scrollTo({
                top: targetSection.offsetTop - 20, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });
});
