import React, { ReactNode, useState } from 'react'


import { useQuery, gql } from '@apollo/client'

import Layout from '../components/Layout'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import Loading from '../components/Loading'
import Search from '../components/Search'
import Error from '../components/Error'


const GET_CHARS = gql`
query characters($page: Int, $filter: FilterCharacter){
  characters(page:$page, filter:$filter){
    results{
      name
      image
      type
      gender
      species
      id
    }
    info{
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

  const characterData = data ? data['characters']['results'] : [];
  const { pages, next, prev } = data ? data['characters']['info'] : [];

  const onPrev = () => paginate(data, fetchMore, prev);
  const onNext = () => paginate(data, fetchMore, next);
  const toFirst = () => paginate(data, fetchMore, 1);
  const toLast = () => paginate(data, fetchMore, pages);

  const renderContent = (): ReactNode => {
    if (loading) return (
      <Loading />
    )

    if (error) return (
      <Error error={error} />
    )

    return (
      <>
        { characterData && (
          <>
            <div className="col-12">
              <div className="row d-flex flex-row justify-content-center justify-content-md-start pl-md-2 align-self-start">
                {characterData.map(char => (
                  <Card img={char.image} name={char.name} type={char.type} specie={char.species} gender={char.gender} cardId={char.id} button={true} typeCard="Character" key={char.id} />
                ))}

              </div>
            </div>
            <Pagination next={next} prev={prev} pages={pages} onNext={onNext} onPrev={onPrev} toFirst={toFirst} toLast={toLast} />
          </>
        )}
      </>
    )
  }


  return (
    <Layout>
      <div className="container-fluid bg-light d-flex align-items-start col-md-10">
        <div className="align-items-start h-100 col-md-12">
          <Search setFilter={setFilter} searching="characters" />

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