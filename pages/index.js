import CoverLetter1 from '@/components/CoverLetter1';
import Head from 'next/head'
import Link from 'next/link';
import React from "react";


export default function Home() {


  return (
    <>
      <Head>
        <title>Authentication-firebase</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Link href={'/CoverLetter'}> Cover Letter</Link>

    <CoverLetter1/>
      
    
        </>
      </main>

    </>
  )
}
