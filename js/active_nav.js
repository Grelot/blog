document.addEventListener("DOMContentLoaded", function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    const url = new URL(link.href, window.location.origin);
    const linkPath = url.pathname;

    if (linkPath === "/") {
      // Exact match for home page
      if (currentPath === "/") {
        link.classList.add('active');
      }
    } else {
      // For other links, check if currentPath starts with linkPath
      if (currentPath.startsWith(linkPath)) {
        link.classList.add('active');
      }
    }
  });
});
