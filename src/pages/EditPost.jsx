import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
const API_URL = import.meta.env.VITE_API_URL

const Page = styled.div`
  min-height: 100vh;
  background-color: #fff5f8;
`

const Main = styled.main`
  max-width: 700px;
  margin: 0 auto;
  padding: 50px 20px;
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
  font-size: 34px;
  margin-bottom: 10px;
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 25px;
  color: #c94f7c;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Label = styled.label`
  font-weight: 600;
  margin-top: 10px;
  color: #444444;
`

const Input = styled.input`
  padding: 13px;
  border: 2px solid #f0b6ca;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #d65d86;
    box-shadow: 0 0 0 3px rgba(214, 93, 134, 0.12);
  }
`

const Textarea = styled.textarea`
  padding: 13px;
  border: 2px solid #f0b6ca;
  border-radius: 8px;
  font-size: 16px;
  min-height: 220px;
  resize: vertical;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;

  &:focus {
    border-color: #d65d86;
    box-shadow: 0 0 0 3px rgba(214, 93, 134, 0.12);
  }
`

const Button = styled.button`
  margin-top: 15px;
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
  display: inline-block;
  margin-top: 25px;
  color: #c94f7c;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

const LoadingMessage = styled.p`
  text-align: center;
  padding: 50px;
  color: #c94f7c;
  font-weight: 600;
`

function EditPost() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState("")
  const [conteudo, setConteudo] = useState("")
  const [autor, setAutor] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function carregarPost() {
      try {
       const response = await fetch(
  `${API_URL}/posts/${id}`
)

        if (!response.ok) {
          throw new Error("Post não encontrado")
        }

        const dados = await response.json()

        setTitulo(dados.titulo)
        setConteudo(dados.conteudo)
        setAutor(dados.autor)

      } catch (erro) {
        console.error(erro)
        alert("Não foi possível carregar o post.")

      } finally {
        setLoading(false)
      }
    }

    carregarPost()

  }, [id])

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const token = localStorage.getItem("token")

const response = await fetch(
  `${API_URL}/posts/${id}`,
  {
    method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            titulo,
            conteudo,
            autor
          })
        }
      )

      const dados = await response.json()

      if (!response.ok) {
        alert(dados.mensagem || "Erro ao atualizar post")
        return
      }

      alert("Post atualizado com sucesso!")

      navigate("/admin")

    } catch (erro) {
      console.error(erro)
      alert("Não foi possível conectar com o servidor.")
    }
  }

  if (loading) {
    return (
      <Page>
        <LoadingMessage>
          Carregando post...
        </LoadingMessage>
      </Page>
    )
  }

  return (
    <Page>
      <Main>
        <Card>

          <Decorative>🌸</Decorative>

          <Title>
            Editar Post
          </Title>

          <Form onSubmit={handleSubmit}>

            <Label htmlFor="titulo">
              Título
            </Label>

            <Input
              id="titulo"
              type="text"
              value={titulo}
              onChange={(event) =>
                setTitulo(event.target.value)
              }
              required
            />

            <Label htmlFor="conteudo">
              Conteúdo
            </Label>

            <Textarea
              id="conteudo"
              value={conteudo}
              onChange={(event) =>
                setConteudo(event.target.value)
              }
              required
            />

            <Label htmlFor="autor">
              Autor
            </Label>

            <Input
              id="autor"
              type="text"
              value={autor}
              onChange={(event) =>
                setAutor(event.target.value)
              }
              required
            />

            <Button type="submit">
              Salvar alterações
            </Button>

          </Form>

          <BackLink to="/admin">
            ← Voltar para a área do professor
          </BackLink>

        </Card>
      </Main>
    </Page>
  )
}

export default EditPost