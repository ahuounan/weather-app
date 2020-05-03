import React from 'react';

import { CSSObjects } from 'types/styles';

export type RawInputProps = React.HTMLProps<HTMLInputElement> & {
  as: InputComponent.INPUT;
  type: InputType.SUBMIT | InputType.TEXT | InputType.CHECKBOX | InputType.RADIO;
};

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  as: InputComponent.BUTTON;
  type: InputType.BUTTON;
};

export type SharedInputProps = {
  styles?: CSSObjects;
};

export type InputProps = (RawInputProps | ButtonProps) & SharedInputProps;

export enum InputComponent {
  BUTTON = 'BUTTON',
  INPUT = 'INPUT'
}

export enum InputType {
  BUTTON = 'BUTTON',
  SUBMIT = 'SUBMIT',
  TEXT = 'TEXT',
  CHECKBOX = 'CHECKBOX',
  RADIO = 'RADIO'
}
