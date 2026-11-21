(() => {
  'use strict';
  const WHATSAPP_NUMBER = '201069727678';
  const waUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    const message = link.getAttribute('data-whatsapp') || '';
    link.href = waUrl(message);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
      menuButton.textContent = isOpen ? '×' : '☰';
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'فتح القائمة');
      menuButton.textContent = '☰';
    }));
  }

  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!bookingForm.reportValidity()) return;
      const data = new FormData(bookingForm);
      const message = [
        'السلام عليكم، أريد طلب صيانة.',
        `الاسم: ${data.get('name')}`,
        `رقم الموبايل: ${data.get('phone')}`,
        `نوع الجهاز: ${data.get('device')}`,
        `المنطقة / العنوان: ${data.get('area')}`,
      ].join('\n');
      window.open(waUrl(message), '_blank', 'noopener,noreferrer');
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const data = new FormData(contactForm);
      const message = [
        'السلام عليكم، أود التواصل مع أمريكان جروب.',
        `الاسم: ${data.get('name')}`,
        `رقم الموبايل: ${data.get('phone')}`,
        `موضوع الرسالة: ${data.get('subject')}`,
        `تفاصيل الرسالة: ${data.get('message')}`,
      ].join('\n');
      window.open(waUrl(message), '_blank', 'noopener,noreferrer');
    });
  }
})();
