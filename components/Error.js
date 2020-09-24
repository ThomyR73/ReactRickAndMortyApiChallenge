import React from 'react'

const Error = ({ errorMessage }) => {
    return (
        <div className="col-12">
        <div className="d-flex justify-content-center">
          <div className="alert alert-danger" role="alert">
            Error {errorMessage.message}
          </div>

        </div>
      </div>
    )
}

export default Error