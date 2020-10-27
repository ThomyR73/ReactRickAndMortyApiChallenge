import React from 'react'
import { ApolloError } from '@apollo/client'

interface Props {
  error: ApolloError
}

const Error: React.FunctionComponent<Props> = ({ error }) => {
  const errorMessage = (): string => {
    switch (error.message) {
      case "Response not successful: Received status code 400":
        return "Error 400: An error occurred with the request"
      case "NetworkError when attempting to fetch resource.":
         return "Error: An error occurred with the network"
      case "404: Not Found":
        return "Error 404: Couldn't find any results for your search"
      default:
        return error.message
    }
  }

  return (
    <div className="col-12">
      <div className="d-flex justify-content-center">
        <div className="alert alert-danger" role="alert">
          {errorMessage()}
        </div>
      </div>
    </div>
  )
}

export default Error