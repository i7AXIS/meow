import { ModeToggle } from '@/components/theme/mode-toggle'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  handleFetch: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Header = ({ handleFetch }: HeaderProps) => {
  return (
    <header className='flex items-center justify-between p-4'>
      <ModeToggle />
      <Button
        onClick={handleFetch}
        variant='outline'
        className='uppercase font-bold'
      >
        show cat
      </Button>
      <div></div>
    </header>
  )
}
