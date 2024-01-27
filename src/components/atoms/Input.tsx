import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors, dimensions, font } from '../../styles'

const InputStyled = styled.input.withConfig({
  shouldForwardProp: (prop) => !['error', 'success', 'warning'].includes(prop),
})`
  width: 100%;
  padding: ${dimensions.spacing.base};
  border-radius: ${dimensions.borderRadius.base};
  border: 1px solid ${colors.gray.gray4};
  font-family: ${font.fontFamily};
  line-height: 1;

  ${({ success }) =>
    (success as boolean) && `border: 1px solid ${colors.success};`}
  ${({ warning }) =>
    (warning as boolean) && `border: 1px solid ${colors.warning};`}
  ${({ error }) => (error as boolean) && `border: 1px solid ${colors.error};`}

  &:focus {
    outline: 0 none;
  }
`
export type TInput = InputHTMLAttributes<HTMLInputElement> & {
  onError?: boolean | string
  success?: boolean
  warning?: boolean
  type?: 'text' | 'password' | 'email'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = React.forwardRef<HTMLInputElement, TInput>(
  (
    {
      onError = false,
      warning = false,
      success = false,
      type = 'text',
      onChange,
      ...rest
    },
    ref,
  ) => (
    <InputStyled
      type={type}
      error={onError ? 'error' : ''}
      success={success}
      warning={warning}
      onChange={onChange}
      {...rest}
      ref={ref}
    />
  ),
)

export default styled(Input)``
