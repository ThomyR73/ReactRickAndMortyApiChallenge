import React, { useState } from 'react'


import { useQuery, gql } from '@apollo/client'

import Layout from '../components/Layout'
import Card from '../components/cards/Card'
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
  const toFirst = () => paginate(data, fetchMore, 1);
  const toLast = () => paginate(data, fetchMore, pages);

  const renderContent = () => {
    if (loading) return (
      <Loading/>
    )

    if (error) return (
      <Error errorMessage={error}/>
    )

    return (
      <>
        { episodesData && (
          <>
            <div className="col-12">
              <div className="row d-flex flex-row justify-content-center justify-content-md-start pl-md-2 align-self-start">
                {episodesData.map(episode => (
                  <Card name={episode.name} typeCard="Episode" episode={episode.episode} release={episode.air_date} cardId={episode.id} key={episode.episode} characters={episode.characters} button={true}/>
                ))}
              </div>
            </div>
            <Pagination next={next} prev={prev} pages={pages} onNext={onNext} onPrev={onPrev} toFirst={toFirst} toLast={toLast}/>
          </>
        )}
      </>
    )
  }

  return (
    <Layout>
      <div className="container-fluid bg-light d-flex align-items-start col-md-10">
        <div className="align-items-start h-100 col-md-12">
          <Search setFilter={setFilter} searching="episodes"/>

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