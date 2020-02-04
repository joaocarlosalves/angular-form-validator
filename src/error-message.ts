import { ErrorMessage } from 'ng-bootstrap-form-validation';

export const CUSTOM_ERRORS: ErrorMessage[] = [
  {
    error: 'required',
    format: requiredFormat
  },
  {
    error: 'email',
    format: emailFormat
  },
  {
    error: 'min',
    format: minFormat
  },
  {
    error: 'max',
    format: maxFormat
  },
  {
    error: 'minlength',
    format: minLengthFormat
  },
  {
    error: 'maxlength',
    format: maxLengthFormat
  },
  {
    error: 'pattern',
    format: patternFormat
  },
  {
    error: 'invalidDate',
    format: invalidDateFormat
  },
  {
    error: 'invalidLastName',
    format: invalidLastNameFormat
  },
];

export function requiredFormat(label: string, error: any): string {
  return `${label} é obrigatório!`;
}

export function emailFormat(label: string, error: any): string {
  return `${label} inválido!`;
}

export function minFormat(label: string, error: any): string {
  return `${label} abaixo do mínimo permitido!`;
}

export function maxFormat(label: string, error: any): string {
  return `${label} acima do máximo permitido!`;
}

export function minLengthFormat(label: string, error: any): string {
  return `${label} abaixo do mínimo permitido!`;
}

export function maxLengthFormat(label: string, error: any): string {
  return `${label} acima do máximo permitido!`;
}

export function patternFormat(label: string, error: any): string {
  return `${label} inválido!`;
}

export function invalidDateFormat(): string {
  return 'data inválida!';
}

export function invalidLastNameFormat(label: string): string {
  return `${label} muito grande. Por favor abrevie o sobrenome!`;
}
