import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 600px) {
    padding: 20px;
    flex-direction: column;
    gap: 15px;
  }
`

const Logo = styled(Link)`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  text-decoration: none;
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333333;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

const LogoutButton = styled.button`
  border: none;
  background: none;
  color: #333333;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

function Header() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const usuario = JSON.parse(localStorage.getItem("usuario"))

  function sair() {
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
    navigate("/")
  }

  return (
    <HeaderContainer>
      <Logo to="/">🌸Blog Escolar</Logo>

      <Navigation>
        <NavLink to="/">Início</NavLink>

        {token ? (
          <>
            <NavLink to="/admin">Área do Professor</NavLink>
            <span>Olá, {usuario?.nome}</span>
            <LogoutButton onClick={sair}>
              Sair
            </LogoutButton>
          </>
        ) : (
          <NavLink to="/login">Entrar</NavLink>
        )}
      </Navigation>
    </HeaderContainer>
  )
}

export default Header