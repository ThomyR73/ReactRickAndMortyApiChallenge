import Layout from '../components/Layout'
import CharsCard from '../components/CharsCard'

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
              <CharsCard img="https://rickandmortyapi.com/api/character/avatar/14.jpeg" name="Alien Morty"
                type="" gender="Male" specie="Alien" button={true}></CharsCard>
                <CharsCard img="https://rickandmortyapi.com/api/character/avatar/14.jpeg" name="Alien Morty"
                type="" gender="Male" specie="Alien" button={true}></CharsCard>
                <CharsCard img="https://rickandmortyapi.com/api/character/avatar/14.jpeg" name="Alien Morty"
                type="" gender="Male" specie="Alien" button={true}></CharsCard>
              <CharsCard img="https://rickandmortyapi.com/api/character/avatar/14.jpeg" name="Alien Morty"
                type="" gender="Male" specie="Alien" button={true}></CharsCard>
                <CharsCard img="https://rickandmortyapi.com/api/character/avatar/14.jpeg" name="Alien Morty"
                type="" gender="Male" specie="Alien" button={true}></CharsCard>
                <CharsCard img="https://rickandmortyapi.com/api/character/avatar/14.jpeg" name="Alien Morty"
                type="" gender="Male" specie="Alien" button={true}></CharsCard>
                
              
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
