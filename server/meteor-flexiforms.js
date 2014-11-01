/**
 * Created by pavlovich on 10/21/14.
 */


var specDatax = [

    {
        name: 'meteorFlexiFormsModel',
        primary: true,
        fields: [
            {
                name: 'name',
                type: 'string',
                label: 'Name',
                inline: false,
                validation: {
                    required: {value: true},
                    min: {value: 1}
                }
            },
            {
                name: 'primary',
                type: 'boolean',
                label: 'Has own collection?',
                inline: false,
                default: false,
                validation: [
                    {type: 'required', value: true}
                ]
            },
            {
                name: 'fields',
                holdsCollection: true,
                type: 'model',
                modelName: 'field',
                label: 'Fields',
                inline: false,
                validation: [
                    {type: 'required', value: true},
                    {type: 'minCount', value: 1}
                ]
            },
            {
                name: 'displayString',
                type: 'string',
                label: 'Summary Display Format',
                inline: false,
                validation: [
                    {type: 'min', value: 1}
                ]
            }
        ],
        displayString: "%(name)s [primary: %(primary)s]"
    },
    {
        name: 'field',
        primary: false,
        fields: [
            {
                name: 'name',
                type: 'string',
                validation: [
                    {type: 'required', value: true},
                    {type: 'min', value: 1}
                ]
            },
            {
                name: 'type',
                type: 'single',
                template: {
                    name: 'select'
                },
                options: {
                    collection: [
                        {
                            value: 'text',
                            label: 'Normal Text'
                        },
                        {
                            value: 'date',
                            label: 'Date (native selector)'
                        },
                        {
                            value: 'daterange',
                            label: 'Range of Dates'
                        },
                        {
                            value: 'datetime',
                            label: 'Date and Time'
                        },
                        {
                            value: 'time',
                            label: 'Time (native selector)'
                        },
                        {
                            value: 'datetimerange',
                            label: 'Range of Dates with times'
                        },
                        {
                            value: 'single',
                            label: 'Single selection from a list'
                        },
                        {
                            value: 'multi',
                            label: 'Multiple selections from a list'
                        },
                        {
                            value: 'model',
                            label: 'Holds one or more instances of another model'
                        }
                    ]
                }
            },
            {
                name: 'modelName',
                label: 'Model',
                type: 'single',
                visible: {
                    field: 'type',
                    hasValue: 'model'
                },
                options: {
                    collectionSouce: 'db',
                    label: 'name',
                    value: 'name', //TODO should we add a 'label' field to our models for display purposes? Probably.
                    collectionName: 'meteorFlexiFormsModel'
                }
            },
            {
                name: 'label',
                type: 'text',
                default: '', // TODO: should probably be value of the name field but capitalized.
                validation: [
                    {type: 'minlength', value: '1'}
                ]
            },
            {
                name: 'inline',
                type: 'boolean',
                default: false, // show labels for embedded objects by default.
                visible: {
                    field: 'type',
                    hasValue: 'model'
                }
            },
            {
                name: 'inlineFields',
                type: 'multi',
                default: [],
                options: {
                    value: 'name',
                    label: 'label',
                    collectionPath: 'this.fields'
                }
            },
            {
                name: 'holdsCollection',
                type: 'boolean',
                default: false,
                label: 'Holds a collection?',
                template: 'checkbox',
                inline: false,
                validation: []
            },
            {
                name: 'validation',
                holdsCollection: true,
                type: 'validation'
            },
            {
                name: 'collectionSource',
                type: 'single',
                options: {
                    collection: [
                        {value: 'db'},
                        {value: 'path'},
                        {value: 'inline'}
                    ]
                }
            },
            {
                name: 'options',
                type: 'model',
                modelName: 'option',
                visible: [
                    {
                        field: 'holdsCollection',
                        operator: '==',
                        value: true
                    }
                ]
            }
        ],
        displayString: "%(name)%s"
    },
    {
        name: 'validation',
        fields: [

        ],
        displayString: "%(name)%s"
    },
    {
        name: 'option',
        fields: [

        ],
        displayString: "%(name)%s"
    }

];