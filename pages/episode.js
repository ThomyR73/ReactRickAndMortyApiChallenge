import React, { useState } from 'react'


import { useQuery, gql } from '@apollo/client'

import Layout from '../components/Layout'
import EpisodeCard from '../components/cards/EpisodeCard'
import Pagination from '../components/Pagination'
import Loading from '../components/Loading'
import Search from '../components/Search'
import Error from '../components/Error'


const GET_EPISODES = gql`
query episodes ($page: Int, $filter:FilterEpisode ){
  episodes(page:$page, filter:$filter){
    results{
      name
      episode
      air_date
      id
      characters{
        name
        image
        id
      }
    }
    info{
      pages
      next
      prev
      count
    }
  }
}
`
export default function Episodes() {
  const initialFilter = {
    name: ""
  };

  const [filter, setFilter] = useState({ ...initialFilter })

  const { data, loading, error, fetchMore } = useQuery(GET_EPISODES, {
    variables: {
      page: 1,
      filter
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network'
  });

  const episodesData = data ? data['episodes']['results'] : [];
  const { pages, next, prev } = data ? data['episodes']['info'] : [];

  const onPrev = () => paginate(data, fetchMore, prev);
  const onNext = () => paginate(data, fetchMore, next);

  const renderContent = () => {
    if (loading) return (
      <Loading></Loading>
    )

    if (error) return (
      <Error errorMessage={error}></Error>
    )

    return (
      <>
        { episodesData && (
          <div className="col-12">
            <div className="row d-flex flex-row justify-content-center justify-content-md-start pl-md-2 align-self-start">
              {episodesData.map(episode => {
                return <EpisodeCard name={episode.name} episode={episode.episode} release={episode.air_date} episodeId={episode.id} key={episode.episode} characters={episode.characters}></EpisodeCard>
              })}
            </div>
          </div>
        )}

        { episodesData && (
          <Pagination next={next} prev={prev} pages={pages} onNext={onNext} onPrev={onPrev}></Pagination>
        )}
      </>
    )
  }

  return (
    <Layout>
      <div className="container-fluid bg-light d-flex align-items-start col-md-10">
        <div className="align-items-start h-100 col-md-12">
          <Search setFilter={setFilter} searching="episodes"></Search>

          {renderContent()}

        </div>
      </div>
    </Layout>
  )
}

const paginate = (data, fetchMore, page) => fetchMore({
  variables: {
    page,
  },
  updateQuery: (previousResult, { fetchMoreResult }) => {
    if (!fetchMoreResult) return previousResult;

    return fetchMoreResult;
  }
})


// import Layout from '../components/Layout'
// import EpisodeCard from '../components/cards/EpisodeCard'
// import LocationCard from '../components/cards/LocationCard'


// export default function Episodes() {
//   return (
//     <Layout>
//       <div className="container-fluid bg-light d-flex align-items-start col-md-10">
//         <div className="row d-flex align-items-start h-100 col-md-12">
//           <div className="col-12">
//             <div className="input-group bg-light text-white mt-3 mb-3">
//               <input type="text" className="form-control" placeholder="Search characters" />
//               <div className="input-group-append">
//                 <button className="btn btn-outline-dark" type="button">Search</button>
//                 <button className="btn btn-outline-danger" type="button">Delete</button>
//               </div>
//             </div>
//             <div className="row d-flex flex-row justify-content-center justify-content-md-start pl-md-2 align-self-start">
//               <EpisodeCard name="Pilot" episode="S01E01" release="December 2, 2013" episodeId="1"
//                 characters={
//                   [
//                     {
//                       "name": "pipo",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg"
//                     },
//                     {
//                       "name": "Ice-T",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg"
//                     },
//                     {
//                       "name": "Magma-Q",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/212.jpeg"
//                     },
//                     {
//                       "name": "Magnesium-J",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/213.jpeg"
//                     },
//                     {
//                       "name": "Numbericon",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/253.jpeg"
//                     }
//                   ]
//                 }
//               ></EpisodeCard>
//               <EpisodeCard name="Pilo" episode="S01E01" release="December 2, 2013" episodeId="2"
//                 characters={
//                   [
//                     {
//                       "name": "pip",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg"
//                     },
//                     {
//                       "name": "Ice-T",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg"
//                     },
//                     {
//                       "name": "Magma-Q",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/212.jpeg"
//                     },
//                     {
//                       "name": "Magnesium-J",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/213.jpeg"
//                     },
//                     {
//                       "name": "Numbericon",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/253.jpeg"
//                     }
//                   ]
//                 }
//               ></EpisodeCard>
//               <EpisodeCard name="Pil" episode="S01E01" release="December 2, 2013" episodeId="3"
//                 characters={
//                   [
//                     {
//                       "name": "Hpi",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg"
//                     },
//                     {
//                       "name": "Ice-T",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg"
//                     },
//                     {
//                       "name": "Magma-Q",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/212.jpeg"
//                     },
//                     {
//                       "name": "Magnesium-J",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/213.jpeg"
//                     },
//                     {
//                       "name": "Numbericon",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/253.jpeg"
//                     }
//                   ]
//                 }
//               ></EpisodeCard>
//               <EpisodeCard name="Pi" episode="S01E01" release="December 2, 2013" episodeId="4"
//                 characters={
//                   [
//                     {
//                       "name": "F",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg"
//                     },
//                     {
//                       "name": "Ice-T",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg"
//                     },
//                     {
//                       "name": "Magma-Q",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/212.jpeg"
//                     },
//                     {
//                       "name": "Magnesium-J",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/213.jpeg"
//                     },
//                     {
//                       "name": "Numbericon",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/253.jpeg"
//                     }
//                   ]
//                 }
//               ></EpisodeCard>
//               <EpisodeCard name="P" episode="S01E01" release="December 2, 2013" episodeId="5"
//                 characters={
//                   [
//                     {
//                       "name": "Hydrogen-F",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg"
//                     },
//                     {
//                       "name": "Ice-T",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg"
//                     },
//                     {
//                       "name": "Magma-Q",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/212.jpeg"
//                     },
//                     {
//                       "name": "Magnesium-J",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/213.jpeg"
//                     },
//                     {
//                       "name": "Numbericon",
//                       "image": "https://rickandmortyapi.com/api/character/avatar/253.jpeg"
//                     }
//                   ]
//                 }
//               ></EpisodeCard>


//             </div>
//           </div>
//           <div className="row d-flex flex-row justify-content-center align-self-end w-100 mt-3">
//             <nav className="align-self-end">
//               <ul className="pagination align-self-end">
//                 <li className="page-item"><a className="page-link">Previous</a></li>
//                 <li className="page-item"><a className="page-link">1</a></li>
//                 <li className="page-item"><a className="page-link">2</a></li>
//                 <li className="page-item"><a className="page-link">3</a></li>
//                 <li className="page-item"><a className="page-link">Next</a></li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }