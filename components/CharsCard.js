import React from 'react'

const CharsCard = ({ img, name, type, gender, specie, button }) => {
    return (
        <div className="card m-2">
            <img src={img} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                {button == true ? (
                    <div>
                        <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                            View More
                    </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row mb-3">
                                            <img className="img-fluid col-12" src={img} />
                                        </div>
                                        {type.length ?
                                            (
                                                <div className="row ml-1">
                                                    <p className="font-weight-bold mr-2">Type: </p>
                                                    <p>{type}</p>
                                                </div>
                                            ) : null
                                        }
                                        <div className="row ml-1">
                                            <p className="font-weight-bold mr-2">Gender: </p>
                                            <p>{gender}</p>
                                        </div>
                                        <div className="row ml-1">
                                            <p className="font-weight-bold mr-2">Specie: </p>
                                            <p>{specie}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default CharsCard