import React, { useState } from 'react'

interface Props {
    setFilter:  React.Dispatch<React.SetStateAction<{ name: string; }>>,
    searching: String,
}

const Search: React.FunctionComponent<Props> = ({ setFilter, searching }) => {
    const [name, setName] = useState<string>('')

    const onSubmit = (e: React.FormEvent) => {
        console.log(typeof e)
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

    const startSearch = (e: string) => {
        if (e.length >= 3) {
            setName(e)
            setFilter({
                name
            })
        }
        if (e.length === 0) {
            onClear()
        }
        else {
            setName(e)
        }
    }


    return (
        <form className="col-12 form ceroPadding col-md-11 " onSubmit={e => onSubmit(e)}>
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