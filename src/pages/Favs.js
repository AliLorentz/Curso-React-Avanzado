import React, { Fragment } from 'react'
import { FavsWithQuery } from '../container/GetFavorites.js'
import { Layout } from '../components/Layout/index.js'

export const Favs = () => (
  <Layout title='Tus Favoritos' subtitle='Aqui puede encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
