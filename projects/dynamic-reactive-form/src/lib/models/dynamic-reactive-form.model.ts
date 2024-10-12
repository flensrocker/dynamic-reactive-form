import { ValidatorFn } from '@angular/forms';

export type BaseField = {
  name: string;
  visible?: boolean;
};

export type BaseControlField = BaseField & {
  defaultValue?: any;
  disabled?: boolean;
  validation?: ValidatorFn[];
};

export type SubheaderField = BaseField & {
  type: 'SUBHEADER';
};

export type DividerField = BaseField & {
  type: 'DIVIDER';
};

export type CheckboxField = BaseControlField & {
  type: 'CHECKBOX';
};

export type DatePickerField = BaseControlField & {
  type: 'DATEPICKER';
};

export type RadioField = BaseControlField & {
  type: 'RADIO';
  options: string[];
};

export type SelectDropDownField = BaseControlField & {
  type: 'SELECTDROPDOWN';
  options: string[];
};

export type SelectListField = BaseControlField & {
  type: 'SELECTLIST';
  options: string[];
};

export type SlideToggleField = BaseControlField & {
  type: 'SLIDETOGGLE';
  children: Field[];
};

export type TextAreaField = BaseControlField & {
  type: 'TEXTAREA';
};

export type TextField = BaseControlField & {
  type: 'TEXTFIELD';
};

export type ControlField =
  | CheckboxField
  | DatePickerField
  | RadioField
  | SelectDropDownField
  | SelectListField
  | SlideToggleField
  | TextAreaField
  | TextField;

export type LayoutField = SubheaderField | DividerField;

export type Field = ControlField | LayoutField;

export type FieldType = Field['type'];

const allControlFields: Record<ControlField['type'], boolean> = {
  CHECKBOX: true,
  DATEPICKER: true,
  RADIO: true,
  SELECTDROPDOWN: true,
  SELECTLIST: true,
  SLIDETOGGLE: true,
  TEXTAREA: true,
  TEXTFIELD: true,
};
const allControlFieldTypes = new Set(Object.keys(allControlFields));

export const isControlField = (field: Field): field is ControlField => {
  return field != null && allControlFieldTypes.has(field.type);
};

export interface KeyValuePair {
  key: string;
  value: any;
}

export interface Error {
  name: string;
  text: string;
  rules: ValidatorFn[];
}
