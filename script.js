// --- Exam Data ---
const examQuestions = [
    {
        question: "¿Cuál es el primer paso en la exploración musculoesquelética?",
        options: { A: "Palpación", B: "Inspección", C: "Percusión", D: "Auscultación" },
        correctAnswer: "B"
    },
    { // --- PREGUNTA 2 ---
        question: "¿Qué aspecto NO forma parte de la palpación en semiología músculo‑esquelética?",
        options: { A: "Evaluación de temperatura", B: "Identificación de crepitación", C: "Medición de ángulo articular", D: "Detección de dolor a la presión" },
        correctAnswer: "A" // <<<--- CORREGIDO DE "C" a "A"
    },
    {
        question: "Para valorar el rango de movimiento de una articulación se utiliza principalmente:",
        options: { A: "Estetoscopio", B: "Esfigmomanómetro", C: "Goniómetro", D: "Otoscopio" },
        correctAnswer: "C"
    },
    {
        question: "¿Qué maniobra se emplea para evaluar la integridad del tendón de Aquiles?",
        options: { A: "Signo de Thompson", B: "Prueba de Lachman", C: "Test de Jobe", D: "Test de Ober" },
        correctAnswer: "A"
    },
    {
        question: "¿Qué prueba se utiliza para evaluar el síndrome del túnel carpiano?",
        options: { A: "Prueba de Phalen", B: "Test de McMurray", C: "Test de Lachman", D: "Signo de Homan" },
        correctAnswer: "A"
    },
    {
        question: "¿Cuál de las siguientes se clasifica como una lesión secundaria de la piel?",
        options: { A: "Mácula", B: "Erosión", C: "Pápula", D: "Vesícula" },
        correctAnswer: "B"
    },
    {
        question: "En la pseudoictericia carotínica, ¿qué característica clínica ayuda a diferenciarla de la ictericia verdadera?",
        options: { A: "La esclerótica permanece sin pigmentación amarilla", B: "La orina es oscura", C: "Se presenta prurito intenso", D: "Hay descamación notable de la piel" },
        correctAnswer: "A"
    },
    {
        question: "¿Cuál de las siguientes describe correctamente una mácula?",
        options: { A: "Lesión elevada, palpable, >1 cm", B: "Lesión plana, no palpable, <1 cm", C: "Lesión semisólida encapsulada", D: "Vesícula llena de líquido seroso" },
        correctAnswer: "B"
    },
    {
        question: "Según la clasificación de ampollas, ¿qué tamaño distingue una bula de una vesícula?",
        options: { A: "Bula <0,5 cm; Vesícula >0,5 cm", B: "Bula >0,5 cm; Vesícula <0,5 cm", C: "Ambas miden exactamente 0,5 cm", D: "No hay distinción de tamaño" },
        correctAnswer: "B"
    },
    {
        question: "El signo del godet se utiliza para evaluar:",
        options: { A: "Palidez de la piel", B: "Presencia de edema subcutáneo", C: "Elasticidad de cicatrices", D: "Pigmentación melánica" },
        correctAnswer: "B"
    },
    {
        question: "¿Cuál es el primer paso en la exploración física del escroto y testículos?",
        options: { A: "Transiluminación escrotal", B: "Inspección visual en bipedestación", C: "Medición de la temperatura escrotal", D: "Palpación bimanual" },
        correctAnswer: "B"
    },
    {
        question: "En la valoración de hernias inguinales, el impulso de tos se busca para determinar si la protrusión aparece:",
        options: { A: "Sobre el ligamento inguinal (hernia directa)", B: "Por dentro del canal inguinal (hernia indirecta)", C: "Bajo el ligamento inguinal (hernia femoral)", D: "Solo en decúbito supino" },
        correctAnswer: "B"
    },
    {
        question: "Para la inserción del espéculo en el examen ginecológico, la paciente debe estar en posición de:",
        options: { A: "Litotomía", B: "Decúbito prono", C: "Bipedestación", D: "Decúbito lateral" },
        correctAnswer: "A"
    },
    {
        question: "La palpación bimanual en el examen ginecológico permite evaluar principalmente:",
        options: { A: "La congruencia de los huesos pélvicos", B: "El tamaño y la movilidad del útero y anexos", C: "La peristalsis intestinal", D: "El reflejo cremastérico" },
        correctAnswer: "B"
    },
    {
        question: "En el examen digital rectal para evaluar la próstata, un hallazgo de superficie lisa y agrandamiento homogéneo sugiere:",
        options: { A: "Prostatitis aguda", B: "Hiperplasia prostática benigna", C: "Carcinoma prostático", D: "Quiste seminal" },
        correctAnswer: "B"
    },
    {
        question: "¿Cuál es la tríada clásica del síndrome nefrítico?",
        options: { A: "Proteinuria masiva, hipoalbuminemia, edemas", B: "Hematuria, hipertensión arterial, oliguria", C: "Polaquiuria, disuria, urgencia miccional", D: "Náuseas, vómitos, prurito" },
        correctAnswer: "B"
    },
    {
        question: "¿Qué hallazgo es característico del síndrome nefrótico?",
        options: { A: "Hematuria macroscópica", B: "Proteinuria > 3.5 g/24 h, hipoalbuminemia y edemas", C: "Fiebre y dolor lumbar", D: "Oliguria y hematuria microscópica" },
        correctAnswer: "B"
    },
    {
        question: "En el síndrome urémico crónico, un síntoma frecuente es:",
        options: { A: "Cólicos nefríticos intensos", B: "Prurito cutáneo generalizado", C: "Micción en chorro continuo", D: "Hipertensión ortostática" },
        correctAnswer: "B"
    },
    {
        question: "¿Qué caracteriza al síndrome litiásico urinario?",
        options: { A: "Proteinuria no selectiva", B: "Dolor tipo cólico lumbar irradiado a ingle", C: "Edema palpebral matutino", D: "Hipercolesterolemia" },
        correctAnswer: "B"
    },
    {
        question: "En el síndrome obstructivo del tracto urinario alto, es esperable encontrar:",
        options: { A: "Goteo postmiccional", B: "Hidronefrosis y reducción del gasto urinario", C: "Disuria intensa sin tenesmo", D: "Hipercalcemia" },
        correctAnswer: "B"
    }
];

