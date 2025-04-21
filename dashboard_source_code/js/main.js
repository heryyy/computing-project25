document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on mobile
    const toggleSidebarBtn = document.querySelector('.toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (toggleSidebarBtn && sidebar && mainContent) {
        toggleSidebarBtn.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            
            // Adjust main content margin when sidebar is toggled
            if (sidebar.classList.contains('active')) {
                mainContent.style.marginLeft = '0';
            } else {
                mainContent.style.marginLeft = '0';
            }
        });
    }
    
    // Handle notification bell click
    const notificationBell = document.querySelector('.notification-bell');
    if (notificationBell) {
        notificationBell.addEventListener('click', function() {
            alert('Notifications feature will be implemented in a future update.');
        });
    }
    
    // Handle user profile click
    const userProfile = document.querySelector('.user-profile');
    if (userProfile) {
        userProfile.addEventListener('click', function() {
            alert('User profile settings will be implemented in a future update.');
        });
    }
    
    // Handle alert acknowledgment
    const acknowledgeButtons = document.querySelectorAll('.acknowledge-alert');
    if (acknowledgeButtons.length) {
        acknowledgeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const alertId = this.dataset.alertId;
                const alertItem = this.closest('.alert-item');
                
                if (alertItem) {
                    alertItem.classList.add('acknowledged');
                    this.disabled = true;
                    
                    // In a real application, you would send this to a server
                    console.log(`Alert ${alertId} acknowledged`);
                }
            });
        });
    }
    
    // Redirect to login page if accessed directly
    // This is a simple check - in a real application, you would use proper authentication
    const isLoginPage = window.location.href.includes('/login/');
    const isIndexPage = window.location.pathname === '/' || 
                        window.location.pathname === '/index.html' ||
                        window.location.href.endsWith('/surveillance-dashboard/');
    
    if (!isLoginPage && isIndexPage) {
        // Redirect to login page
        window.location.href = 'pages/login/index.html';
    }
});
