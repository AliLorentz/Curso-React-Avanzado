import React from 'react'
import { PhotoCard } from '../components/PhotoCard/'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
	query getSinglePhoto($id:ID!){
		photo(id:$id){
			id
			categoryId
			src
			likes
			userId
			liked
		}
	}
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Cargando</p>
  if (data) {
    const { photo } = data
    return <PhotoCard {...photo} />
  }
  return <PhotoCard />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
			renderProp
		}
  </Query>
)
