// Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Virtual tour modal
        const tourBtn = document.getElementById('virtual-tour-btn');
        const modal = document.getElementById('virtual-tour-modal');
        const closeModal = document.getElementById('close-modal');

        tourBtn.addEventListener('click', function() {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });

        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Gallery image interaction
        document.querySelectorAll('.gallery-image').forEach(image => {
            image.addEventListener('click', function() {
                // In a real implementation, this would open a lightbox with the full image
                alert('Opening full view of this image');
            });
        });
