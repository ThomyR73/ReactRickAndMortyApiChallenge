import React from 'react'
import CharsCard from './CharsCard'

const LocationCard = ({ name, episode, release, characters, episodeId }) => {
    const checkChars = (characters) => {
        const { name } = characters[0]
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
                    {episode}
                </p>
                <button type="button" className="btn btn-dark" data-toggle="modal" data-target={"#Modal" + episodeId}>
                    View More
                </button>
                <div className="modal fade" id={"Modal" + episodeId} tabIndex="-1" aria-labelledby={"ModalLabel" + episodeId} aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={"ModalLabel" + episodeId}>{name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row ml-1">
                                    <p className="font-weight-bold mr-2">Release Date: </p>
                                    <p>{release}</p>
                                </div>
                                <div className="row ml-1">
                                    <p className="font-weight-bold mr-2">Episode: </p>
                                    <p>{episode}</p>
                                </div>
                                <div className="row ml-1">
                                    <p className="font-weight-bold mr-2">Characters: </p>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    {checkChars(characters) ? (

                                        characters.slice(0, 5).map(char => {
                                            return (
                                                <div className="col-sm-10 col-xl-5  " key={char.id}>
                                                    <CharsCard name={char.name} img={char.image} key={char.id} button={false}></CharsCard>
                                                </div>
                                            )
                                        })

                                    ) : (
                                            <div className="row ml-1">
                                                <p className="font-weight-bold mr-2">There's no characters found for this episode</p>
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