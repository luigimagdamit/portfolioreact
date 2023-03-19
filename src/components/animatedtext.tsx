import { useEffect, useState } from 'react'

const FADE_INTERVAL_MS = 1750
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
const WORDS_TO_ANIMATE = ["Luigi", "a developer", "an artist", "a friend", "a learner"]

type FadeProp = { fade: 'fade-in' | 'fade-out' }

export const AnimatedText = () => {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' })
  const [wordOrder, setWordOrder] = useState(0)

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
    }, FADE_INTERVAL_MS)

    return () => clearInterval(fadeTimeout)
  }, [fadeProp])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
    }, WORD_CHANGE_INTERVAL_MS)

    return () => clearInterval(wordTimeout)
  }, [])

  return (
    // <h2>
    //   Hi, I'm &#10;&#13;<span className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}!</span>
    // </h2>
    <h2>Hi, I'm Luigi!</h2>
  )
}