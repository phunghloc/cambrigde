const questions = [
    {
        question: {
            detail: "Each of us must take ______ for out own actions.",
        },
        answers: {
            type: 'radio',
            answers: [
                'probability',
                'ability',
                'possibility',
                'responsibility',
            ],
        },
        correct: 'responsibility',
    },
    {
        question: {
            detail: "He wanted to know ______.",
        },
        answers: {
            type: 'radio',
            answers: [
                'where he could change some money',
                'where he can change some money',
                'where could he change some money',
                'where can he change some money',
            ],
        },
        correct: 'where he could change some money',
    },
    {
        question: {
            detail: "Mary didn't remember what I ______ her the day before.",
        },
        answers: {
            type: 'radio',
            answers: [
                'have told',
                'told',
                'was telling',
                'had told',
            ],
        },
        correct: 'had told',
    },
    {
        question: {
            detail: "_____, a husband should share certain thoughts to his wife only",
        },
        answers: {
            type: 'radio',
            answers: [
                'In my opinion',
                'To all people',
                'My hobbies',
                'Agreement',
            ],
        },
        correct: 'In my opinion',
    },
    {
        question: {
            detail: "Women also work to share the household financial _____ with their husbands.",
        },
        answers: {
            type: 'radio',
            answers: [
                'burden',
                'weight',
                'milestone',
                'load',
            ],
        },
        correct: 'burden',
    },
    {
        question: {
            detail: "The boys who enjoy playing tricks and annoying people are _____.",
        },
        answers: {
            type: 'radio',
            answers: [
                'caring',
                'supportive',
                'mischievous',
                'obedient',
            ],
        },
        correct: 'mischievous',
    },
    {
        question: {
            detail: "Your oponion is reasonable, so it is _____.",
        },
        answers: {
            type: 'radio',
            answers: [
                'acceptable',
                'suffered',
                'denied',
                'refused',
            ],
        },
        correct: 'acceptable',
    },
    {
        question: {
            detail: "In some specail social situations, pointing at someone is completely _____.",
        },
        answers: {
            type: 'radio',
            answers: [
                'lovely',
                'acceptable',
                'gentle',
                'formal',
            ],
        },
        correct: 'acceptable',
    },
    {
        question: {
            detail: "_____, a teacher may point to student so as to get his or her attention.",
        },
        answers: {
            type: 'radio',
            answers: [
                'Forgive',
                'Forever',
                'For instance',
                'For the sack of',
            ],
        },
        correct: 'For instance',
    },
    {
        question: {
            detail: "In some social situations, _____ is allowed to friends.",
        },
        answers: {
            type: 'radio',
            answers: [
                'fighting seriously',
                'rudeness',
                'accurate',
                'informality',
            ],
        },
        correct: 'informality',
    },
    {
        question: {
            detail: "Your _____ to life decides whether you are happy or not.",
        },
        answers: {
            type: 'radio',
            answers: [
                'thinking',
                'opinion',
                'attitude',
                'dream',
            ],
        },
        correct: 'attitude',
    },
    {
        question: {
            detail: "I do not think there is a real _____ between men and women at home as well as in society.",
        },
        answers: {
            type: 'radio',
            answers: [
                'attitude',
                'value',
                'measurement',
                'equality',
            ],
        },
        correct: 'equality',
    },
    {
        question: {
            detail: "They decide to divorce and Mary is _____ to get the right to raise the child.",
        },
        answers: {
            type: 'radio',
            answers: [
                'equal',
                'determined',
                'obliged',
                'active',
            ],
        },
        correct: 'determined',
    },
    {
        question: {
            detail: "Some researchers have just _____ a survey of young people's points of view on contractual marriage.",
        },
        answers: {
            type: 'radio',
            answers: [
                'sent',
                'directed',
                'managed',
                'conducted',
            ],
        },
        correct: 'conducted',
    },
    {
        question: {
            detail: "It is not easy to _____ our beauty when we get older and older.",
        },
        answers: {
            type: 'radio',
            answers: [
                'maintain',
                'develop',
                'gain',
                'collect',
            ],
        },
        correct: 'maintain',
    },
    {
        question: {
            detail: "We can use _____ and _____ forms of communication to attract one's attention.",
        },
        answers: {
            type: 'radio',
            answers: [
                'silent / noise',
                'verbal / non-verbal',
                'verb / adverb',
                'gentle / impolite',
            ],
        },
        correct: 'verbal / non-verbal',
    },
    {
        question: {
            detail: "Probably the most common ways of attracting someone's attention is by _____.",
        },
        answers: {
            type: 'radio',
            answers: [
                'dancing',
                'singing',
                'yelling',
                'waving',
            ],
        },
        correct: 'waving',
    },
    {
        question: {
            detail: "When you see your brother _____ the plane, you may _____ to call his name.",
        },
        answers: {
            type: 'radio',
            answers: [
                'look at / throw a stone to him',
                'pass by / whistle and clap your hands',
                'get off / claps your hands',
                'get off / jump up and down',
            ],
        },
        correct: 'get off / claps your hands',
    },
    {
        question: {
            detail: "There are some social _____ where smaller, non-verbal signals are more appropriate.",
        },
        answers: {
            type: 'radio',
            answers: [
                'situations',
                'signatures',
                'attractions',
                'documents',
            ],
        },
        correct: 'situations',
    },
    {
        question: {
            detail: "When you approve someone's opinion, you can stare at hum or her and _____ slightly.",
        },
        answers: {
            type: 'radio',
            answers: [
                'kneel',
                'nod',
                'shake you head',
                'sigh',
            ],
        },
        correct: 'nod',
    },
    {
        question: {
            detail: "I said that I had met her _____.",
        },
        answers: {
            type: 'radio',
            answers: [
                'yesterday',
                'the previous day',
                'the day',
                'the before day',
            ],
        },
        correct: 'the previous day',
    },
    {
        question: {
            detail: "The man asked the boys _____.",
        },
        answers: {
            type: 'radio',
            answers: [
                'why did they fight',
                'why they were fighting',
                'why they fight',
                'why were they fighting',
            ],
        },
        correct: 'why they were fighting',
    },
    {
        question: {
            detail: "Peter tried his best and passed the driving test at the first _____.",
        },
        answers: {
            type: 'radio',
            answers: [
                'try',
                'attempt',
                'doing',
                'aim',
            ],
        },
        correct: 'attempt',
    },
];

export default questions;