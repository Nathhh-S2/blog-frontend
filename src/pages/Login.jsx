import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
const API_URL = import.meta.env.VITE_API_URL

const Page = styled.div`
  min-height: 100vh;
  background-color: #fff5f8;
`

const Main = styled.main`
  max-width: 450px;
  margin: 0 auto;
  padding: 60px 20px;
`

const Card = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 18px;
  border: 1px solid #f1d2dc;
  box-shadow: 0 5px 20px rgba(214, 93, 130, 0.08);

  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`

const Decorative = styled.div`
  text-align: center;
  font-size: 38px;
  margin-bottom: 10px;
`

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  color: #c94f7c;
`

const Description = styled.p`
  text-align: center;
  color: #666666;
  margin-bottom: 30px;
  line-height: 1.5;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Label = styled.label`
  font-weight: 600;
  color: #444444;
`

const Input = styled.input`
  padding: 13px;
  border: 2px solid #f0b6ca;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #d65d86;
    box-shadow: 0 0 0 3px rgba(214, 93, 134, 0.12);
  }

  &::placeholder {
    color: #999999;
  }
`

const Button = styled.button`
  margin-top: 10px;
  padding: 13px;
  border: none;
  border-radius: 8px;
  background-color: #d65d86;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #c94f7c;
    transform: translateY(-1px);
  }
`

const BackLink = styled(Link)`
  display: block;
  margin-top: 25px;
  text-align: center;
  color: #c94f7c;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await fetch(
  `${API_URL}/auth/login`,
  {
    method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            senha
          })
        }
      )

      const dados = await response.json()

      if (!response.ok) {
        alert(dados.mensagem)
        return
      }

      localStorage.setItem("token", dados.token)
      localStorage.setItem(
        "usuario",
        JSON.stringify(dados.usuario)
      )

      alert("Login realizado com sucesso!")

      navigate("/admin")

      console.log("Usuário:", dados.usuario)
      console.log("Token:", dados.token)

    } catch (erro) {
      console.error(erro)
      alert("Não foi possível conectar com o servidor.")
    }
  }

  return (
    <Page>
      <Main>
        <Card>

          <Decorative>🌸</Decorative>

          <Title>
            Login do Professor
          </Title>

          <Description>
            Entre para acessar as ferramentas administrativas.
          </Description>

          <Form onSubmit={handleSubmit}>

            <Label htmlFor="email">
              E-mail
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />

            <Label htmlFor="senha">
              Senha
            </Label>

            <Input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) =>
                setSenha(event.target.value)
              }
              required
            />

            <Button type="submit">
              Entrar
            </Button>

          </Form>

          <BackLink to="/">
            ← Voltar para o início
          </BackLink>

        </Card>
      </Main>
    </Page>
  )
}

export default Login