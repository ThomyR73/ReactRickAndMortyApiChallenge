import React from 'react'

const CharsCard = ({ img, name, type, gender, specie, button, charid }) => {
    return (
        <div className={button ? "card m-md-2 col-sm-11 col-md-5 col-xl-3 ceroPadding" : "card col-sm-12 ceroPadding"}>
            <img src={img} className="card-img-top fullSizeImg"/>
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                {button == true ? (
                    <div>
                        <button type="button" className="btn btn-dark" data-toggle="modal" data-target={"#Modal"+charid}>
                            View More
                    </button>
                        <div className="modal fade" id={"Modal"+charid} tabIndex="-1" aria-labelledby={"ModalLabel"+charid} aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id={"ModalLabel"+charid}>{name}</h5>
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