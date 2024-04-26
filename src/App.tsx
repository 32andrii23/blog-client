import '@/App.css'
import { Button } from "@/components/ui/button"
import { Bookmark } from 'lucide-react'

function App() {
  return (
    <div>
      <Button
        className="bg-yellow-300 hover:bg-yellow-400"
        size="icon"
      >
        <Bookmark />
      </Button>
    </div>
  )
}

export default App
