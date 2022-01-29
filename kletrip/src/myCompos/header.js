import Logo     from "./images/logo.png"
import { Link } from "react-router-dom"

export default function header(props) {

    const mystyle = {
        width : "45%"
      };
  
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/home">
                        <img src = {Logo} style = {mystyle} alt="NoImg"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li><pre> </pre></li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gallery
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {   props.galMenu.map((gm)=>{
                                        console.log(gm);
                                        return (<li key = {gm.sno}><Link className="dropdown-item" to={`/gallery/${gm.sno-1}`}>{gm.nameDep}</Link></li>)
                                        })
                                    }
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><center><Link className="dropdown-item" to="/input">+</Link></center></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                 <Link className="nav-link" to="/history">
                                     Our Story</Link>
                            </li>
                            <li className="nav-item">
                                 <Link className="nav-link" to="/">
                                     Sign Out</Link>
                            </li>
                            <li><pre> </pre></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
        
    )
}
