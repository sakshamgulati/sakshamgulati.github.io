document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Allow normal behavior for non-scrolling links
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            // Close mobile menu on link click
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Hero section code typing animation
    const codeBlock = document.getElementById('code-block');
    if (codeBlock) {
        const lines = [
            '{',
            '  <span class="text-green-400">"name"</span>: <span class="text-orange-400">"saksham gulati"</span>,',
            '  <span class="text-green-400">"occupation"</span>: <span class="text-orange-400">"data scientist"</span>,',
            '  <span class="text-green-400">"likes"</span>: [<span class="text-orange-400">"snowboarding"</span>, <span class="text-orange-400">"tacos"</span>],',
            '}'
        ];

        let lineIndex = 0;

        function typeCode() {
            if (lineIndex < lines.length) {
                const currentLine = lines[lineIndex];
                const lineElement = document.createElement('div');
                lineElement.className = 'code-line';
                lineElement.innerHTML = currentLine;
                codeBlock.appendChild(lineElement);
                
                const spans = lineElement.querySelectorAll('span');
                spans.forEach((span, i) => {
                    span.style.animationDelay = `${i * 0.1}s`;
                });

                lineIndex++;
                setTimeout(typeCode, 200);
            }
        }
        
        // Start the animation
        setTimeout(typeCode, 500);
    }
});
