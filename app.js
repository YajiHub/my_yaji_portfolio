/**
 * Obsidian Terminal - Portfolio Application Logic
 * Vanilla JavaScript (Zero External Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth Scroll with Sticky Header Offset
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const header = document.getElementById('top-navbar');

  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 16;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. Active Navigation Item Highlight via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          desktopNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  // 3. Email Copy to Clipboard with Accessible Feedback
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyLabel = document.getElementById('copyLabel');
  const copyIcon = document.getElementById('copyIcon');
  const contactEmail = document.getElementById('contactEmail');

  if (copyBtn && contactEmail) {
    let revertTimeout = null;

    copyBtn.addEventListener('click', async () => {
      const emailToCopy = contactEmail.textContent.trim();

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for non-secure contexts
          const textArea = document.createElement('textarea');
          textArea.value = emailToCopy;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        // Success state
        copyBtn.classList.add('copied');
        if (copyLabel) copyLabel.textContent = 'Copied!';
        if (copyIcon) copyIcon.textContent = 'done';
        copyBtn.setAttribute('aria-label', 'Email address copied to clipboard');

        if (revertTimeout) clearTimeout(revertTimeout);
        revertTimeout = setTimeout(() => {
          copyBtn.classList.remove('copied');
          if (copyLabel) copyLabel.textContent = 'Copy Email';
          if (copyIcon) copyIcon.textContent = 'content_copy';
          copyBtn.setAttribute('aria-label', 'Copy email address to clipboard');
        }, 2200);

      } catch (err) {
        console.error('Failed to copy email to clipboard:', err);
        if (copyLabel) copyLabel.textContent = 'Error';
        setTimeout(() => {
          if (copyLabel) copyLabel.textContent = 'Copy Email';
        }, 2000);
      }
    });
  }
});
