import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { Picture } from '@/components/Picture'
import { ThemeProvider } from '@/components/theme/theme-provider'
import type { pictureType } from '@/types/picture'

function App() {
  const [picture, setPicture] = useState<pictureType>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleFetch = async () => {
    setIsLoading(true)
    await fetch(`https://api.thecatapi.com/v1/images/search`, {
      method: 'GET',
      headers: { 'X-Api-Key': import.meta.env['VITE_CAT_API_ACCESS_KEY'] },
      mode: 'cors',
      cache: 'default'
    }).then((res) =>
      res.json().then((data) => {
        setPicture(data[0])
        setIsLoading(false)
      })
    )
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <ThemeProvider
      defaultTheme='system'
      storageKey='vite-ui-theme'
    >
      <div className='h-full flex justify-between flex-col'>
        <Header handleFetch={handleFetch} />
        <Picture
          picture={picture}
          isLoading={isLoading}
        />
      </div>
    </ThemeProvider>
  )
}

export default App
