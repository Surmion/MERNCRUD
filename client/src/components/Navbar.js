import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { adddata, updateddata, deldata } from './context/ContextProvider';

const Navbar = () => {

    const { udata, setUdata } = useContext(adddata);

    const { updata, setUPdata } = useContext(updateddata);

    const { dltdata, setDLTdata } = useContext(deldata);

    return (<>
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">MERN CRUD</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
        {
            udata ?
                <>
                    <div className="alert alert-success alert-dismissible fade show" role="alert" id="addalert">
                        <strong>{udata.name}</strong>  added succesfully!
                        <button  onClick={(e) => setUdata(null)} type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                </> : undefined
        }
        {
            updata ?
                <>
                    <div className="alert alert-success alert-dismissible fade show" role="alert" id="upalert">
                        <strong>{updata.name}</strong>  updated succesfully!
                        <button onClick={(e) => setUPdata(null)} type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                </> : undefined
        }

        {
            dltdata ?
                <>
                    <div className="alert alert-danger alert-dismissible fade show" role="alert" id="delalert">
                        <strong>{dltdata.name}</strong>  deleted succesfully!
                        <button onClick={(e) => setDLTdata(null)} type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                </> : undefined
        }

        <Outlet />
        </>
    )
}

export default Navbar