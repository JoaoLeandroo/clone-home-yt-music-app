import './globals.css'
import { Inter } from 'next/font/google'
import Header
 from './components/Header/page'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Youtube Music App',
  description: 'As melhores musicas você encontra aqui!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} max-w-[1440px] m-auto bg-[#212121]`}>
        <Header/>
        {children}
      
      </body>
    </html>
  )
}
