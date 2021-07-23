import React from 'react'
import logo from "../images/quiz_logo.jpg"
import taj from "../images/taj.jpg"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Link} from "react-router-dom"
const LandingPage = () => {
    const [open, setOpen] = React.useState(false);
    //const [email,setEmail]=React.useState("");
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
       <React.Fragment>
           <div style={{overflowX:"hidden"}}>
               <nav className="row p-1 shadow cur">
                   <div className="col-md-3 d-flex justify-content-center mb-2">
                       <img src={logo} alt="" height="60px" width="100px" />
                   </div>
                   <div
                       className="col-md-4 col-6 d-flex justify-content-md-end justify-content-center align-items-center">
                       <h3>Home</h3>
                   </div>
                   <div className="col-md-5 col-6 d-flex justify-content-center align-items-center text-secondary">
                       <h3 className="lin" onClick={handleOpen}>Take Quiz</h3>
                   </div>
               </nav>
               <section className="text-center py-5" style={{backgroundColor:"#ebebeb"}}>
                   <h1 className="cur mb-5">Take our Quiz</h1>
                   <div className="row" style={{width:"80vw" ,margin:"auto"}}>
                       <div className="col-md-4 bounce-in-left">
                           <div className="div d-flex flex-column justify-content-between align-items-center"
                               style={{height:"260px"}}>
                               <i className="fas fa-landmark fs-1"></i>
                               <h1 className="cur">Monuments and <span className="text-danger">Places</span></h1>
                               <p className="rob">Monuments are the historical buildings and structures which have great
                                   cultural or
                                   religious or historical values.</p>
                           </div>
                       </div>
                       <div className="col-md-4 bounce-in-bck">
                           <div className="div d-flex flex-column justify-content-between align-items-center"
                               style={{height:"260px"}}>
                               <i className="fas fa-monument fs-1"></i>
                               <h1 className="cur">Important <span className="text-light">Landmarks</span></h1>
                               <p className="rob">Landmark means a location that has historical importance. The
                                   definition
                                   of a landmark is
                                   a building or an object that helps you identify a location or the boundary of a piece
                                   of
                                   land.</p>
                           </div>
                       </div>
                       <div className="col-md-4 bounce-in-right">
                           <div className="div d-flex flex-column justify-content-between align-items-center"
                               style={{height:"260px"}}>
                               <i className="fas fa-flag fs-1"></i>
                               <h1 className="cur">Independence Of <span className="text-success">India</span></h1>
                               <p className="rob">Independence Day marks the end of British rule in 1947 and the
                                   establishment of a free and
                                   independent Indian nation.</p>
                           </div>
                       </div>
                   </div>
               </section>
               <section className="py-5 bg-secondary">
                   <div className="row">
                       <div className="col-md-6">
                           <img src={taj} alt="" className="img-fluid" />
                       </div>
                       <div className="col-md-6 text-center text-light">
                           <h1 className="cur pt-5">The Rules of Quiz</h1>
                           <ul style={{listStyle:"none",paddingTop:"60px"}} className="rob">
                               <li>
                                   <h5>There will a total of 10 Questions</h5>
                               </li>
                               <li>
                                   <h5>A total of 2 minutes will be given</h5>
                               </li>
                               <li>
                                   <h5>Every correct answer will fetch 1 point</h5>
                               </li>
                               <li>
                                   <h5>There is no negative marking</h5>
                               </li>
                               <button type="button" className="btn btn-info" style={{marginTop:"40px"}} onClick={handleOpen}>
                                   Take Quiz
                               </button>
                           </ul>
                       </div>
                   </div>
               </section>
               <footer className="page-footer font-small bg-info">
                   <div className="text-center py-3">© 2021 Copyright:
                       <a href="https://github.com/R0Y4L23/" style={{textDecoration:"none"}}> Subham Roy</a>
                   </div>
               </footer>
               <Modal style={{display:"flex",justifyContent:'center',alignItems:'center'}} open={open}
                   onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500,}}>
                   <Fade in={open}>
                       <div className="bg-dark text-light p-4 d-flex flex-column justify-content-between" style={{height:"12vh"}}>
                           {/* <h2>Enter Email for sending Quiz Result ( Uses Email JS )</h2>
                           <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                           <Link to="/quiz">
                           <button type="button" className="btn btn-info">
                                   Take Quiz
                            </button>
                            </Link> */}
                            <Link to="/quiz">
                            <button type="button" className="btn btn-danger">
                                   Continue
                            </button>
                            </Link>
                       </div>
                   </Fade>
               </Modal>
           </div>
       </React.Fragment>
    )
}
export default LandingPage