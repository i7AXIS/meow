import { useEffect, useState } from 'react'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Header } from './components/Header'

type pictureType = {
  breeds: string[]
  width: number
  height: number
  id: string
  url: string
}

function App() {
  const [picture, setPicture] = useState<pictureType>()

  const handleFetch = () => {
    fetch(`https://api.thecatapi.com/v1/images/search`, {
      method: 'GET',
      headers: { 'X-Api-Key': import.meta.env['VITE_CAT_API_ACCESS_KEY'] },
      mode: 'cors',
      cache: 'default'
    }).then((res) => res.json().then((data) => setPicture(data[0])))
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <ThemeProvider
      defaultTheme='dark'
      storageKey='vite-ui-theme'
    >
      <div className='h-full flex justify-between flex-col'>
        <Header handleFetch={handleFetch} />
        <div className='flex justify-center items-center'>
          <img
            className='max-w-[600px] max-h-[600px] object-cover rounded-2xl cursor-pointer'
            src={picture?.url}
            alt={picture?.id}
            onClick={() => window.open(picture?.url, '_blank')}
          />
        </div>
        <div></div>
      </div>
    </ThemeProvider>
  )
}

export default App