import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery.js'
import { Layout } from '../components/Layout/index.js'

export const Detail = ({ detailId }) => (
  <Layout title={`Fotografia ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