// --- Global Variables ---
let currentQuestionIndex = 0;
let studentAnswers = []; // Array to store { questionIndex, selectedAnswer }
let studentName = "";
let timerInterval;
let timeRemaining = 60 * 60; // 60 minutes in seconds
const { jsPDF } = window.jspdf; // Get jsPDF from the global window object

// --- DOM Elements ---
const nameContainer = document.getElementById('name-container');
const examContainer = document.getElementById('exam-container');
const resultsContainer = document.getElementById('results-container');

const studentNameInput = document.getElementById('student-name');
const startExamBtn = document.getElementById('start-exam-btn');

const displayStudentName = document.getElementById('display-student-name');
const timerDisplay = document.getElementById('timer');
const questionNumberDisplay = document.getElementById('question-number');
const questionTextDisplay = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const nextQuestionBtn = document.getElementById('next-question-btn');

const resultStudentName = document.getElementById('result-student-name');
const scoreDisplay = document.getElementById('score');
const generatePdfBtn = document.getElementById('generate-pdf-btn');
const reviewDetailsContainer = document.getElementById('review-details'); // For PDF data


// --- Event Listeners ---
startExamBtn.addEventListener('click', startExam);
nextQuestionBtn.addEventListener('click', handleNextQuestion);
generatePdfBtn.addEventListener('click', generatePDF);

// --- Functions ---
function startExam() {
    studentName = studentNameInput.value.trim();
    if (!studentName) {
        alert("Por favor, ingrese su nombre completo.");
        return;
    }

    // Initialize studentAnswers array
    studentAnswers = new Array(examQuestions.length).fill(null);

    displayStudentName.textContent = studentName;
    resultStudentName.textContent = studentName; // Also set in results section

    nameContainer.style.display = 'none';
    examContainer.style.display = 'block';

    displayQuestion(currentQuestionIndex);
    startTimer();
}

