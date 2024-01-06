import styles from './app.module.css';
import Navbar from './lib/navbar';
export const metadata = {
  title: 'Kuab',
  description: 'Conhecimento para todos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.main}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
