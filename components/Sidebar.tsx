import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter()
    return (
        <aside className=" bg-secondary h-auto pt-1 pb-1 text-white col-md-2 limitNavHeight">
            <p className="h4 mt-md-5">Filters</p>
            <form className="limitNavWidth">
                <div className="form-check form-check-inline">
                    <Link href="/">
                        <input className="form-check-input" type="radio" name="filter" id="charters" value="charters" readOnly checked={ router.pathname === "/" }/>
                    </Link>
                    <label className="form-check-label" htmlFor="charters">
                        Characters
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <Link href="location">
                        <input className="form-check-input" type="radio" name="filter" id="locations" value="locations" readOnly checked={ router.pathname === "/location" }/>
                    </Link>
                    <label className="form-check-label" htmlFor="locations">
                        Locations
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <Link href="episode">
                        <input className="form-check-input" type="radio" name="filter" id="episodes" value="episodes" readOnly checked={ router.pathname === "/episode" }/>
                    </Link>
                    <label className="form-check-label" htmlFor="episodes">
                        Episodes
                    </label>
                </div>

            </form>
        </aside>
    )
}

export default Sidebar