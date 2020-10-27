import React from 'react';

interface Characters {
    name: string;
    image: string;
    id: string
}

interface Props {
    name: string,
    image?: string,
    type?: string,
    gender?: string,
    specie?: string,
    episode?: string,
    release?: string,
    characters?: Array<Characters>,
    dimension?: string,
    residents?: Array<Characters>,
    cardId?: string,
    typeCard: string,
    button: boolean
}
interface CheckCharsProps {
    characters: Array<Characters>
}

const Card: React.FunctionComponent<Props> = ({ name, image, type, gender, specie, episode, release, characters, dimension, residents, cardId, typeCard, button }: Props) => {
    const CheckChars = ({ characters }: CheckCharsProps) => {
        const { name } = characters[0]
        return (!!name ? (
            <>
                {
                    characters.slice(0, 5).map(char => (
                        <div className="m-2 col-sm-10 col-xl-5" key={char.id}  >
                            <Card name={char.name} image={char.image} button={false} typeCard="Character" />
                        </div>
                    ))
                }
            </>
        ) : (
                <div className="row ml-1">
                    <p className="font-weight-bold mr-2">
                        {`There are no ${typeCard == "Location" ? "residents" : "characters"} found for this  ${typeCard == "Location" ? "location" : "episode"}`}
                    </p>
                </div>
            )
        )
    }

    return (
        <>
            <div className={button ? "card mb-3 m-md-2 col-sm-11 col-md-3 col-xl-2 ceroPadding" : "card col-sm-12 ceroPadding"}>
                {image && (
                    <img src={image} className="card-img-top fullSizeImg" alt={name} />
                )}
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        {name}
                    </h5>
                    {typeCard != "Character" && (
                        <p className="card-text">
                            {episode ? episode : dimension}
                        </p>
                    )}
                    {button && (
                        <>
                            <button type="button" className="btn btn-dark align-self-start mt-auto" data-toggle="modal" data-target={`#Modal${cardId}`}>
                                View More
                            </button>
                            <div className="modal fade" id={`Modal${cardId}`} tabIndex={-1} aria-labelledby={`ModalLabel${cardId}`} aria-hidden="true">
                                <div className={typeCard != "Character" ? "modal-dialog modal-lg" : "modal-dialog"}>
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id={`ModalLabel${cardId}`}>{name}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            {image && (
                                                <div className="row mb-3">
                                                    <img className="img-fluid col-12" src={image} />
                                                </div>)}
                                            {type && (
                                                <div className="row ml-1">
                                                    <p className="font-weight-bold mr-2">Type: </p>
                                                    <p>{type}</p>
                                                </div>
                                            )}
                                            {gender && (
                                                <div className="row ml-1">
                                                    <p className="font-weight-bold mr-2">Gender: </p>
                                                    <p>{gender}</p>
                                                </div>)}
                                            {specie && (
                                                <div className="row ml-1">
                                                    <p className="font-weight-bold mr-2">Specie: </p>
                                                    <p>{specie}</p>
                                                </div>
                                            )}
                                            {release && (
                                                <div className="row ml-1">
                                                    <p className="font-weight-bold mr-2">Release Date: </p>
                                                    <p>{release}</p>
                                                </div>
                                            )}
                                            {episode && (
                                                <div className="row ml-1">
                                                    <p className="font-weight-bold mr-2">Episode: </p>
                                                    <p>{episode}</p>
                                                </div>
                                            )}
                                            {dimension && (
                                                <div className="row ml-1">
                                                    <p className="font-weight-bold mr-2">Dimension: </p>
                                                    <p>{dimension}</p>
                                                </div>
                                            )}
                                            {typeCard != "Character" && (
                                                <>
                                                    <div className="row ml-1">
                                                        <p className="font-weight-bold mr-2">{typeCard == "Location" ? "Residents:" : "Characters:"}</p>
                                                    </div>
                                                    <div className="row d-flex justify-content-center">
                                                        <CheckChars characters={characters ? characters : residents} />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>




        </>
    );
}

export default Card;