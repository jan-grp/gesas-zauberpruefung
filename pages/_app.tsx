import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [hasFinishedQuests, setHasFinishedQuests] = useState<boolean>(false)
  const [secretFromLink, setSecretFromLink] = useState<string>("")

  useEffect(() => {
    if(router.query.s && typeof router.query.s === "string") {
      setSecretFromLink(router.query.s)
    }
  }, [router])

  return (
    <Component 
      {...pageProps} 
      hasFinishedQuests={hasFinishedQuests} 
      setHasFinishedQuests={setHasFinishedQuests} 
      secretFromLink={secretFromLink}
    />
  )
}

export default MyApp
