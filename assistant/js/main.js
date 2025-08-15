// إنشاء جسيمات خلفية خيالية
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // أحجام عشوائية
                const size = Math.random() * 5 + 1;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // ألوان عشوائية
                const colors = ['#00f0ff', '#ff2d75', '#ffffff'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                particle.style.backgroundColor = color;
                
                // مواقع عشوائية
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                
                // مدة عشوائية للأنيميشن
                const duration = Math.random() * 20 + 10;
                particle.style.animationDuration = `${duration}s`;
                
                // تأخير عشوائي
                const delay = Math.random() * 10;
                particle.style.animationDelay = `${delay}s`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // تأثير الكتابة الآلية
        function typeEffect() {
            const texts = ["HTML5", "CSS3", "JavaScript","PHP","MySql","React", "واجهات تفاعلية", "أداء فائق", "تجربة مستخدم", "تصميم متجاوب", "تطوير ويب حديث"];
            const typingElement = document.getElementById('typing-text');
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingSpeed = 100;
            
            function type() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typingElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    typingSpeed = 50;
                } else {
                    typingElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                    typingSpeed = 100;
                }
                
                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    typingSpeed = 1500; // انتظر في النهاية
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typingSpeed = 500; // انتظر قبل البدء بالنص الجديد
                }
                
                setTimeout(type, typingSpeed);
            }
            
            setTimeout(type, 1000);
        }
        
        // كشف العناصر عند التمرير
        function setupScrollAnimations() {
            const animateElements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            });
            
            animateElements.forEach(element => {
                observer.observe(element);
            });
        }
        
        // تأثيرات الحركة عند التمرير
        function setupHoverEffects() {
            // تأثيرات الروابط
            const links = document.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // تأثيرات الأزرار
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // تأثيرات البطاقات
            const cards = document.querySelectorAll('.skill-card, .project-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.03)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
            
            // تأثيرات الصورة الرئيسية
            const heroImage = document.querySelector('.hero-image-container');
            if (heroImage) {
                document.addEventListener('mousemove', (e) => {
                    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                    heroImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
                });
                
                // Reset animation when mouse leaves
                const heroSection = document.querySelector('.hero');
                heroSection.addEventListener('mouseleave', () => {
                    heroImage.style.transform = 'rotateY(0) rotateX(0)';
                });
            }
        }
        
        // تهيئة كل شيء عند تحميل الصفحة
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            typeEffect();
            setupScrollAnimations();
            setupHoverEffects();
        });