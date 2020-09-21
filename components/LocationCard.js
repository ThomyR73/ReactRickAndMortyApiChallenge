import React from 'react'
import CharsCard from './CharsCard'

const LocationCard = ({ name, dimension, type, residents }) => {
    return (
        <div className="card m-2">
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                <p className="card-text">
                    {dimension}
                </p>
                <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                    View More
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {type.length ?
                                    (
                                        <div className="row ml-1">
                                            <p className="font-weight-bold mr-2">Type: </p>
                                            <p>{type}</p>
                                        </div>
                                    ) : null
                                }
                                <div className="row ml-1">
                                    <p className="font-weight-bold mr-2">Dimension: </p>
                                    <p>{dimension}</p>
                                </div>
                                {residents.length ? (

                                    <div className="row d-flex justify-content-center">
                                        <div className="xl:col-6 l:col-6 sm:col-12">
                                            <CharsCard name="Hydrogen-F" img="https://rickandmortyapi.com/api/character/avatar/161.jpeg" button={false}></CharsCard>
                                        </div>
                                        <div className="xl:col-6 l:col-6 sm:col-12">
                                            <CharsCard name="Hydrogen-F" img="https://rickandmortyapi.com/api/character/avatar/161.jpeg" button={false}></CharsCard>
                                        </div>
                                        <div className="xl:col-6 l:col-6 sm:col-12">
                                            <CharsCard name="Hydrogen-F" img="https://rickandmortyapi.com/api/character/avatar/161.jpeg" button={false}></CharsCard>
                                        </div>
                                        <div className="xl:col-6 l:col-6 sm:col-12">
                                            <CharsCard name="Hydrogen-F" img="https://rickandmortyapi.com/api/character/avatar/161.jpeg" button={false}></CharsCard>
                                        </div>
                                        <div className="xl:col-6 l:col-6 sm:col-12">
                                            <CharsCard name="Hydrogen-F" img="https://rickandmortyapi.com/api/character/avatar/161.jpeg" button={false}></CharsCard>
                                        </div>
                                    </div>
                                ) : null
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationCard