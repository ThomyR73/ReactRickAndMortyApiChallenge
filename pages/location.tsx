import React, { useState } from 'react'


import { useQuery, gql } from '@apollo/client'

import Layout from '../components/Layout'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import Loading from '../components/Loading'
import Search from '../components/Search'
import Error from '../components/Error'


const GET_LOCATIONS = gql`
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

interface filter {
  name: string
}

interface Characters {
  name: string;
  image: string;
  id: string
}

interface Location {
  name: string;
  dimension: string;
  type: string;
  id: string;
  residents: Array<Characters>
}

export default function Locations() {
  const initialFilter: filter = {
    name: ""
  };

  const [filter, setFilter] = useState<filter>({ ...initialFilter })

  const { data, loading, error, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: {
      page: 1,
      filter
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network'
  });

  const locationData = data ? data['locations']['results'] : [];
  const { pages, next, prev } = data ? data['locations']['info'] : [];

  const onPrev:Function = () => paginate(data, fetchMore, prev);
  const onNext:Function = () => paginate(data, fetchMore, next);
  const toFirst:Function = () => paginate(data, fetchMore, 1);
  const toLast:Function = () => paginate(data, fetchMore, pages);

  const renderContent = (): React.ReactNode => {
    if (loading) return (
      <Loading/>
    )

    if (error) return (
      <Error error={error}/>
    )

    return (
      <>
        { locationData && (
          <>
            <div className="col-12">
              <div className="row d-flex flex-row justify-content-center justify-content-md-start pl-md-2 align-self-start">
                {locationData.map((location:Location) => {
                  return <Card name={location.name} typeCard="Location" dimension={location.dimension} type={location.type} cardId={location.id} key={location.name} residents={location.residents} button={true}/>
                })}
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
          <Search setFilter={setFilter} searching="locations" />

          {renderContent()}

        </div>
      </div>
    </Layout>
  )
}

const paginate = (data: any, fetchMore: Function, page: number): any => fetchMore({
  variables: {
    page,
  },
  updateQuery: (previousResult, { fetchMoreResult }) => {
    if (!fetchMoreResult) return previousResult;

    return fetchMoreResult;
  }
})