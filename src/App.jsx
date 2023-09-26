import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchForm from './components/searchForm/SearchForm'
import UserInfo from './components/userInfo/UserInfo'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchForm />} />
        <Route path="/userInfo/:username" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
