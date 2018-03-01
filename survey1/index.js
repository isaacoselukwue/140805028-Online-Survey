var json = {
    showQuestionNumbers: "on",
    questions: [
        {
            type: "radiogroup",
            name: "sex",
            title: "Are you a male?",
            isRequired: true,
            choices:["Yes","No"],
            colCount: 0
        },{
            type: "radiogroup",
            name: "city",
            title: "Where do you live?",
            visibleif:" {sex} = 'Yes' and {sex}= 'No'",
            isRequired: true,
            choices: [
                "Lagos", "Outside Lagos"
            ]
            
        },
        {
            type: "radiogroup",
            name: "married",
            title: "Are you married?",
            visibleif:"{sex} = 'Yes'",
            isRequired: true,
            choices: [
                "Yes", "No"
            ]
            
        },
        {
            type: "radiogroup",
            name: "educated",
            title: "Do you have a university degree?",
            visibleIf: "{married} = 'Yes'",
            isRequired: true,
            choices: [
                "Yes", "No"
            ],
            
        },
        {
            type: "radiogroup",
            name: "haveKids",
            title: "Do you have a kid(s)?",
            visibleIf: "{married} = 'Yes'",
            isRequired: true,
            choices: [
                "Yes", "No"
            ],
            
        }, {
            type: "dropdown",
            name: "kids",
            title: "How many kids do you have",
            visibleIf: "{haveKids}='Yes'",
            isRequired: true,
            choices: [1, 2, 3, 4, 5]
        }, {
            type: "dropdown",
            name: "kid1Age",
            title: "The first kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 1",
            isRequired: true,
            choices: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16
            ]
        }, {
            type: "dropdown",
            name: "kid2Age",
            title: "The second kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 2",
            isRequired: true,
            startWithNewLine: false,
            choices: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16
            ]
        }, {
            type: "dropdown",
            name: "kid3Age",
            title: "The third kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 3",
            isRequired: true,
            startWithNewLine: false,
            choices: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16
            ]
        }, {
            type: "dropdown",
            name: "kid4Age",
            title: "The fourth kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 4",
            isRequired: true,
            startWithNewLine: false,
            choices: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16
            ]
        }, {
            type: "dropdown",
            name: "kid5Age",
            title: "The fifth kid age:",
            visibleIf: "{haveKids}='Yes' and {kids} >= 5",
            isRequired: true,
            startWithNewLine: false,
            choices: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16
            ]
        },
        {
            type: "radiogroup",
            name: "edu",
            title: "Are they enrolled in school?",
            visibleIf: "{haveKids}='Yes'",
            choices: [
                "Yes", "No"
            ]
            
        },
        {
            type: "radiogroup",
            name: "visit",
            title: "How often do you take them to school?",
            visibleIf: "{edu}='Yes'",
            choices: [
                "Very Often", "Often", "Not Too Often", "Can't Say"
            ]   
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
