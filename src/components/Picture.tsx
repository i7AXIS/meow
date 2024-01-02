import loadingGif from '@/assets/images/meow_loading.gif'
import { pictureType } from '@/types/picture'

type PictureProps = {
  picture: pictureType | undefined
  isLoading: boolean
}

export const Picture = ({ picture, isLoading }: PictureProps) => {
  return (
    <div className='flex justify-center items-center flex-1 flex-col gap-6'>
      {isLoading ? (
        <img
          src={loadingGif}
          alt=''
          width={200}
          height={200}
        />
      ) : (
        <img
          className='max-w-[600px] max-h-[600px] object-cover rounded-2xl cursor-pointer'
          src={picture?.url}
          alt={picture?.id}
          onClick={() => window.open(picture?.url, '_blank')}
        />
      )}
    </div>
  )
}
