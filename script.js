const subjects = document.querySelectorAll('.subject');
const iframeContainer = document.querySelector('.iframe-container');
const iframe = document.getElementById('subjectFrame');
const backBtn = document.getElementById('backBtn');

// When subject clicked → open iframe
subjects.forEach(section => {
  section.addEventListener('click', () => {
    const url = section.dataset.url;

    iframeContainer.classList.add('active');
    iframe.classList.remove('loaded');
    iframe.src = url;

    backBtn.style.display = 'block'; // show back button
    iframe.onload = () => iframe.classList.add('loaded');
  });
});

// Back button → go back to subject list
backBtn.addEventListener('click', () => {
  iframeContainer.classList.remove('active');
  iframe.src = '';
  iframe.classList.remove('loaded');
  backBtn.style.display = 'none'; // hide back button
});
