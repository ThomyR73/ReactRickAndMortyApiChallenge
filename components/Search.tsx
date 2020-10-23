import React, { useState } from 'react'

interface Props {
    setFilter: Function,
    searching: String,
}

const Search = ({ setFilter, searching }: Props) => {
    const [name, setName] = useState('')

    const onSubmit = e => {
        e.preventDefault()

        setFilter({
            name
        })
    }

    const onClear = () => {
        setName("")

        setFilter({
            name: ""
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
        }
        else {
            setName(e)
        }
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