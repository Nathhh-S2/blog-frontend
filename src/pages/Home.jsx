import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Header from "../components/Header"
import { getPosts } from "../services/api"

const Page = styled.div`
  min-height: 100vh;
  background-color: #fff5f8;
`

const Main = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 20px;
`

const Welcome = styled.section`
  text-align: center;
  margin-bottom: 50px;
  padding: 45px 25px;
  background-color: #ffffff;
  border-radius: 18px;
  border: 1px solid #f3c6d5;
  box-shadow: 0 4px 15px rgba(214, 93, 130, 0.08);
`

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 12px;
  color: #c94f7c;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`

const Description = styled.p`
  font-size: 18px;
  color: #666666;
  margin-bottom: 25px;
`

const Search = styled.input`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 30px auto 0;
  padding: 15px 18px;
  border: 2px solid #f0b6ca;
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #d65d86;
    box-shadow: 0 0 0 3px rgba(214, 93, 134, 0.12);
  }

  &::placeholder {
    color: #999999;
  }
`

const SectionTitle = styled.h2`
  margin-top: 50px;
  margin-bottom: 20px;
  color: #c94f7c;
  font-size: 28px;
`

const PostList = styled.div`
  display: grid;
  gap: 20px;
`

const PostCard = styled.article`
  background-color: #ffffff;
  padding: 25px;
  border-radius: 14px;
  border: 1px solid #f1d2dc;
  box-shadow: 0 3px 10px rgba(214, 93, 130, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 18px rgba(214, 93, 130, 0.12);
  }
`

const PostTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 22px;
  color: #c94f7c;
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover ${PostTitle} {
    color: #a83d65;
  }
`

const Author = styled.p`
  color: #d65d86;
  font-weight: 500;
  margin: 8px 0;
`

const Content = styled.p`
  color: #444444;
  line-height: 1.6;
`

function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function carregarPosts() {
      try {
        const dados = await getPosts()
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

  const filteredPosts = posts.filter((post) => {
    const texto = search.toLowerCase()

    return (
      post.titulo.toLowerCase().includes(texto) ||
      post.conteudo.toLowerCase().includes(texto) ||
      post.autor.toLowerCase().includes(texto)
    )
  })

  return (
    <Page>
      <Header />

      <Main>
        <Welcome>
          <Title>Bem-vindo ao Blog Escolar! 🌸</Title>

          <Description>
            Encontre conteúdos e informações para seus estudos.
          </Description>

          <Search
            type="text"
            placeholder="🔎 Pesquisar posts..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Welcome>

        <SectionTitle>Posts recentes</SectionTitle>

        {loading && <p>Carregando posts...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <PostList>
            {filteredPosts.length === 0 && (
              <p>Nenhum post encontrado.</p>
            )}

            {filteredPosts.map((post) => (
              <PostCard key={post._id}>
                <PostLink to={`/posts/${post._id}`}>
                  <PostTitle>{post.titulo}</PostTitle>
                </PostLink>

                <Author>
                  Autor: {post.autor}
                </Author>

                <Content>
                  {post.conteudo}
                </Content>
              </PostCard>
            ))}
          </PostList>
        )}
      </Main>
    </Page>
  )
}

export default Home