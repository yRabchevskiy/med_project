import React from 'react';
import { Input, InputError, InputLabel, InputWrapper } from '../style';

type InputType = 'text' | 'email';

interface Props {
  label: string;
  value: string | undefined;
  type?: InputType;
  name?: string;
  error?: string;
  placeholder?: string;
  pattern?: string | undefined;
  disabled?: boolean;
  onChange: (value: string) => void;
  wrapStyle?: Object;
}

const TextInput: React.FC<Props> = (props: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.onChange(e.target.value);
  };

  const getClassName = ({ disabled, error }: any): string => {
    if (error && !disabled) return 'error';
    if (disabled && !error) return 'disabled';
    if (disabled && error) return 'error disabled';
    return '';
  };
  return (
    <InputWrapper className={getClassName(props)} style={props.wrapStyle}>
      <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
      <Input
        id={props.name}
        type={props.type || 'text'}
        name={props.name}
        value={props.value}
        onChange={onChange}
        placeholder={props.placeholder}
        pattern={props.pattern || undefined}
        autoComplete="new-password"
        disabled={props.disabled}
      />
      {props.error && <InputError>{props.error}</InputError>}
    </InputWrapper>
  );
}

export default React.memo(TextInput);