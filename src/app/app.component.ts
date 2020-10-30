import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('formlyForm') formlyForm;

  fields: FormlyFieldConfig[] = [{
    type: 'form',
    templateOptions: {
      sectionIndex: 0
    },
    fieldGroup: [
      {
        "key": '888287',
        type: 'section',
        "fieldGroup": [
          {
            "key": '307542',
            type: 'questionGroup',
            "wrappers": [
              "panel"
            ],
            "fieldGroup": [
              {
                "key": '807328',
                "type": "input",
                "templateOptions": {
                  "label": "Zip Code",
                  "placeholder": "Zip Code"
                }
              },
              {
                "key": '80732844',
                "type": "input",
                "templateOptions": {
                  "label": "First Name",
                  "placeholder": "First Name"
                }
              }
            ],
            "templateOptions": {
              "label": "Get a free auto insurance quote"
            }
          },
          {
            "key": '30754222',
            type: 'questionGroup',
            "wrappers": [
              "panel"
            ],
            "fieldGroup": [
              {
                "key": '80732822',
                "type": "select",
                "templateOptions": {
                  "label": "Zip Code",
                  "options": [
                    { label: "Yes", value: "Yes" },
                    { label: "No", value: "No" }
                  ]
                }
              }
            ],
            "templateOptions": {
              "label": "Are you a current client?"
            }
          },
          {
            "key": '307542223',
            type: 'questionGroup',
            "wrappers": [
              "panel"
            ],
            "fieldGroup": [
              {
                "key": '807328224',
                "type": "select",
                "templateOptions": {
                  "label": "Answer Me!",
                  "options": [
                    { label: "Yes", value: "Yes" },
                    { label: "No", value: "No" }
                  ]
                }
              }
            ],
            "templateOptions": {
              "label": "Is this another question?"
            }
          }
        ],
        "templateOptions": {
          "label": "Start",
          onClick: (field, $event) => {
            this.onNext(field, $event);
          }
        }
      },
      {
        "key": '557322',
        "type": "repeat",
        "templateOptions": {
          "label": "Drivers",
          "addText": "Add Driver",
          subIndex: 0,
        },
        "fieldArray": {
          type: 'section',
          templateOptions: {
            onAdd: (field, $event) => 'add();console.log(\'HIT\')',
          },
          "fieldGroup": [
            {
              "key": '297078',
              type: 'questionGroup',
              "wrappers": [
                "panel"
              ],
              "fieldGroup": [
                {
                  "key": '126569',
                  "type": "input",
                  "templateOptions": {
                    "label": "Birthday",
                    "placeholder": "Birthday"
                  }
                },
                {
                  "key": '356239',
                  "type": "input",
                  "templateOptions": {
                    "label": "Last Name",
                    "placeholder": "Last Name"
                  }
                },
                {
                  "key": '33505',
                  "type": "input",
                  "templateOptions": {
                    "label": "First Name",
                    "placeholder": "First Name"
                  }
                }
              ],
              "templateOptions": {
                "label": "Can you tell us about the driver?"
              }
            },
            {
              "key": '108731',
              type: 'questionGroup',
              "wrappers": [
                "panel"
              ],
              "fieldGroup": [
                {
                  "key": '360216',
                  "type": "select",
                  "templateOptions": {
                    "label": "Occupation",
                    "options": [
                      []
                    ],
                    "placeholder": "Occupation"
                  }
                },
                {
                  "key": '92800',
                  "type": "select",
                  "templateOptions": {
                    "label": "Industry",
                    "options": [
                      [
                        {
                          "label": "Homemaker/House person",
                          "value": "Homemaker/House person"
                        },
                        {
                          "label": "Retired",
                          "value": "Retired"
                        },
                        {
                          "label": "Disabled",
                          "value": "Disabled"
                        },
                        {
                          "label": "Unemployed",
                          "value": "Unemployed"
                        },
                        {
                          "label": "Student",
                          "value": "Student"
                        },
                        {
                          "label": "Agriculture/Forestry/Fishing",
                          "value": "Agriculture/Forestry/Fishing"
                        },
                        {
                          "label": "Art/Design/Media",
                          "value": "Art/Design/Media"
                        },
                        {
                          "label": "Banking/Finance/Real Estate",
                          "value": "Banking/Finance/Real Estate"
                        },
                        {
                          "label": "Business/Sales/Office",
                          "value": "Business/Sales/Office"
                        },
                        {
                          "label": "Construction/Energy Trades",
                          "value": "Construction/Energy Trades"
                        },
                        {
                          "label": "Education/Library",
                          "value": "Education/Library"
                        },
                        {
                          "label": "Engineer/Architect/Science/Math",
                          "value": "Engineer/Architect/Science/Math"
                        },
                        {
                          "label": "Government/Military",
                          "value": "Government/Military"
                        },
                        {
                          "label": "Information Technology",
                          "value": "Information Technology"
                        },
                        {
                          "label": "Insurance",
                          "value": "Insurance"
                        },
                        {
                          "label": "Legal/Law Enforcement/Security",
                          "value": "Legal/Law Enforcement/Security"
                        },
                        {
                          "label": "Maintenance/Repair/Housekeeping",
                          "value": "Maintenance/Repair/Housekeeping"
                        },
                        {
                          "label": "Manufacturing/Production",
                          "value": "Manufacturing/Production"
                        },
                        {
                          "label": "Medical/Social Services/Religion",
                          "value": "Medical/Social Services/Religion"
                        },
                        {
                          "label": "Personal Care/Service",
                          "value": "Personal Care/Service"
                        },
                        {
                          "label": "Restaurant/Hotel Services",
                          "value": "Restaurant/Hotel Services"
                        },
                        {
                          "label": "Sports/Recreation",
                          "value": "Sports/Recreation"
                        },
                        {
                          "label": "Travel/Transportation/Warehousing",
                          "value": "Travel/Transportation/Warehousing"
                        },
                        {
                          "label": "Other",
                          "value": "Other"
                        }
                      ]
                    ],
                    "placeholder": "Industry"
                  }
                }
              ],
              "templateOptions": {
                "label": "What does this driver do for a living?"
              }
            },
            {
              "key": '399342',
              type: 'questionGroup',
              "wrappers": [
                "panel"
              ],
              "fieldGroup": [
                {
                  "key": '326546',
                  "type": "input",
                  "templateOptions": {
                    "label": "Gender",
                    "placeholder": "Gender"
                  }
                }
              ],
              "templateOptions": {
                "label": "What is this driver's gender?"
              }
            },
            {
              "key": '337649',
              type: 'questionGroup',
              "wrappers": [
                "panel"
              ],
              "fieldGroup": [
                {
                  "key": '62236',
                  "type": "input",
                  "templateOptions": {
                    "label": "Marital Status",
                    "placeholder": "Marital Status"
                  }
                }
              ],
              "templateOptions": {
                "label": "Can you tell us their marital status?"
              }
            },
            {
              "key": '11716',
              type: 'questionGroup',
              "wrappers": [
                "panel"
              ],
              "fieldGroup": [
                {
                  "key": '518686',
                  "type": "input",
                  "templateOptions": {
                    "label": "Age Licensed",
                    "placeholder": "Age Licensed"
                  }
                },
                {
                  "key": '296782',
                  "type": "select",
                  "templateOptions": {
                    "label": "License State",
                    "options": [
                      [
                        {
                          "label": "AL",
                          "value": "AL"
                        },
                        {
                          "label": "AK",
                          "value": "AK"
                        },
                        {
                          "label": "AS",
                          "value": "AS"
                        },
                        {
                          "label": "AZ",
                          "value": "AZ"
                        },
                        {
                          "label": "AR",
                          "value": "AR"
                        },
                        {
                          "label": "CA",
                          "value": "CA"
                        },
                        {
                          "label": "CO",
                          "value": "CO"
                        },
                        {
                          "label": "CT",
                          "value": "CT"
                        },
                        {
                          "label": "DE",
                          "value": "DE"
                        },
                        {
                          "label": "DC",
                          "value": "DC"
                        },
                        {
                          "label": "FM",
                          "value": "FM"
                        },
                        {
                          "label": "FL",
                          "value": "FL"
                        },
                        {
                          "label": "GA",
                          "value": "GA"
                        },
                        {
                          "label": "GU",
                          "value": "GU"
                        },
                        {
                          "label": "HI",
                          "value": "HI"
                        },
                        {
                          "label": "ID",
                          "value": "ID"
                        },
                        {
                          "label": "IL",
                          "value": "IL"
                        },
                        {
                          "label": "IN",
                          "value": "IN"
                        },
                        {
                          "label": "IA",
                          "value": "IA"
                        },
                        {
                          "label": "KS",
                          "value": "KS"
                        },
                        {
                          "label": "KY",
                          "value": "KY"
                        },
                        {
                          "label": "LA",
                          "value": "LA"
                        },
                        {
                          "label": "ME",
                          "value": "ME"
                        },
                        {
                          "label": "MH",
                          "value": "MH"
                        },
                        {
                          "label": "MD",
                          "value": "MD"
                        },
                        {
                          "label": "MA",
                          "value": "MA"
                        },
                        {
                          "label": "MI",
                          "value": "MI"
                        },
                        {
                          "label": "MN",
                          "value": "MN"
                        },
                        {
                          "label": "MS",
                          "value": "MS"
                        },
                        {
                          "label": "MO",
                          "value": "MO"
                        },
                        {
                          "label": "MT",
                          "value": "MT"
                        },
                        {
                          "label": "NE",
                          "value": "NE"
                        },
                        {
                          "label": "NV",
                          "value": "NV"
                        },
                        {
                          "label": "NH",
                          "value": "NH"
                        },
                        {
                          "label": "NJ",
                          "value": "NJ"
                        },
                        {
                          "label": "NM",
                          "value": "NM"
                        },
                        {
                          "label": "NY",
                          "value": "NY"
                        },
                        {
                          "label": "NC",
                          "value": "NC"
                        },
                        {
                          "label": "ND",
                          "value": "ND"
                        },
                        {
                          "label": "MP",
                          "value": "MP"
                        },
                        {
                          "label": "OH",
                          "value": "OH"
                        },
                        {
                          "label": "OK",
                          "value": "OK"
                        },
                        {
                          "label": "OR",
                          "value": "OR"
                        },
                        {
                          "label": "PW",
                          "value": "PW"
                        },
                        {
                          "label": "PA",
                          "value": "PA"
                        },
                        {
                          "label": "PR",
                          "value": "PR"
                        },
                        {
                          "label": "RI",
                          "value": "RI"
                        },
                        {
                          "label": "SC",
                          "value": "SC"
                        },
                        {
                          "label": "SD",
                          "value": "SD"
                        },
                        {
                          "label": "TN",
                          "value": "TN"
                        },
                        {
                          "label": "TX",
                          "value": "TX"
                        },
                        {
                          "label": "UT",
                          "value": "UT"
                        },
                        {
                          "label": "VT",
                          "value": "VT"
                        },
                        {
                          "label": "VI",
                          "value": "VI"
                        },
                        {
                          "label": "VA",
                          "value": "VA"
                        },
                        {
                          "label": "WA",
                          "value": "WA"
                        },
                        {
                          "label": "WV",
                          "value": "WV"
                        },
                        {
                          "label": "WI",
                          "value": "WI"
                        },
                        {
                          "label": "WY",
                          "value": "WY"
                        }
                      ]
                    ],
                    "placeholder": "License State"
                  }
                },
                {
                  "key": 252572,
                  "type": "input",
                  "templateOptions": {
                    "label": "Driver's License Number",
                    "placeholder": "Driver's License Number"
                  }
                },
                {
                  "key": '434693',
                  "type": "input",
                  "templateOptions": {
                    "label": "",
                    "placeholder": ""
                  }
                }
              ],
              "templateOptions": {
                "label": "Tell us about their licensed driving experience"
              }
            },
            {
              "key": '357030',
              type: 'questionGroup',
              "wrappers": [
                "panel"
              ],
              "fieldGroup": [
                {
                  "key": '389399',
                  "type": "button",
                  "templateOptions": {
                    "text": 'Add Driver',
                    btnType: 'button',
                    onClick: (field, $event) => {
                      this.onNext(field, $event);
                    },
                  }
                },
                 {
                  "key": '3893999',
                  "type": "button",
                  "templateOptions": {
                    "text": 'No thanks',
                    btnType: 'button',
                    onClick: (field, $event) => {
                      this.onNext(field, $event);
                    },
                  }
                }
              ],
              "templateOptions": {
                "label": "Add or select a driver",
                template: '<button>Add Driver</button>'
              }
            }
          ]
        },
      },
    ]
  }]

  ngOnInit() {
  }

  onNext(field, $event) {
    console.log('Event hit in parent comp: ', field, $event);
  }

  submit() {

  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */