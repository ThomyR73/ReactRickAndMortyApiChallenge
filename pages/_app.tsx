import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }:AppProps) {
  console.log(typeof pageProps)
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
