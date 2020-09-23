import React, { useState } from 'react'


import { useQuery, gql } from '@apollo/client'

import Layout from '../components/Layout'
import LocationCard from '../components/cards/LocationCard'
import Pagination from '../components/Pagination'
import Loading from '../components/Loading'
import Search from '../components/Search'
import Error from '../components/Error'


const GET_CHARS = gql`
query locations($page: Int, $filter: FilterLocation){
    locations(page:$page, filter: $filter){
      results{
        name
        dimension
        type
        id
        residents{
          name
          image
          id
        }
      }
      info{
        count
        next
        prev
        pages
      }
    }
  }
`
export default function Characters() {
  const initialFilter = {
    name: ""
  };

  const [filter, setFilter] = useState({ ...initialFilter })

  const { data, loading, error, fetchMore } = useQuery(GET_CHARS, {
    variables: {
      page: 1,
      filter
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network'
  });

  const locationData = data ? data['locations']['results'] : [];
  const { pages, next, prev } = data ? data['locations']['info'] : [];

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
        { locationData && (
          <div className="col-12">
            <div className="row d-flex flex-row justify-content-center justify-content-md-start pl-md-2 align-self-start">
              {locationData.map(location => {
                return <LocationCard name={location.name} dimension={location.dimension} type={location.type} locationId={location.id} key={location.name} residents={location.residents}></LocationCard>
              })}
            </div>
          </div>
        )}

        { locationData && (
          <Pagination next={next} prev={prev} pages={pages} onNext={onNext} onPrev={onPrev}></Pagination>
        )}
      </>
    )
  }

  return (
    <Layout>
      <div className="container-fluid bg-light d-flex align-items-start col-md-10">
        <div className="row d-flex align-items-start h-100 col-md-12">
          <Search setFilter={setFilter} searching="locations"></Search>

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