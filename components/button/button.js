import { StyledButton } from './style'

function Button(props) {
  const { text, href } = props
  return (
    <StyledButton>
      <a href={href}>{text}</a>
    </StyledButton>
  )
}

export default Button
