
  const overlay = document.querySelector('.cookie-overlay');
  const acceptBtn = document.querySelector('.cookie-accept');
  const closeBtn = document.querySelector('.accept-cookies');

  // Show popup on load
  window.addEventListener('load', () => {
    overlay.classList.remove('hidden');
  });

  // Accept button
  acceptBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
  });

  // Close button (×)
  closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
  });
