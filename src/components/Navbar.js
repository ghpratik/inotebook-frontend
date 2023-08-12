// import React from 'react'
// import { Link, useLocation } from  "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import noteContext from '../context/notes/noteContext';
// import logo from '../assets/navbar.svg'

// const Navbar = (props) => {
//     const context = useContext(noteContext);
//     const { userData } = context; //De-strucure karna bolte hai isko
//     const {setProgress} = props;
//     let location = useLocation();
//     let navigate = useNavigate();
//     const handleLogout = ()=>{
//         setProgress(30);
//         localStorage.removeItem('token')
//         setProgress(100);
//         navigate("/login");
//     }

//     return (
//         <nav className={`navbar navbar-expand-lg bg-dark navbar-dark fixed-top ${location.pathname==='/getstarted' ? 'd-none' : ''}`}>
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="img-fluid" width={180} height={25}></img></Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className={`nav-link ${location.pathname==="/"?'active':''}`} aria-current="page" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className={`nav-link ${location.pathname==="/about"?'active':''}`} to="/about">About Us</Link>
//                         </li>
//                     </ul>
//                     {!localStorage.getItem('token') ?
//                     <form className="d-flex" role="search">
//                         <Link className="btn btn-success mx-1 btn-sm" to="/login" role="button">Login</Link>
//                         <Link className="btn btn-primary mx-1 btn-sm" to="/signup" role="button">SignUp</Link>
//                     </form>: <div><button type="button" className="btn btn-success btn-sm"><i className="fa-regular fa-circle-user"></i> {userData.name}</button><button onClick={handleLogout} className="btn btn-danger ms-2 btn-sm">Logout</button></div>}
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar




import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [state, setState] = useState(false)
  const navRef = useRef()

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Contact", path: "/#" },
      { title: "Blog", path: "/blogs" }
  ]

  useEffect(() => {
      
      const body = document.body

      // Disable scrolling
      const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
      if (state) body.classList.add(...customBodyStyle)
      // Enable scrolling
      else body.classList.remove(...customBodyStyle)

      // Sticky strick
      const customStyle = ["sticky-nav", "fixed", "border-b"]
      window.onscroll = () => {
          if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
          else navRef.current.classList.remove(...customStyle)
      }
    }, [state])
    

  return (
      <nav ref={navRef} className="bg-white w-full top-0 z-20">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
              <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
                    <Link to="/">
                        <img
                            src="../assets/full-logo.png"
                            width={120} 
                            height={50}
                            alt="Memopad logo"
                        />
                    </Link>
                  <div className="lg:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${ state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}>
                    <div>
                        <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                            <li className="mt-4 lg:mt-0">
                                <Link to="/login" className="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0">
                                    Login
                                </Link>
                            </li>
                            <li className="mt-8 lg:mt-0">
                                <Link to="/signup" className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="text-gray-600 hover:text-indigo-600">
                                            <Link to={item.path}>
                                                { item.title }
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
              </div>
          </div>
      </nav>
  )
}


export default Navbar
