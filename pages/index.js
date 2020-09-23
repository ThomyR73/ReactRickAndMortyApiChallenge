import React, { useState } from 'react'


import { useQuery, gql } from '@apollo/client'

import Layout from '../components/Layout'
import CharsCard from '../components/cards/CharsCard'
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

  const renderContent = () => {
    if (loading) return (
      <Loading></Loading>
    )

    if (error) return (
      <Error errorMessage={error}></Error>
    )

    return (
      <>
        { characterData && (
          <div className="col-12">
            <div className="row d-flex flex-row justify-content-center justify-content-md-start pl-md-2 align-self-start">
              {characterData.map(char => {
                return <CharsCard img={char.image} name={char.name} type={char.type} specie={char.species} gender={char.gender} charid={char.id} button={true} key={char.id}></CharsCard>
              })}

            </div>
          </div>
        )}

        { characterData && (
          <Pagination next={next} prev={prev} pages={pages} onNext={onNext} onPrev={onPrev}></Pagination>
        )
        }
      </>
    )
  }


  return (
    <Layout>
      <div className="container-fluid bg-light d-flex align-items-start col-md-10">
        <div className="row d-flex align-items-start h-100 col-md-12">
          <Search setFilter={setFilter} searching="Characters"></Search>

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