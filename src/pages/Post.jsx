import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
const API_URL = import.meta.env.VITE_API_URL

const Page = styled.div`
  min-height: 100vh;
  background-color: #fff5f8;
`

const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 20px;
`

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 25px;
  color: #c94f7c;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`

const Card = styled.article`
  background-color: #ffffff;
  padding: 45px;
  border-radius: 18px;
  border: 1px solid #f1d2dc;
  box-shadow: 0 5px 20px rgba(214, 93, 130, 0.08);

  @media (max-width: 600px) {
    padding: 25px;
  }
`

const Decorative = styled.div`
  font-size: 28px;
  margin-bottom: 15px;
`

const Title = styled.h1`
  font-size: 36px;
  margin-top: 0;
  margin-bottom: 15px;
  color: #c94f7c;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`

const Author = styled.p`
  color: #d65d86;
  font-weight: 500;
  padding-bottom: 20px;
  border-bottom: 1px solid #f3d9e2;
`

const Content = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #444444;
  margin-top: 30px;
  white-space: pre-line;
`

const LoadingMessage = styled.p`
  color: #c94f7c;
  font-weight: 500;
`

const ErrorMessage = styled.p`
  color: #c94f7c;
  font-weight: 500;
`

function Post() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

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
        setPost(dados)
      } catch (erro) {
        console.error(erro)
        setError("Não foi possível carregar o post.")
      } finally {
        setLoading(false)
      }
    }

    carregarPost()
  }, [id])

  return (
    <Page>
      <Main>
        <BackLink to="/">
          ← Voltar para os posts
        </BackLink>

        {loading && (
          <LoadingMessage>
            Carregando post...
          </LoadingMessage>
        )}

        {error && (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        )}

        {!loading && !error && post && (
          <Card>
            <Decorative>🌸</Decorative>

            <Title>{post.titulo}</Title>

            <Author>
              Autor: {post.autor}
            </Author>

            <Content>
              {post.conteudo}
            </Content>
          </Card>
        )}
      </Main>
    </Page>
  )
}

export default Post