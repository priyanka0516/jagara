import React, { Component} from "react";
import {Container,Nav,Navbar}from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css'
// import Button from "./Button";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navExpanded: false
    };
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  setNavClose = () => {
    this.setState({ navExpanded: false });
  }

  render() {
    return (
      <Navbar bg="white" variant="dark" expand="lg" sticky="top" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
        <Container>
          <Navbar.Brand>
              <Link to={"/"} className="navbar-brand">   <img src={require('./../assets/Jagara_logo.png')} alt="quotus_logo" className="logotop"/></Link>
          </Navbar.Brand>          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" onClick={this.setNavClose}>
              <Link to={"/"} id="nav">Home</Link>
              <Link to={"/about"}id="nav">About</Link>
              <Link to={"/services"} id="nav">Services</Link>
              <Link to={"/contact"} id="nav">Contact</Link>
            </Nav>          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
//   const [showNav, setShowNav] = useState(true)
//   let Links=[
//     {name:'Home',link:'/'},
//     {name:'About',link:'/about'},
//     {name:'Services',link:'/services'},
//     {name:'Gallery',link:'/gallery'},
//     {name:'Contact',link:'/contact'}
//   ]
//   let [open ,setOpen] = useState(false);
//     return (
//       <div className="sticky top-0 z-30 w-full px-2 py-2 bg-white sm:px-4">
//         <div className="md:flex items-center justify-between bg-white py-1 md:px-10 px-6">
//           <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
//  text-gray-800">
//             <span className="text-3xl text-indigo-600 mr-1 pt-2 pb-2">
//             <img src={require('./images/logosmall.png')} alt="quotus_logo" className="logotop"/>
//             </span>
//           </div>
//           <div className="text-3xl absolute right-4 top-5 cursor-pointer md:hidden"onClick={()=>setOpen(!open)}>
//           <ion-icon name={open ? 'close' : 'menu'}size="large"></ion-icon>
//           </div>
//           <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all-duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md opacity-100 opacity-0`}>
//          {Links.map((link)=>(
//           <li key={link.name} className='md:ml-4  md:my-0 my-7'>
//             <Nav.Link  href ="link.link" className="text-black-400 hover:text-#ff9327-500 duration-100">{link.name}</Nav.Link>
//           </li>
//          ))}
     
//           </ul>
//         </div>
//       </div>
// render() {
// return (
//       <Navbar bg="white" expand="lg" sticky="top" collapseOnSelect>
//       <Container>
//         <Navbar.Brand href="#">
//        <img src={require('./images/logosmall.png')} alt="quotus_logo"/>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll"data-toggle="collapse">
//           <div className="panel-body">
//           <Nav
//             className="ms-auto"
//             navbarScroll>
//             <Link to="/" className="nav-link js-scroll-trigger" >Home</Link>
//             <Link to="/about" className="nav-link js-scroll-trigger" >About</Link>
//             <Link to="/services" className="nav-link js-scroll-trigger">Services</Link>
//             <Link to="/gallery" className="nav-link js-scroll-trigger">Gallery</Link>
//             <Link to="/contact" className="nav-link js-scroll-trigger">Contact</Link>
//           </Nav>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     );
// }
// }
// export default Header;