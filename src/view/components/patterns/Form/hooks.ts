import React from 'react';

import { InputConfig, FormData } from './types';

export const useFormData = (inputs: InputConfig[]) => {
  const [formData, setFormData] = React.useState(() =>
    inputs.reduce<FormData>((acc, { key }) => {
      acc[key] = '';
      return acc;
    }, {})
  );

  const updateFormData = (label: string, value: string) => {
    const nextFormData = {
      ...formData,
      [label]: value
    };
    setFormData(nextFormData);
  };

  return { formData, updateFormData };
};
