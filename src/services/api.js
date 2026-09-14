const API_URL = import.meta.env.VITE_API_URL

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`)

  if (!response.ok) {
    throw new Error("Erro ao buscar os posts")
  }

  return response.json()
}