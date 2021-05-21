import React, { useEffect, useRef, useState, Fragment } from 'react'
import { ImgWrapper, Img, Article } from './styles.js'
import { FavButton } from '../FavButton/'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation.js'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false)

  const element = useRef(null)

  // El observer se figa que el elemento esta siendo visto por el viewport
  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Article ref={element}>
      {show && <>
        <Link to={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} alt='' />
          </ImgWrapper>
        </Link>
        <ToggleLikeMutation>
          {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                }

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }

        </ToggleLikeMutation>

      </>}
    </Article>
  )
}
