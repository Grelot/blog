document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.getElementById('share-button');

  if (!shareButton) {
    console.error('Share button not found');
    return;
  }

  shareButton.addEventListener('click', async () => {
    const shareData = {
      title: document.title,
      text: 'Check this out!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log('Link shared successfully');
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard');
      } catch (err) {
        alert('Clipboard copy failed. Sharing is not supported on this device.');
        console.error('Clipboard error:', err);
      }
    } else {
      alert('Sharing is not supported on this device.');
    }
  });
});
