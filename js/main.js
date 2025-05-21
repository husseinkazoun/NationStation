// Main JavaScript functionality for the Food Security Assessment Dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Update active nav item
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Handle download links (for demo purposes)
    document.querySelectorAll('a[download]').forEach(link => {
        link.addEventListener('click', function(e) {
            // In a real implementation, these would be actual files
            // For demo purposes, we'll show a message
            const fileName = this.getAttribute('href').split('/').pop();
            if (!this.href.includes('images/')) {
                e.preventDefault();
                alert(`In a production environment, this would download: ${fileName}\n\nFor this demo, only image downloads are enabled.`);
            }
        });
    });
    
    // Responsive adjustments
    function handleResponsiveAdjustments() {
        const width = window.innerWidth;
        
        // Adjust chart heights based on screen size
        const chartContainers = document.querySelectorAll('.chart-container');
        chartContainers.forEach(container => {
            if (width < 768) {
                container.style.height = '250px';
            } else {
                container.style.height = '300px';
            }
        });
        
        // Adjust card layouts
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (width < 768) {
                card.classList.add('mb-3');
            } else {
                card.classList.remove('mb-3');
            }
        });
    }
    
    // Initial call and event listener for resize
    handleResponsiveAdjustments();
    window.addEventListener('resize', handleResponsiveAdjustments);
    
    // Create a simulated admin panel toggle (for demo purposes)
    if (isAdmin()) {
        const adminButton = document.createElement('button');
        adminButton.className = 'btn btn-danger btn-sm ms-2';
        adminButton.textContent = 'Admin Panel';
        adminButton.addEventListener('click', function() {
            alert('Admin Panel would allow you to:\n\n1. Add new users by email\n2. Manage access permissions\n3. Update dashboard content\n\nThis is a simulated feature for demonstration purposes.');
        });
        
        document.querySelector('.ms-auto').appendChild(adminButton);
    }
});
