import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../theme'

const InputStyled = styled.input`
  height: 40px;
  width: 100%;
  padding: 0rem 1rem;
  margin: 5px;
  border-radius: 0.5rem;
  border: 1px solid ${colors.lightGray};

  &:hover {
    border: 1px solid ${colors.lightBlue};
  }
  &.error {
    border: 1px solid ${colors.paleRed};
  }
  &:focus {
    outline: 0 none;
    border: 1px solid ${({ error }) => (error ? colors.redColor : colors.darkBlue)};
  }
`

function InputText({ value, name, id, className, type, error, register, ...rest }) {
  return (
    <InputStyled
      type="text"
      value={value}
      className={className}
      id={id}
      name={name}
      error={error}
      {...register}
      {...rest}
    />
  )
}

InputText.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  register: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

export default styled(InputText)``
