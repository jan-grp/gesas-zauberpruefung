export type MultipleChoiceQuestion = {
    type: "multipleChoice",
    question: string,
    title: string,
    correctAnswerIndex: 0 | 1 | 2 | 3,
    choices: string[] 
}

export type SpellQuestion = {
    type: "spell",
    scenario: string,
    correctAnswer: string
}

export const quests: (MultipleChoiceQuestion | SpellQuestion)[] = [
    // {
    //     type: "multipleChoice",
    //     question: "Durch welches Pub kommt man in die Winkelgasse?",
    //     title: "Mal schauen, ob du dich an einem der wichtesten Orte für junge Hexen zurechtfindest!",
    //     correctAnswerIndex: 2,
    //     choices: [
    //         "Eberkopf",
    //         "Drei Besen",
    //         "Zum Tropfenden Kessel",
    //         "Madam Pddifoot's Café"
    //     ]
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Was für ein Wesen ist Aragog?",
    //     title: "Kennst du dich auch mit den magischen Tieren aus?",
    //     correctAnswerIndex: 3,
    //     choices: [
    //         "ein Skorpion",
    //         "ein Werwolf",
    //         "ein Bowtruckle",
    //         "eine Spinne"
    //     ]
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Was ist kein Heiligtum des Todes",
    //     title: "Wie sieht es mit deinem Wissen über Mythen aus?",
    //     correctAnswerIndex: 3,
    //     choices: [
    //         "Stein der Auferstehung",
    //         "Elderstab",
    //         "Tarnumhang",
    //         "Zeitumkehrer"
    //     ]
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Wie heißt der Bruder von Albus Dumbledore",
    //     title: "Weißt du über die wichtigsten Familien bescheid?",
    //     correctAnswerIndex: 2,
    //     choices: [
    //         "Wulfric",
    //         "Brannon",
    //         "Aberforth",
    //         "Calahan"
    //     ]
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Mit wem geht Hermine im vierten Schuljahr auf den Weihnachtsball?",
    //     title: "Bist du auf dem Laufenden, was in Hogwarts so alles abgeht?",
    //     correctAnswerIndex: 0,
    //     choices: [
    //         "Viktor Krumm",
    //         "Ron Weasley",
    //         "Dean Thomas",
    //         "Seamus Finnigan"
    //     ]
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Wie lautet der Name der Straße, in der Harry Potter aufgwachsen ist und wo sein Onkel und seine Tante leben?",
    //     title: "Harry Potter ist DER Star! Du musst alles über ihn wissen!",
    //     correctAnswerIndex: 1,
    //     choices: [
    //         "Sonnenblumenallee",
    //         "Ligusterweg",
    //         "Kastanienstraße",
    //         "Mohnblumengasse"
    //     ]
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Welcher Lehrer hat unwissentlich Lord Voldemort geholfen, da dieser sein Lieblingsschüler war?",
    //     title: "Kein Lehrer in Hogwarts würde Voldemord helfen - oder?",
    //     correctAnswerIndex: 1,
    //     choices: [
    //         "Filius Flitwick",
    //         "Horace Slughorn",
    //         "Albus Dumbledore",
    //         "Severus Snape"
    //     ]
    // },
    {
        type: "spell",
        scenario: "Nach einem langen Abend im Gasthaus 'Drei Besen' und einem wilden Flug mit deinem Hippogreif, kommst du volltrunken nach Hause. Entsprechend ist in deiner Handtasche alles umgefallen und du findest nichts wieder.\nWelchen Zauberspruch wendest du an, um deinen Haustürschlüssel zu finden?",
        correctAnswer: "Accio"
    },
    {
        type: "spell",
        scenario: "... Obowhl du den richtigen Zauberspruch angewand hast, findest du den Schlüssel nicht - du musst ihn wohl in Hogsmeade verloren haben.\nMit welchem Zauber kriegst du das Türschloss dennoch geöffnet?",
        correctAnswer: "Alohomora"
    },
    {
        type: "spell",
        scenario: "... Oh nein - nicht schon wieder! Dein Mitbewohner wollte dich mal wieder erschrecken und hat in deinem Zimmer einen Irrwicht auf dich warten lassen. Zum Glück kennst du den Zauber, um ihn loszuwerden. Oder?",
        correctAnswer: "Riddikulus"
    },
    {
        type: "spell",
        scenario: "... Du bist so sauer auf deinen Mitbewohner, dass du ihn bis zum nächsten Morgen lähmen möchtest - genau so, wie es Hermine einst mit Neville getan hat. Welchen Zauber wendest du an?",
        correctAnswer: "Petrificus Totalus"
    },
    {
        type: "spell",
        scenario: "... Dein Mitbewohner gibt sich natürlich nicht kampflos geschlagen - auf deine Wutanfälle ist er ja mittlerweile vorbereitet. Er hebt gerade seinen Zauberstab und möchte dich Schnecken spucken lassen! Welchen Zauber setzt du ein, um ihn zu entwaffnen?",
        correctAnswer: "Expelliarmus"
    }
]