export type RawInputProps = React.HTMLProps<HTMLInputElement> & {
  as: InputComponent.INPUT;
  type: InputType.SUBMIT | InputType.TEXT | InputType.RADIO;
};

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  as: InputComponent.BUTTON;
  type: InputType.BUTTON;
};

export type InputProps = RawInputProps | ButtonProps;

export enum InputComponent {
  BUTTON = 'BUTTON',
  INPUT = 'INPUT'
}

export enum InputType {
  BUTTON = 'BUTTON',
  SUBMIT = 'SUBMIT',
  TEXT = 'TEXT',
  RADIO = 'RADIO'
}
