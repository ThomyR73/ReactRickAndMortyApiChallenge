import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>React Challenge</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous"></link>
            </Head>
            <div className="container-fluid bg-light h-80">
                <div className="row bg-dark">
                    <Header></Header>
                </div>
                <div className="row h-80">
                    <Sidebar></Sidebar>
                    {children}
                </div>
                <div className="row bg-dark text-light pl-3 pr-3 pt-3 pb-2 d-flex justify-content-between h-auto">
                    <h6 className="text-bold"   >Juan Thomas Romano</h6>
                    <h6>24/09/2020</h6>
                </div>


            </div>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>
        </>
    )
}

export default Layout
