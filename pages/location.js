import Layout from '../components/Layout'
import LocationCard from '../components/cards/LocationCard'

export default function Characters() {
    return (
        <Layout>
        <div className="container-fluid bg-light d-flex align-items-start col-md-10">
          <div className="row d-flex align-items-start h-100 col-md-12">
            <div className="col-12">
              <div className="input-group bg-light text-white mt-3 mb-3">
                <input type="text" className="form-control" placeholder="Search characters" />
                <div className="input-group-append">
                  <button className="btn btn-outline-dark" type="button">Search</button>
                  <button className="btn btn-outline-danger" type="button">Delete</button>
                </div>
              </div>
              <div className="row d-flex flex-row justify-content-center justify-content-md-start pl-md-2 align-self-start">
                
              <LocationCard name="Alphabetrium" dimension="Replacement Dimension" type="Planet" locationId="1"
                                residents={
                                    [
                                        {
                                            "name": "Hydrogen-F",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg"
                                        },
                                        {
                                            "name": "Ice-T",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg"
                                        },
                                        {
                                            "name": "Magma-Q",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/212.jpeg"
                                        },
                                        {
                                            "name": "Magnesium-J",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/213.jpeg"
                                        },
                                        {
                                            "name": "Numbericon",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/253.jpeg"
                                        }
                                    ]
                                }
                            ></LocationCard>
                            <LocationCard name="Alphabetriu" dimension="Replacement Dimension" type="Planet" locationId="2"
                                residents={
                                    [
                                        {
                                            "name": "Hydrogen-F",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg"
                                        },
                                        {
                                            "name": "Ice-T",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg"
                                        },
                                        {
                                            "name": "Magma-Q",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/212.jpeg"
                                        },
                                        {
                                            "name": "Magnesium-J",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/213.jpeg"
                                        },
                                        {
                                            "name": "Numbericon",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/253.jpeg"
                                        }
                                    ]
                                }
                            ></LocationCard>
                            <LocationCard name="Alphabetri" dimension="Replacement Dimension" type="Planet" locationId="3"
                                residents={
                                    [
                                        {
                                            "name": "Hydrogen-F",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg"
                                        },
                                        {
                                            "name": "Ice-T",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg"
                                        },
                                        {
                                            "name": "Magma-Q",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/212.jpeg"
                                        },
                                        {
                                            "name": "Magnesium-J",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/213.jpeg"
                                        },
                                        {
                                            "name": "Numbericon",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/253.jpeg"
                                        }
                                    ]
                                }
                            ></LocationCard>
                            <LocationCard name="Alphabetr" dimension="Replacement Dimension" type="Planet" locationId="4"
                                residents={
                                    [
                                        {
                                            "name": "Hydrogen-F",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg"
                                        },
                                        {
                                            "name": "Ice-T",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg"
                                        },
                                        {
                                            "name": "Magma-Q",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/212.jpeg"
                                        },
                                        {
                                            "name": "Magnesium-J",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/213.jpeg"
                                        },
                                        {
                                            "name": "Numbericon",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/253.jpeg"
                                        }
                                    ]
                                }
                            ></LocationCard>
                            <LocationCard name="Alphabet" dimension="Replacement Dimension" type="Planet" locationId="5"
                                residents={
                                    [
                                        {
                                            "name": "Hydrogen-F",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg"
                                        },
                                        {
                                            "name": "Ice-T",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg"
                                        },
                                        {
                                            "name": "Magma-Q",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/212.jpeg"
                                        },
                                        {
                                            "name": "Magnesium-J",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/213.jpeg"
                                        },
                                        {
                                            "name": "Numbericon",
                                            "image": "https://rickandmortyapi.com/api/character/avatar/253.jpeg"
                                        }
                                    ]
                                }
                            ></LocationCard>
                
              </div>
            </div>
            <div className="row d-flex flex-row justify-content-center align-self-end w-100 mt-3">
              <nav className="align-self-end">
                <ul className="pagination align-self-end">
                  <li className="page-item"><a className="page-link">Previous</a></li>
                  <li className="page-item"><a className="page-link">1</a></li>
                  <li className="page-item"><a className="page-link">2</a></li>
                  <li className="page-item"><a className="page-link">3</a></li>
                  <li className="page-item"><a className="page-link">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        </Layout >
    )
}