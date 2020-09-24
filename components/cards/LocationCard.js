import React from 'react'
import CharsCard from './CharsCard'

const LocationCard = ({ name, dimension, type, residents, locationId }) => {
    const checkResidents = (residents) => {
        const { name } = residents[0]
        if (!name) {
            return false
        }
        return true
    }
    return (
        <div className="card m-2 col-sm-11 col-md-5 col-xl-3">
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                </h5>
                <p className="card-text">
                    {dimension}
                </p>
                <button type="button" className="btn btn-dark" data-toggle="modal" data-target={"#Modal" + locationId}>
                    View More
                </button>
                <div className="modal fade" id={"Modal" + locationId} tabIndex="-1" aria-labelledby={"ModalLabel" + locationId} aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={"ModalLabel" + locationId}>{name}</h5>
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

                                <div className="row ml-1">
                                    <p className="font-weight-bold mr-2">Residents: </p>
                                </div>

                                <div className="row d-flex justify-content-center align-items-strech">

                                    {
                                        checkResidents(residents) ? (
                                            <>

                                                {residents.slice(0, 5).map(char => {
                                                    return (
                                                        <div className="m-2 col-sm-10 col-xl-5" key={char.id}  >
                                                            <CharsCard name={char.name} img={char.image} button={false}></CharsCard>
                                                        </div>
                                                    )
                                                })}
                                            </>
                                        ) : (
                                                <div className="row ml-1">
                                                    <p className="font-weight-bold mr-2">There's no residents found for this location</p>
                                                </div>
                                            )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationCard