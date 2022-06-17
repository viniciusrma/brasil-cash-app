import { StyledButton } from './style'

function Button(props) {
  const { text, href } = props
  return (
    <StyledButton href={href}>
      {text}
    </StyledButton>
  )
}

export default Button
