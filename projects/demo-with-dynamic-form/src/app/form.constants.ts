import { Field, KeyValuePair } from '@dynamic-form';
import { Validators } from '@angular/forms';

export const leftForm: Field[] = [
      {
        name: 'firstName',
        type: 'TEXTFIELD',
        validation: [ Validators.required, Validators.maxLength(25) ]
      },
      {
        name: 'lastName',
        type: 'TEXTFIELD'
      },
      {
        name: 'favoriteFood',
        type: 'SELECTDROPDOWN',
        options: ['Ice Cream', 'Pizza', 'Tacos']
      },
      {
        name: 'favoriteColor',
        type: 'SELECTDROPDOWN',
        options: ['Red', 'Blue', 'Yellow']
      }
    ];
export const rightForm: Field[] = [
      {
        name: 'phone',
        type: 'TEXTFIELD'
      },
      {
        name: 'email',
        type: 'TEXTFIELD'
      },
      {
        name: 'favoriteSeason',
        type: 'SELECTDROPDOWN',
        options: ['Spring', 'Summer', 'Fall', 'Winter']
      },
      {
        name: 'favoriteMusic',
        type: 'SELECTDROPDOWN',
        options: ['Classic', 'Country', 'Folk', 'Rap', 'Rock']
      }
    ];

export const toggleSet: Field[] = [
  {
    name: 'joinMailingList',
    type: 'SLIDETOGGLE',
    defaultValue: true,
    children: [
      {
        name: 'streetAddress',
        type: 'TEXTFIELD'
      },
      {
        name: 'city',
        type: 'TEXTFIELD'
      },
      {
        name: 'state',
        type: 'TEXTFIELD'
      },
      {
        name: 'zip',
        type: 'TEXTFIELD'
      },
      {
        name: 'date',
        type: 'DATEPICKER'
      }
    ]
  }
];

export const prefillDataLeft: KeyValuePair[] = [
  { key: 'firstName', value: 'Mickey' },
  { key: 'lastName', value: 'Mouse' },
  { key: 'favoriteFood', value: 'Pizza' },
  { key: 'favoriteColor', value: 'Blue' }
];

export const prefillDataRight: KeyValuePair[] = [
  { key: 'phone', value: '123-456-1212' },
  { key: 'email', value: 'mickey@disney.com' },
  { key: 'favoriteSeason', value: 'Summer' },
  { key: 'favoriteMusic', value: 'Rock' }
];

export const errors = [
  {
      name: 'required',
      text: 'This field is required.',
      rules: ['dirty']
  },
  {
      name: 'maxlength',
      text: 'This field cannot exceed 25 characters.',
      rules: ['dirty']
  }
];
