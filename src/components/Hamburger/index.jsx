import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
import './hamburger.css';



class HamBurger extends Component {
    constructor(props) {
        super(props);
        this.breakpoint = 750;
        this.state = {
            collapse1: false,
            collapseID: '',
            width: window.innerWidth  
        }

        this.handleWidth = this.handleWidth.bind(this);
    }

    

    componentDidMount() {
        window.addEventListener('resize', this.handleWidth, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWidth, false);
    }
    
    handleWidth() {
        this.setState({width: window.innerWidth});
    }
    
    toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }

    toggleSingleCollapse = collapseId => {
    this.setState({
        ...this.state,
        [collapseId]: !this.state[collapseId]
    });
    }

    render() {
    return (
        <MDBContainer style={{ paddingRight: '30px', zIndex: '100' }}>
            <MDBNavbar color="white dark" style={{transform: 'translatey(10px)' , paddingLeft: '0', borderRadius: '14px' }} light>
            <MDBContainer style={{padding: '10'}}>
                <MDBNavbarBrand>
                    {this.state.width > this.breakpoint ? <img   className="main-logo-burger" src="/mainlogo.jpg" alt="main-logo"/> : <img   className="main-logo-burger" src="/mainmini.jpg" alt="main-logo"/>}
                </MDBNavbarBrand>
                <MDBHamburgerToggler color="#840AF1" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
                <MDBCollapse isOpen={this.state.collapse1} navbar>
                    <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink onClick={()=> this.toggleSingleCollapse('collapse1')} to="/"></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink  onClick={()=> {this.toggleSingleCollapse('collapse1'); document.getElementById('nav-icon1').click()}} to="/">HOME</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink onClick={()=> {this.toggleSingleCollapse('collapse1'); document.getElementById('nav-icon1').click()}} to="/hosting">Shared Server</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink onClick={()=> {this.toggleSingleCollapse('collapse1'); document.getElementById('nav-icon1').click()}} to="/hosting">VPS Packages</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink onClick={()=> {this.toggleSingleCollapse('collapse1'); document.getElementById('nav-icon1').click()}} to="/web-design">Web Design</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink onClick={()=> {this.toggleSingleCollapse('collapse1'); document.getElementById('nav-icon1').click()}} to="/contact">Contact</MDBNavLink>
                    </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
            </MDBNavbar>
        </MDBContainer>
        );
    }
}

export default HamBurger;