document.addEventListener('DOMContentLoaded', function () {
  // Show More button logic
  const moreInfoBtn = document.getElementById('more-info-btn');
  const moreInfo = document.getElementById('more-info');
  let infoVisible = false;

  moreInfoBtn.addEventListener('click', function () {
    infoVisible = !infoVisible;
    if (infoVisible) {
      moreInfo.classList.remove('hidden');
      moreInfoBtn.textContent = 'Show Less';
    } else {
      moreInfo.classList.add('hidden');
      moreInfoBtn.textContent = 'Show More';
    }
  });

  // Quiz logic
  const quizButtons = document.querySelectorAll('.quiz-btn');
  const quizResult = document.getElementById('quiz-result');

  quizButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (btn.dataset.answer === 'true') {
        quizResult.textContent = 'Correct! Time travel is not a use of AI in 2025.';
        quizResult.style.color = '#388e3c';
      } else {
        quizResult.textContent = 'Incorrect. Try again!';
        quizResult.style.color = '#d32f2f';
      }
      // Optionally, disable all buttons after correct answer
      if (btn.dataset.answer === 'true') {
        quizButtons.forEach(b => b.disabled = true);
      }
    });
  });
});
