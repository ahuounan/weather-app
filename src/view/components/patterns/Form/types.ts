import { InputType, InputComponent } from 'view/components/primitives/Input/types';

export interface InputConfig {
  label: string;
  key: string;
  component: InputComponent.INPUT;
  type: InputType.RADIO | InputType.TEXT;
}

export enum FormState {
  NOT_SUBMITTED = 'NOT_SUBMITTED',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

export type FormData = Record<string, string>;
