import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TodoPage from "./pages/TodoPage"
import AddTodoPage from "./pages/AddTodoPage"
import EditTodoPage from "./pages/EditTodoPage"
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage/>}/>
        <Route path="/add/:id" element={<AddTodoPage/>}/>
        <Route path="/edit/:id" element={<EditTodoPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App


