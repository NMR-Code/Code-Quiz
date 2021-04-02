const questions = document.querySelector('#questions');
const choices = document.querySelector('.choices');
const timer = document.querySelector('#timer');
let currentQuestion = {}
let acceptingAnswers = true
let timer = 0
let questionCounter = 0
let availableQuestions = []

let questions = [{
        question: 'What kind of statement is used to execute actions based on a trigger or condition?',
        choice1: '1',
        choice2: '1',
        choice3: '1',
        choice4: '1',
    },
    {
        question: 'What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?',
        choice1: 'Scope',
        choice2: 'Restriction',
        choice3: 'Range',
        choice4: 'Output Level',
    },
    {
        question: 'What is a JavaScript element that represents either TRUE or FALSE values?',
        choice1: 'Event',
        choice2: 'RegExp',
        choice3: 'Boolean',
        choice4: 'Condition',
    },
    {
        question: 'What is considered to be the most popular programming language in the world?',
        choice1: 'Swift',
        choice2: 'JavaScript',
        choice3: 'Ruby',
        choice4: 'HTML',
    },
    {
        question: 'What kind of statement is used to execute actions based on a trigger or condition?',
        choice1: '1',
        choice2: '1',
        choice3: '1',
        choice4: '1',
    },
    {
        question: 'What kind of statement is used to execute actions based on a trigger or condition?',
        choice1: '1',
        choice2: '1',
        choice3: '1',
        choice4: '1',
    },
    {
        question: 'What kind of statement is used to execute actions based on a trigger or condition?',
        choice1: '1',
        choice2: '1',
        choice3: '1',
        choice4: '1',
    },
    {
        question: 'What kind of statement is used to execute actions based on a trigger or condition?',
        choice1: '1',
        choice2: '1',
        choice3: '1',
        choice4: '1',
    },
    {
        question: 'What kind of statement is used to execute actions based on a trigger or condition?',
        choice1: '1',
        choice2: '1',
        choice3: '1',
        choice4: '1',
    },
    {
        question: 'What kind of statement is used to execute actions based on a trigger or condition?',
        choice1: '1',
        choice2: '1',
        choice3: '1',
        choice4: '1',
    },
]