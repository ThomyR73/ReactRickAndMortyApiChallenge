import Layout from '../components/Layout'
import EpisodeCard from '../components/cards/EpisodeCard'
import LocationCard from '../components/cards/LocationCard'


export default function Episodes() {
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
              <EpisodeCard name="Pilot" episode="S01E01" release="December 2, 2013" episodeId="1"
                characters={
                  [
                    {
                      "name": "pipo",
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
              ></EpisodeCard>
              <EpisodeCard name="Pilo" episode="S01E01" release="December 2, 2013" episodeId="2"
                characters={
                  [
                    {
                      "name": "pip",
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
              ></EpisodeCard>
              <EpisodeCard name="Pil" episode="S01E01" release="December 2, 2013" episodeId="3"
                characters={
                  [
                    {
                      "name": "Hpi",
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
              ></EpisodeCard>
              <EpisodeCard name="Pi" episode="S01E01" release="December 2, 2013" episodeId="4"
                characters={
                  [
                    {
                      "name": "F",
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
              ></EpisodeCard>
              <EpisodeCard name="P" episode="S01E01" release="December 2, 2013" episodeId="5"
                characters={
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
              ></EpisodeCard>


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
    </Layout>
  )
}