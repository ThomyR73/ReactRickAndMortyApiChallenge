import React, { useState } from 'react'

const Search = ({ setFilter, searching }) => {
    const [name, setName] = useState('')
    const [reLoad, setReLoad] = useState(false)

    const onSubmit = e => {
        e.preventDefault()

        setFilter({
            name
        })
    }

    const onClear = () => {
        setName("")

        setFilter({
            name
        })
    }

    const startSearch = (e) => {
        if (e.length >= 3) {
            setName(e)
            setFilter({
                name
            })
        }
        if (e.length == 0) {
            onClear()
            setReLoad(true)
        }
        else {
            setName(e)
        }
    }

    if(reLoad){
        onClear()
        setReLoad(false)
    }


    return (
        <form className="col-12 form ceroPadding col-md-11 " onSubmit={onSubmit}>
            <div className="input-group bg-light text-white mt-3 mb-3 pl-md-3 pr-md-4">
                <input type="text" className="form-control" placeholder={`Search ${searching}`} value={name} onChange={e => startSearch(e.target.value)} />
                <div className="input-group-append">
                    <button className="btn btn-outline-dark" type="submit">Search</button>
                    <button className="btn btn-outline-danger" type="submit" onClick={onClear}>Delete</button>
                </div>
            </div>
        </form>
    )

}

export default Search