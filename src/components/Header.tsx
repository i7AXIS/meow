import { ModeToggle } from '@/components/theme/mode-toggle'
import { Button } from '@/components/ui/button'
import type { HeaderProps } from '@/types/header'

export const Header = ({ handleFetch }: HeaderProps) => {
  return (
    <header className='flex items-center justify-between p-4'>
      <ModeToggle />
      <div className='flex-1 flex items-center justify-center'>
        <Button
          onClick={handleFetch}
          variant='outline'
          className='uppercase font-bold'
        >
          get meow
        </Button>
      </div>
    </header>
  )
}
