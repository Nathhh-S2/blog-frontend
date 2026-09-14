import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
const API_URL = import.meta.env.VITE_API_URL

const Page = styled.div`
  min-height: 100vh;
  background-color: #fff5f8;
`

const Main = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 20px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Title = styled.h1`
  margin: 0;
  color: #c94f7c;
`

const Welcome = styled.p`
  color: #666666;
  margin-top: 8px;
`

const NewPostButton = styled(Link)`
  padding: 12px 20px;
  background-color: #d65d86;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background-color: #c94f7c;
    transform: translateY(-1px);
  }
`

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #c94f7c;
`

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const PostCard = styled.div`
  background-color: #ffffff;
  padding: 25px;
  border-radius: 14px;
  border: 1px solid #f1d2dc;
  box-shadow: 0 3px 10px rgba(214, 93, 130, 0.06);
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 18px rgba(214, 93, 130, 0.1);
  }
`

const PostTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  color: #c94f7c;
  font-size: 22px;
`

const Author = styled.p`
  color: #d65d86;
  font-weight: 500;
  margin: 5px 0 12px;
`

const Content = styled.p`
  color: #444444;
  line-height: 1.6;
`

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const EditButton = styled(Link)`
  padding: 9px 16px;
  background-color: #fce1ea;
  color: #c94f7c;
  text-decoration: none;
  border-radius: 7px;
  font-weight: 600;
  text-align: center;
  transition: 0.2s;

  &:hover {
    background-color: #f7ccd9;
  }
`

const DeleteButton = styled.button`
  padding: 9px 16px;
  background-color: #d65d86;
  color: white;
  border: none;
  border-radius: 7px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #c94f7c;
  }
`

const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 30px;
  color: #c94f7c;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`

const Message = styled.p`
  color: #c94f7c;
  font-weight: 500;
`

function Admin() {
  const usuario = JSON.parse(localStorage.getItem("usuario"))

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function carregarPosts() {
      try {
        const response = await fetch(
          `${API_URL}/posts`
        )

        if (!response.ok) {
          throw new Error("Erro ao buscar posts")
        }

        const dados = await response.json()

        setPosts(dados)

      } catch (erro) {
        console.error(erro)
        setError("Não foi possível carregar os posts.")

      } finally {
        setLoading(false)
      }
    }

    carregarPosts()
  }, [])

  async function excluirPost(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este post?"
    )

    if (!confirmar) {
      return
    }

    try {
      const token = localStorage.getItem("token")

      const response = await fetch(
        `${API_URL}/posts/${id}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      )

      if (!response.ok) {
        throw new Error("Erro ao excluir post")
      }

      setPosts(
        posts.filter((post) => post._id !== id)
      )

      alert("Post excluído com sucesso!")

    } catch (erro) {
      console.error(erro)
      alert("Não foi possível excluir o post.")
    }
  }

  return (
    <Page>
      <Main>

        <Header>

          <div>
            <Title>
              Área do Professor 🌸
            </Title>

            <Welcome>
              Bem-vindo, {usuario?.nome}!
            </Welcome>
          </div>

          <NewPostButton to="/criar-post">
            + Novo Post
          </NewPostButton>

        </Header>

        <SectionTitle>
          Posts cadastrados
        </SectionTitle>

        {loading && (
          <Message>
            Carregando posts...
          </Message>
        )}

        {error && (
          <Message>
            {error}
          </Message>
        )}

        {!loading && !error && (
          <PostList>

            {posts.length === 0 && (
              <Message>
                Nenhum post cadastrado.
              </Message>
            )}

            {posts.map((post) => (
              <PostCard key={post._id}>

                <PostTitle>
                  {post.titulo}
                </PostTitle>

                <Author>
                  Autor: {post.autor}
                </Author>

                <Content>
                  {post.conteudo}
                </Content>

                <Buttons>

                  <EditButton
                    to={`/editar-post/${post._id}`}
                  >
                    Editar
                  </EditButton>

                  <DeleteButton
                    onClick={() =>
                      excluirPost(post._id)
                    }
                  >
                    Excluir
                  </DeleteButton>

                </Buttons>

              </PostCard>
            ))}

          </PostList>
        )}

        <BackButton to="/">
          ← Voltar para os posts
        </BackButton>

      </Main>
    </Page>
  )
}

export default Admin