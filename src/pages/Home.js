import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards.js'

import { Layout } from '../components/Layout/index.js'
export const Home = ({ id }) => {
 	return (
   <Layout title='Home' subtitle='Fotografias Principales'>
     <ListOfCategories />
     <ListOfPhotoCards categoryId={id} />
   </Layout>
 	)
}
