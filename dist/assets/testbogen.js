//// THE QUIZ PROJECT ////
const correctAnswers = ["B", "D", "C", "A", "C", "A", "B", "C", "A", "D"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }
  });

  scrollTo(0, 0);
  // show results on page
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

/// Building a digital clock ///
const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  // console.log(h, m, s);
  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;
  clock.innerHTML = html;
};

setInterval(tick, 1000);