function displayQuestion(index) {
    if (index >= examQuestions.length) {
        endExam();
        return;
    }

    const questionData = examQuestions[index];
    questionNumberDisplay.textContent = `Pregunta ${index + 1} de ${examQuestions.length}`;
    questionTextDisplay.textContent = questionData.question;
    optionsList.innerHTML = ''; // Clear previous options

    // Dynamically create radio buttons for options
    for (const key in questionData.options) {
        const optionId = `q${index}_option${key}`;
        const optionDiv = document.createElement('div');
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = `question${index}`;
        radioInput.value = key;
        radioInput.id = optionId;

        const label = document.createElement('label');
        label.htmlFor = optionId;
        label.textContent = `${key}) ${questionData.options[key]}`;

        optionDiv.appendChild(radioInput);
        optionDiv.appendChild(label);
        optionsList.appendChild(optionDiv);

        // Allow clicking the whole div to select the radio
        optionDiv.addEventListener('click', () => {
            radioInput.checked = true;
        });
    }

    // Update button text for the last question
    if (index === examQuestions.length - 1) {
        nextQuestionBtn.textContent = 'Finalizar Examen';
    } else {
        nextQuestionBtn.textContent = 'Siguiente Pregunta';
    }
}

function getSelectedAnswer(index) {
    const radios = document.getElementsByName(`question${index}`);
    for (const radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null; // No answer selected
}

function handleNextQuestion() {
    const selectedAnswer = getSelectedAnswer(currentQuestionIndex);

    if (selectedAnswer === null) {
        alert("Por favor, seleccione una respuesta antes de continuar.");
        return;
    }

    // Confirmation dialog
    const confirmed = confirm(`¿Está seguro de que su respuesta es la opción ${selectedAnswer}? Una vez confirmada, no podrá cambiarla.`);

    if (confirmed) {
        // Store the answer
        studentAnswers[currentQuestionIndex] = selectedAnswer;

        // Move to the next question or end exam
        currentQuestionIndex++;
        if (currentQuestionIndex < examQuestions.length) {
            displayQuestion(currentQuestionIndex);
        } else {
            endExam();
        }
    }
    // If not confirmed, do nothing, stay on the current question
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("¡El tiempo se ha agotado! El examen se cerrará y calificará automáticamente.");
            endExam();
        }
    }, 1000); // Update every second
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `Tiempo Restante: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function endExam() {
    clearInterval(timerInterval); // Stop the timer
    examContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    calculateAndDisplayScore();
    prepareReviewDetails(); // Prepare data for PDF
}

function calculateAndDisplayScore() {
    let correctCount = 0;
    for (let i = 0; i < examQuestions.length; i++) {
        // Check if the student provided an answer AND if it matches the correct answer
        if (studentAnswers[i] !== null && studentAnswers[i] === examQuestions[i].correctAnswer) {
            correctCount++;
        }
    }
    const percentage = ((correctCount / examQuestions.length) * 100).toFixed(2);
    scoreDisplay.textContent = `${percentage}% (${correctCount} de ${examQuestions.length} correctas)`;
}


function prepareReviewDetails() {
    reviewDetailsContainer.innerHTML = ''; // Clear previous details
    examQuestions.forEach((q, index) => {
        const userAnswer = studentAnswers[index] ?? 'No respondida';
        const correctAnswer = q.correctAnswer;
        const isCorrect = userAnswer === correctAnswer;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('review-item'); // Assuming this class is used for PDF styling if needed

        let userAnswerText = 'N/A';
        if (userAnswer !== 'No respondida' && q.options[userAnswer]) {
            userAnswerText = `${userAnswer}) ${q.options[userAnswer]}`;
        } else if (userAnswer !== 'No respondida') {
            userAnswerText = `${userAnswer}) (Opción inválida?)`; // Handle potential edge case
        } else {
             userAnswerText = 'No respondida';
        }


        itemDiv.innerHTML = `
            <p><strong>Pregunta ${index + 1}:</strong> ${q.question}</p>
            <p class="selected-answer">Tu respuesta: ${userAnswerText}</p>
            <p class="${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
                Respuesta Correcta: ${correctAnswer}) ${q.options[correctAnswer]}
                ${isCorrect ? ' (Correcto)' : ' (Incorrecto)'}
            </p>
        `;
        reviewDetailsContainer.appendChild(itemDiv); // Append to hidden div
    });
}


function generatePDF() {
    const doc = new jsPDF();
    const margin = 15;
    let yPos = margin;

    // --- Header ---
    doc.setFontSize(18);
    doc.text("Resultados del Examen de Semiología", margin, yPos);
    yPos += 10;
    doc.setFontSize(12);
    doc.text(`Estudiante: ${studentName}`, margin, yPos);
    yPos += 7;
    doc.text(`Puntuación: ${scoreDisplay.textContent}`, margin, yPos);
    yPos += 15; // Add space before table

    // --- Table Data ---
    const tableData = examQuestions.map((q, index) => {
        const userAnswerCode = studentAnswers[index] ?? 'N/A';
        let userAnswerText = 'No respondida';
        if (userAnswerCode !== 'N/A' && q.options[userAnswerCode]) {
             userAnswerText = `${userAnswerCode}) ${q.options[userAnswerCode]}`;
        } else if (userAnswerCode !== 'N/A') {
             userAnswerText = `${userAnswerCode}) (Inválida?)`;
        }

        const correctAnswerCode = q.correctAnswer;
        const correctAnswerText = `${correctAnswerCode}) ${q.options[correctAnswerCode]}`;
        const result = userAnswerCode === correctAnswerCode ? 'Correcto' : 'Incorrecto';

        // Split long text for better table layout
        const questionLines = doc.splitTextToSize(q.question, 65); // Max width for question column
        const userAnswerLines = doc.splitTextToSize(userAnswerText, 35);
        const correctAnswerLines = doc.splitTextToSize(correctAnswerText, 35);


        // Return data potentially with arrays for multiline cells
        return [
            index + 1,
            questionLines, // Use split text
            userAnswerLines, // Use split text
            correctAnswerLines, // Use split text
            result
        ];
    });

    // --- Create Table ---
    doc.autoTable({
        head: [['#', 'Pregunta', 'Tu Respuesta', 'Respuesta Correcta', 'Resultado']],
        body: tableData,
        startY: yPos,
        theme: 'grid', // Added theme for better structure
        headStyles: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' }, // Adjusted blue header
        styles: { fontSize: 8, cellPadding: 2, valign: 'middle' }, // Vertical align middle
        columnStyles: {
            0: { cellWidth: 10, halign: 'center' }, // #
            1: { cellWidth: 65 }, // Question
            2: { cellWidth: 35 }, // Your Answer
            3: { cellWidth: 35 }, // Correct Answer
            4: { cellWidth: 20, halign: 'center' }  // Result
        },
        didParseCell: function (data) {
            // Color text based on result
            if (data.column.index === 4 && data.cell.section === 'body') { // Check if it's the Result column in the body
                 // Ensure raw value is treated as string for comparison
                const cellText = String(data.cell.raw).trim();
                if (cellText === 'Incorrecto') {
                    data.cell.styles.textColor = [231, 76, 60]; // Red
                     data.cell.styles.fontStyle = 'bold';
                } else if (cellText === 'Correcto') {
                     data.cell.styles.textColor = [46, 204, 113]; // Green
                     data.cell.styles.fontStyle = 'bold';
                }
            }
        }
    });

    // --- Save PDF ---
    // Sanitize filename
    const safeStudentName = studentName.replace(/[^a-z0-9_]/gi, '_').replace(/_+/g, '_');
    doc.save(`Resultados_Examen_${safeStudentName || 'Estudiante'}.pdf`);
}

// --- Initial Setup ---
// Hide exam and results initially (done via inline style, but ensures JS control)
examContainer.style.display = 'none';
resultsContainer.style.display = 'none';
