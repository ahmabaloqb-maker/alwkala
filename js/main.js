/**
 * ========================================
 * مجموعة الوكالة للهواتف الذكية
 * تصميم وتطوير: م/ أحمد العقاب
 * ========================================
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        initializeApp();
    });

    function initializeApp() {
        showWelcomeMessage();
        setupButtonEffects();
    }

    function showWelcomeMessage() {
        console.log('%c📱 مجموعة الوكالة للهواتف الذكية', 'color: #E63232; font-size: 14px; font-weight: bold;');
        console.log('%c🎨 تصميم وتطوير: م/ أحمد العقاب', 'color: #FFFFFF; font-size: 12px;');
    }

    function setupButtonEffects() {
        const buttons = document.querySelectorAll('.social-btn');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                const buttonType = getButtonType(this);
                console.log(`📊 تم النقر على: ${buttonType}`);
            });
            
            btn.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.97)';
            });
            
            btn.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }

    function getButtonType(button) {
        if (button.classList.contains('whatsapp')) return 'واتساب';
        if (button.classList.contains('instagram')) return 'إنستغرام';
        if (button.classList.contains('tiktok')) return 'تيك توك';
        if (button.classList.contains('facebook')) return 'فيسبوك';
        if (button.classList.contains('call-btn')) return 'اتصال مباشر';
        return 'غير معروف';
    }

    // تحديث الروابط ديناميكياً
    window.updateSocialLinks = function(links) {
        if (links.whatsapp) document.querySelector('.whatsapp').href = links.whatsapp;
        if (links.instagram) document.querySelector('.instagram').href = links.instagram;
        if (links.tiktok) document.querySelector('.tiktok').href = links.tiktok;
        if (links.facebook) document.querySelector('.facebook').href = links.facebook;
        if (links.phone) document.querySelector('.call-btn').href = `tel:${links.phone}`;
        console.log('✅ تم تحديث الروابط بنجاح');
    };
})();

// ========== تغيير رقم الاتصال حسب الشبكة المختارة ==========
(function() {
    const numbers = {
        "يمن موبايل": "967785066766",
        "سبأفون": "967711056421",
        "YOU": "967730295593"
    };
    
    const callButton = document.getElementById('callButton');
    if (!callButton) return;
    
    function updatePhoneNumber() {
        let selectedRadio = document.querySelector('input[name="network"]:checked');
        if (selectedRadio) {
            let networkName = selectedRadio.parentElement.querySelector('span')?.innerText;
            let phoneNumber = numbers[networkName];
            if (phoneNumber) {
                callButton.href = `tel:+${phoneNumber}`;
            }
        }
    }
    
    const networkRadios = document.querySelectorAll('input[name="network"]');
    networkRadios.forEach(radio => {
        radio.addEventListener('change', updatePhoneNumber);
    });
    
    updatePhoneNumber();
})();