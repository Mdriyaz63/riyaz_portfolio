 // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Contact Form Validation (Basic)
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent! (This is a demo; integrate with a backend like EmailJS for real functionality.)');
        });