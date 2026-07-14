(function () {
  const dialog = document.querySelector('[data-lightbox-dialog]');
  if (!dialog) return;

  const image = dialog.querySelector('[data-lightbox-image]');
  const caption = dialog.querySelector('[data-lightbox-caption]');
  const closeButton = dialog.querySelector('[data-lightbox-close]');
  let lastTrigger = null;

  function closeLightbox() {
    dialog.hidden = true;
    image.src = '';
    image.alt = '';
    caption.textContent = '';
    document.body.classList.remove('lightbox-open');
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll('[data-lightbox="gallery"]').forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      lastTrigger = trigger;
      const source = trigger.querySelector('img');
      image.src = trigger.href;
      image.alt = source ? source.alt : '';
      caption.textContent = trigger.dataset.caption || '';
      dialog.hidden = false;
      document.body.classList.add('lightbox-open');
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) closeLightbox();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !dialog.hidden) closeLightbox();
  });
})();
