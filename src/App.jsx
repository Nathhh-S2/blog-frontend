import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Post from "./pages/Post"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import ProtectedRoute from "./components/ProtectedRoute"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/login" element={<Login />} />
      <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>
<Route
  path="/criar-post"
  element={
    <ProtectedRoute>
      <CreatePost />
    </ProtectedRoute>
  }
/>
<Route
  path="/editar-post/:id"
  element={
    <ProtectedRoute>
      <EditPost />
    </ProtectedRoute>
  }
/>
    </Routes>
  )
}

export default App