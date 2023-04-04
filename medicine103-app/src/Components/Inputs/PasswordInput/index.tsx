import React from 'react';
import { Input, InputError, InputIcon, InputLabel, InputWrapper, Wrapper } from '../style';

interface Props {
  label: string;
  value: string | undefined;
  name?: string;
  error?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  wrapStyle?: Object;
}

const PasswordInput: React.FC<Props> = (props: Props) => {
  const [show, setShow] = React.useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.onChange(e.target.value);
  };

  const getClassName = ({ disabled, error }: any): string => {
    if (error && !disabled) return 'error';
    if (disabled && !error) return 'disabled';
    if (disabled && error) return 'error disabled';
    return '';
  };
  const onShow = () => {
    if (props.disabled) return;
    setShow(!show);
  };
  return (
    <InputWrapper className={getClassName(props)} style={props.wrapStyle}>
      <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
      <Wrapper>
        <Input
          id={props.name}
          type={show ? 'text' : 'password'}
          name={props.name}
          value={props.value}
          onChange={onChange}
          autoComplete="new-password"
          disabled={props.disabled}
          style={{ padding: '4px 36px 4px 12px'}}
        />
        <InputIcon onClick={onShow}>+</InputIcon>
      </Wrapper>

      {props.error && <InputError>{props.error}</InputError>}
    </InputWrapper>
  );
}

export default React.memo(PasswordInput);