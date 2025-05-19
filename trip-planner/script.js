document.addEventListener('DOMContentLoaded', function() {
    // Get Started button animation
    const getStartedBtn = document.querySelector('.get-started-btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'translateX(5px)';
        });
        
        getStartedBtn.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'translateX(0)';
        });
        
        getStartedBtn.addEventListener('click', function() {
            // Navigate to trip-planner-ai
            window.location.href = "https://www.buildai.space/app/trip-planner-ai";
        });
    }

    // Logo animation
    const logoIcon = document.querySelector('.logo-icon');
    if (logoIcon) {
        logoIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(20deg)';
        });
        
        logoIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    }
});