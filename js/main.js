/**
 * ========================================
 * مجموعة الوكالة للهواتف الذكية
 * تصميم وتطوير: م/ أحمد العقاب
 * ========================================
 */

(function() {
    'use strict';

    // ========== التهيئة عند تحميل الصفحة ==========
    document.addEventListener('DOMContentLoaded', function() {
        initializeApp();
    });

    /**
     * تهيئة التطبيق
     */
    function initializeApp() {
        showWelcomeMessage();
        setupButtonEffects();
        trackPageView();
    }

    /**
     * عرض رسالة ترحيبية في الكونسول
     */
    function showWelcomeMessage() {
        console.log(
            '%c📱 مجموعة الوكالة للهواتف الذكية', 
            'color: #E63232; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #E63232;'
        );
        console.log(
            '%c🎨 تصميم وتطوير: م/ أحمد العقاب', 
            'color: #FFFFFF; font-size: 14px; font-weight: bold; background: #0B1E38; padding: 4px 12px; border-radius: 20px; border-left: 4px solid #E63232;'
        );
        
        // التحقق من تحديث الروابط
        checkLinks();
    }

    /**
     * التحقق من تحديث روابط التواصل
     */
    function checkLinks() {
        const whatsappLink = document.querySelector('.whatsapp');
        const callLink = document.querySelector('.call-btn');
        
        if (whatsappLink && whatsappLink.href.includes('XXXXXXXXX')) {
            console.warn(
                '%c⚠️ تنبيه: الرجاء تحديث رقم الواتساب في ملف HTML', 
                'color: #FFD700; font-size: 12px; font-weight: bold;'
            );
        }
        
        if (callLink && callLink.href.includes('XXXXXXXXX')) {
            console.warn(
                '%c⚠️ تنبيه: الرجاء تحديث رقم الهاتف في ملف HTML', 
                'color: #FFD700; font-size: 12px; font-weight: bold;'
            );
        }
    }

    /**
     * إعداد تأثيرات الأزرار التفاعلية
     */
    function setupButtonEffects() {
        const buttons = document.querySelectorAll('.social-btn');
        
        buttons.forEach(btn => {
            // تأثير النقر
            btn.addEventListener('click', function(e) {
                handleButtonClick(this);
            });
            
            // تأثير اللمس للجوال
            btn.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            btn.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }

    /**
     * معالجة النقر على الأزرار
     * @param {HTMLElement} button - الزر المنقور عليه
     */
    function handleButtonClick(button) {
        // تأثير بصري
        button.style.transform = 'scale(0.98)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // تسجيل نوع الزر المنقور (للتحليلات)
        const buttonType = getButtonType(button);
        logButtonClick(buttonType);
    }

    /**
     * تحديد نوع الزر
     * @param {HTMLElement} button 
     * @returns {string} نوع الزر
     */
    function getButtonType(button) {
        if (button.classList.contains('whatsapp')) return 'واتساب';
        if (button.classList.contains('instagram')) return 'إنستغرام';
        if (button.classList.contains('tiktok')) return 'تيك توك';
        if (button.classList.contains('facebook')) return 'فيسبوك';
        if (button.classList.contains('call-btn')) return 'اتصال مباشر';
        return 'غير معروف';
    }

    /**
     * تسجيل النقرات (لأغراض التحليل)
     * @param {string} buttonType - نوع الزر
     */
    function logButtonClick(buttonType) {
        console.log(`📊 تم النقر على: ${buttonType}`);
        
        // يمكن إضافة Google Analytics أو أي خدمة تحليلات هنا
        // مثال: gtag('event', 'click', { 'event_category': 'social', 'event_label': buttonType });
    }

    /**
     * تتبع مشاهدة الصفحة
     */
    function trackPageView() {
        const pageInfo = {
            title: document.title,
            url: window.location.href,
            timestamp: new Date().toISOString()
        };
        
        console.log('📈 تم تحميل الصفحة:', pageInfo);
    }

    // ========== وظائف إضافية للتطوير المستقبلي ==========

    /**
     * تحديث ديناميكي للروابط (يمكن استخدامه في لوحة تحكم)
     * @param {Object} links - كائن يحتوي على الروابط الجديدة
     */
    window.updateSocialLinks = function(links) {
        if (links.whatsapp) {
            document.querySelector('.whatsapp').href = links.whatsapp;
        }
        if (links.instagram) {
            document.querySelector('.instagram').href = links.instagram;
        }
        if (links.tiktok) {
            document.querySelector('.tiktok').href = links.tiktok;
        }
        if (links.facebook) {
            document.querySelector('.facebook').href = links.facebook;
        }
        if (links.phone) {
            document.querySelector('.call-btn').href = `tel:${links.phone}`;
        }
        console.log('✅ تم تحديث الروابط بنجاح');
    };

    /**
     * تغيير شعار المحل
     * @param {string} imageUrl - رابط الصورة الجديدة
     */
    window.updateLogo = function(imageUrl) {
        const logoSpace = document.querySelector('.logo-space');
        const iconElement = logoSpace.querySelector('i');
        
        if (iconElement) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'شعار مجموعة الوكالة';
            img.style.width = '85px';
            img.style.height = '85px';
            img.style.objectFit = 'contain';
            
            iconElement.remove();
            logoSpace.appendChild(img);
            console.log('✅ تم تحديث الشعار بنجاح');
        }
    };

    

})();

// ========== تغيير رقم الاتصال حسب الشبكة المختارة ==========
(function() {
    // ⬇️ ⬇️ ⬇️ ضع أرقامك هنا ⬇️ ⬇️ ⬇️
    const numbers = {
        "يمن موبايل": "967785066766",  // استبدل XXXXXXXXX برقم يمن موبايل
        "سبأفون": "967711056421",      // استبدل XXXXXXXXX برقم سبأفون
        "YOU": "967730295593"          // استبدل XXXXXXXXX برقم YOU
    };
    // ⬆️ ⬆️ ⬆️ ⬆️ ⬆️ ⬆️ ⬆️ ⬆️ ⬆️ ⬆️ ⬆️ ⬆️
    
    const callButton = document.getElementById('callButton');
    
    function updatePhoneNumber() {
        let selectedRadio = document.querySelector('input[name="network"]:checked');
        if (selectedRadio) {
            // الحصول على اسم الشبكة من العنصر المجاور
            let networkName = selectedRadio.parentElement.querySelector('span')?.innerText;
            
            // البحث عن الرقم حسب اسم الشبكة
            let phoneNumber = numbers[networkName];
            
            if (phoneNumber) {
                callButton.href = `tel:+${phoneNumber}`;
                console.log(`📱 تم تغيير رقم الاتصال إلى: +${phoneNumber} (${networkName})`);
            }
        }
    }
    
    // عند تغيير الراديو
    const networkRadios = document.querySelectorAll('input[name="network"]');
    networkRadios.forEach(radio => {
        radio.addEventListener('change', updatePhoneNumber);
    });
    
    // تشغيل الدالة عند تحميل الصفحة
    updatePhoneNumber();
})();