        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
        for (let link of mobileMenuLinks) {
            link.addEventListener('click', () => {
                 mobileMenu.classList.add('hidden');
            });
        }

        // Swiper Slider Initialization
        const sliders = document.querySelectorAll('.project-slider');
        sliders.forEach(slider => {
            new Swiper(slider, {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 20,
                // Responsive breakpoints
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                },
                pagination: {
                    el: slider.querySelector('.swiper-pagination'),
                    clickable: true,
                },
                navigation: {
                    nextEl: slider.querySelector('.swiper-button-next'),
                    prevEl: slider.querySelector('.swiper-button-prev'),
                },
            });
        });

        // Image Modal Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            const closeModal = document.getElementById('closeModal');
            
            // Add click event to all slider images
            const sliderImages = document.querySelectorAll('.project-slider .swiper-slide img');
            
            sliderImages.forEach(img => {
                img.addEventListener('click', function() {
                    // Set modal image source and alt text
                    modalImage.src = this.src;
                    modalImage.alt = this.alt;
                    
                    // Show modal
                    modal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                });
            });
            
            // Close modal functions
            closeModal.addEventListener('click', closeModalFunction);
            
            // Close when clicking outside the image
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModalFunction();
                }
            });
            
            // Close with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                    closeModalFunction();
                }
            });
            
            function closeModalFunction() {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
