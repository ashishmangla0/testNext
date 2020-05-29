 import   './layout.module.scss';
 import Link from 'next/link'
import Head from 'next/head'

export default function Layout({
  children,
  title = 'This is the default title'
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
       
       
      </Head>
      <header>
      this is header
      </header>
      <main>
      {children}
      </main>

     

      <footer>
          this is footer
      </footer>
    </>
  )
}