// Obtener el formulario
const testForm = document.getElementById('test-form');

// Agregar el event listener al formulario
testForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener las respuestas seleccionadas por el usuario
  const q1 = document.querySelector('input[name="q1"]:checked')?.value;
  const q2 = Array.from(document.querySelectorAll('input[name="q2"]:checked')).map(input => input.value);
  const q3 = document.querySelector('input[name="q3"]').value.trim();
  const q4 = Array.from(document.querySelectorAll('input[name="q4"]:checked')).map(input => input.value);
  const q5 = document.querySelector('textarea[name="q5"]').value.trim();
  const q6 = Array.from(document.querySelectorAll('input[name="q6"]:checked')).map(input => input.value);
  const q7 = Array.from(document.querySelectorAll('input[name="q7"]:checked')).map(input => input.value);

  // Validar las respuestas y mostrar los resultados
  validateAnswer(q1, 'B');
  validateAnswer(q2, ['A', 'B']);
  validateAnswer(q3, 'corazón de la iglesia');
  validateAnswer(q4, ['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  validateAnswer(q5, 'Ayuda directa Programación Mecánica Mujeres conocimiento sobre valor');
  validateAnswer(q6, ['A', 'B', 'C', 'D', 'E', 'F']);
  validateAnswer(q7, ['A', 'D', 'H']);
});

// Función para validar una respuesta
function validateAnswer(answer, correctAnswer) {
  const questionEl = document.querySelector('.question');

  if (Array.isArray(answer)) {
    if (answer.length === correctAnswer.length && answer.every(a => correctAnswer.includes(a))) {
      questionEl.style.color = 'green';
    } else {
      questionEl.style.color = 'red';
    }
  } else {
    if (answer === correctAnswer) {
      questionEl.style.color = 'green';
    } else {
      questionEl.style.color = 'red';
    }
  }
}
