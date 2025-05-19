document.addEventListener('DOMContentLoaded', function() {
    // Mock user data
    const mockUsers = [
        {
            email: 'test@example.com',
            password: 'password123',
            firstName: 'Test',
            lastName: 'User'
        },
        {
            email: 'john@example.com',
            password: 'john123',
            firstName: 'John',
            lastName: 'Doe'
        },
        {
            email: 'bharat152004@gmail.com',
            password: 'bharat123',
            firstName: 'Bharat',
            lastName: 'Doshi'
        }
    ];

    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const messageElement = document.getElementById('loginMessage');
            
            // Clear previous messages
            messageElement.textContent = '';
            messageElement.classList.remove('error', 'success');
            
            // Simulate API call delay
            setTimeout(() => {
                const user = mockUsers.find(user => user.email === email && user.password === password);
                
                if (user) {
                    // Store user data in localStorage (real apps would use more secure methods)
                    localStorage.setItem('currentUser', JSON.stringify({
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        isLoggedIn: true
                    }));
                    
                    messageElement.textContent = 'Login successful! Redirecting...';
                    messageElement.classList.add('success');
                    
                    // Redirect after a short delay
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                } else {
                    messageElement.textContent = 'Invalid email or password. Try again.';
                    messageElement.classList.add('error');
                }
            }, 1000);
        });
    }

    // Signup form handling
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const messageElement = document.getElementById('signupMessage');
            
            // Clear previous messages
            messageElement.textContent = '';
            messageElement.classList.remove('error', 'success');
            
            // Basic validation
            if (password !== confirmPassword) {
                messageElement.textContent = 'Passwords do not match';
                messageElement.classList.add('error');
                return;
            }
            
            // Check if email already exists
            if (mockUsers.some(user => user.email === email)) {
                messageElement.textContent = 'Email already registered';
                messageElement.classList.add('error');
                return;
            }
            
            // Simulate API call delay
            setTimeout(() => {
                // Add new user to mockUsers (in a real app, this would be a server-side operation)
                // Note: This addition is temporary and will reset when the page is refreshed
                mockUsers.push({
                    email,
                    password,
                    firstName,
                    lastName
                });
                
                // Store user data in localStorage
                localStorage.setItem('currentUser', JSON.stringify({
                    email,
                    firstName,
                    lastName,
                    isLoggedIn: true
                }));
                
                messageElement.textContent = 'Account created successfully! Redirecting...';
                messageElement.classList.add('success');
                
                // Redirect after a short delay
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            }, 1000);
        });
    }

    // Check authentication status on page load
    function checkAuth() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const authLinks = document.querySelector('.auth-links');
        
        if (currentUser && currentUser.isLoggedIn) {
            // User is logged in
            if (authLinks) {
                authLinks.innerHTML = `
                    <div class="user-profile">
                        <span>Welcome, ${currentUser.firstName}</span>
                        <button id="logoutBtn" class="logout-btn">Logout</button>
                    </div>
                `;
                
                // Add logout functionality
                document.getElementById('logoutBtn').addEventListener('click', function() {
                    localStorage.removeItem('currentUser');
                    window.location.reload();
                });
            }