import Button from '../button/button'
import { StyledHeader, StyledDiv } from './style'

function Header() {
  return (
    <StyledHeader>
      <h1>Brasil Cash App</h1>
      <StyledDiv>
        <Button text={'Home page'} href={'/'} />
        <Button text={'Sales'} href={'/sales'} />
      </StyledDiv>
    </StyledHeader>
  )
}

export default Header
