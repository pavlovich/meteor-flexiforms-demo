/**
 * Created by pavlovich on 3/27/14.
 */

if(FlexiSpecs.find().count() === 0) {

    var specData = [
        {
            name: 'person',
            primary: true,
            fields: [
                {
                    name: 'name',
                    type: 'model',
                    modelName: 'personName',
                    label: 'Name',
                    inline: false
                },
                {
                    name: 'addresses',
                    label: 'Addresses',
                    holdsCollection: true,
                    type: 'model',
                    modelName: 'address'
                },
                {
                    name: 'birthdate',
                    label: 'Birthdate',
                    type: 'datesingle',
                    validation: [
                        {type: 'min', value: new Date('2014-01-01')}
                    ]
                },
                {
                    name: 'deathdate',
                    label: 'Death Date',
                    type: 'date'
                },
                {
                    name: 'hourofcoming',
                    label: 'Hour of coming',
                    type: 'time'
                },
                {
                    name: 'birthStamp',
                    label: 'Birthdate and time',
                    type: 'datetimesingle'
                },
                {
                    name: 'age',
                    label: 'Age',
                    type: 'number',
                    holdsCollection: false
                },
                {
                    name: 'emails',
                    label: 'email Addresses',
                    holdsCollection: true,
                    type: 'email',
                    validation: [
                        {type: "email", message: 'Invalid email address'},
                        {type: "required", value: true},
                        {type: 'maxlength',  value: 14},
                        {type: 'minlength', value: 4},
                        {type: 'maxCount', value: 5},
                        {type: 'minCount', value: 1}
                    ]
                },
                {
                    name: 'livedAbroad',
                    label: 'Lived Abroad',
                    type: 'daterange'
                },
                {
                    name: 'livedAbroadDetail',
                    label: 'Lived Abroad (timestamp)',
                    type: 'datetimerange'
                },
                {
                    name: 'gender',
                    label: 'Sex',
                    message: 'Select your gender',
                    type: 'single',
                    template: {
                        name: 'radio',
                        options: {orientation: 'vertical'}
                    },
                    options: {
                        collection: [
                            {
                                value: 'male',
                                label: 'Male'
                            },
                            {
                                value: 'female',
                                label: 'Female'
                            },
                            {
                                value: 'odd',
                                label: 'LGBT'
                            }
                        ]
                    }
                },
                {
                    name: 'hair',
                    label: 'Hair Color',
                    message: 'Select the color of your hair',
                    type: 'single',
                    validation: [
                        {type: 'required', value: true}
                    ],
                    options: {
                        label: 'color',
                        value: 'value',
                        group: 'category',
                        collection: [
                            {category: 'light', color: 'blue', value: 'ltb'},
                            {category: 'light', color: 'brown', value: 'ltbr'},
                            {category: 'light', color: 'green', value: 'ltg'},
                            {category: 'Medium', color: 'blue', value: 'mb'},
                            {category: 'Medium', color: 'green', value: 'mg'},
                            {category: 'dark', color: 'blue', value: 'dkb'},
                            {category: 'dark', color: 'green', value: 'dkg'}
                        ]
                    }
                },
                {
                    name: 'smoker',
                    label: 'Smokes?',
                    message: 'Check if this person smokes.',
                    type: 'boolean',
//                    trueValue: 'smokes',
//                    falseValue: 'non-smoker',
                    template: {name: 'checkbox'}
                }
            ]
        },
        {
            name: 'personName',
            fields: [
                {
                    name: 'firstName',
                    prefix: '@',
                    label: 'First Name',
                    type: 'text',
                    placeholder: 'Your first name',
                    message: 'Looking for your given name (e.g. John)',
                    validation: [
                        {type: 'required', value: true},
                        {type: 'maxlength', value: 10, message: 'Too long! Length must be less than: [[validation.max]] characters'},
                        {type: 'minlength', value: 5}
                    ]
                },
                {
                    name: 'lastName',
                    type: 'text',
                    label: 'Last Name',
                    preferredControl: 'input',
                    placeholder: 'Your last name',
                    message: 'Looking for your family or surname (e.g. Smith)',
                    validation: [
                        {type: 'required', value: false},
                        {type: 'minlength', value: 2}
                    ]
                }
            ]
        },
        {
            name: 'address',
            displayString: "%(street1)s, %(street2)s, %(region.city)s, %(region.state.name)s (%(type.name)s) ",
            fields: [
                {
                    name: 'type',
                    label: 'Type',
                    type: 'single',
                    validation: [
                        {type: 'required', value: true}
                    ],
                    widgetType: 'select',
                    options: {
                        label: 'name',
                        value: 'value',
                        default: 'v',
                        embedded: true,
                        embedAllFields: true,
                        collection: [
                            {name: 'Home', value: 'h'},
                            {name: 'Business', value: 'b'},
                            {name: 'Vacation', value: 'v'}
                        ]
                    }
                },
                {
                    name: 'street1',
                    suffix: '@',
                    label: 'Street Line 1',
                    type: 'text',
                    placeholder: 'Your street address',
                    message: 'Looking for the first line of your street address (e.g. 123 Any Street)',
                    validation: [
                        {type: 'required', value: true},
                        {type: 'maxlength', value: 250, message: 'Too long! Length must be less than: [[validation.max]] characters'},
                        {type: 'minlength', value: 2}
                    ]
                },
                {
                    name: 'street2',
                    prefix: '@',
                    label: 'Street Line 2',
                    type: 'text',
                    placeholder: 'Your street address',
                    message: 'Looking for the second line of your street address (e.g. Unit 143)',
                    validation: [
                        {type: 'required', value: true},
                        {type: 'maxlength', value: 250, message: 'Too long! Length must be less than: [[validation.max]] characters'},
                        {type: 'minlength', value: 2}
                    ]
                },
                {
                    name: 'region',
                    type: 'model',
                    modelName: 'region',
                    embed: true
                }
            ]
        },
        {
            name: 'region',
            fields: [
                {
                    name: 'city',
                    label: 'City',
                    type: 'text',
                    placeholder: 'Enter your city name',
                    message: 'Looking for the name of the city you live in.',
                    validation: [
                        {type: 'required', value: true}
                    ]
                },
                {
                    name: 'state',
                    label: 'State',
                    type: 'single',
                    placeholder: 'Choose ...',
                    message: 'Choose the state you live in.',
                    validation: [
                        {type: 'required', value: true}
                    ],
                    options: {
                        label: 'name',
                        value: 'abbr',
                        group: 'country',
                        embedded: true,
                        embedAllFields: false,
                        embeddedFields: ['name', 'abbr'],
                        collectionName: 'state'
                    }
                }
            ]

        },
        {
            name: 'state',
            primary: true,
            fields: [
                {
                    name: 'country',
                    label: 'Country',
                    type: 'text',
                    placeholder: 'Enter the name of the country',
                    validation: [
                        {type: 'required', value: true}
                    ]
                },
                {
                    name: 'abbr',
                    label: 'Abbreviation',
                    type: 'text',
                    placeholder: 'abbr',
                    validation: [
                        {type: 'required', value: true},
                        {type: 'maxlength', value: 5}
                    ]
                },
                {
                    name: 'name',
                    label: 'Name',
                    type: 'text',
                    placeholder: 'State Name',
                    validation: [
                        {type: 'required', value: true}
                    ]
                }
            ]
        }

    ];

    specData.forEach(function (spec) {
        FlexiSpecs.insert(spec);
    });

}



///**
// * Created by pavlovich on 3/27/14.
// */
//
//if(FlexiSpecs.find().count() === 0) {
//
//    var specData = [
//        {
//            name: 'person',
//            primary: true,
//            fields: [
//                 {
//                    name: 'emails',
//                    label: 'email Addresses',
//                    holdsCollection: true,
//                    type: 'email',
//                    validation: [
//                        {type: 'required', value: true},
//                        {type: 'maxlength', value: 14},
//                        {type: 'minlength', value: 4},
//                        {type: 'maxCount', value: 5},
//                        {type: 'minCount', value: 1}
//                    ]
//                }
//            ]
//        }
//    ];
//
//    specData.forEach(function (spec) {
//        FlexiSpecs.insert(spec);
//    });
//
//}