alert("Would you like to test you programming knowledge?");
(function() {
    var count = 60;
    var interval = setInterval(function() {
        document.getElementById('count').innerHTML = count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('count').innerHTML = 'Done';
            alert("You're out of time!");
        }
    }, 1000)

    function buildQuiz() {
        const output = [];
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];
                for (letter in currentQuestion.answers) {
                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} correct!`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }


    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [{
            question: "Who invented JavaScript?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich"
            },
            correctAnswer: "c"
        },
        {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm"
            },
            correctAnswer: "c"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
            },
            correctAnswer: "d"
        },
        {
            question: 'What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?',
            answers: {
                a: 'Scope',
                b: 'Restriction',
                c: 'Range',
                d: 'Output Level',
            },
            correctAnswer: "a"
        },
        {
            question: 'What is a JavaScript element that represents either TRUE or FALSE values?',
            answers: {
                a: 'Event',
                b: 'RegExp',
                c: 'Boolean',
                d: 'Condition',
            },
            correctAnswer: "c"
        },
        {
            question: 'What is the default behavior called that is used to move declarations to the top of the current scope?',
            answers: {
                a: 'Hoisting',
                b: 'Arranging',
                c: 'Jumping',
                d: 'Sorting',
            },
            correctAnswer: "a"
        },
        {
            question: 'What is the name of the stylesheet that defines the presentation of an HTML or XML document?',
            answers: {
                a: 'CSS',
                b: 'PHP',
                c: 'jQuery',
                d: 'Java',
            },
            correctAnswer: "a"
        },
        {
            question: 'All HTML elements are considered what?',
            answers: {
                a: 'Boxes',
                b: 'Code',
                c: 'Objects',
                d: 'Tables',
            },
            correctAnswer: "a"
        },
        {
            question: 'What are the CSS properties that are used to add space around sections of content?',
            answers: {
                a: 'Cleaner',
                b: 'Break',
                c: 'Padding',
                d: 'Spacing',
            },
            correctAnswer: "c"
        },
        {
            question: 'What jQuery method is used to insert content after a selected element?',
            answers: {
                a: 'prepend()',
                b: 'append()',
                c: 'after()',
                d: 'final()',
            },
            correctAnswer: "c"
        },
    ];

    // Generate Quiz
    buildQuiz();

    submitButton.addEventListener('click', showResults);
})();