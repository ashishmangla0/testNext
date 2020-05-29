import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Footerupword from '../components/footerupword';

export default function Home() {
  return (
    <>
      <Layout  title="this is index">
       
        <div className="container">
          this is demo from index
        </div>

        <Footerupword/>
       
  
      </Layout>
    </>



  
  
  )
}
