import React from 'react'

const Loading: React.FunctionComponent = () => (
    <div className="col-12">
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    </div>
)

export default Loading