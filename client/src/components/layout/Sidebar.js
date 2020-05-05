import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Link, withRouter } from 'react-router-dom'

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed; 
  height: 100%;
  width: 75px;
  z-index: 1; 
  background-color: #222;
  overflow-x: hidden;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: 'props.location.pathname',
            items: [
                {
                    path: '/',
                    name: 'Home',
                    css: 'fa fa-fw fa-home', /* font awesome */
                    key: 1
                },
                {
                    path: '/about',
                    name: 'About',
                    css: 'fa fa-fw fa-clock',
                    key: 2
                },
                {
                    path: '/NoMatch',
                    name: 'NoMatch',
                    css: 'fas fa-hashtag',
                    key: 3
                }
            ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path })
    }

    render() {
        const { items, activePath } = this.state;
        return (
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} active={item.path === activePath} key={item.key} />
                        )
                    })
                }
            </StyledSideNav>
        );

    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
height: 70px;
width: 75px;
text-align: center;
margin-bottom: 0;
a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCV"};
    : hover {
    opacity: 0.7;
    text - decoration: none;
     }
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        )
    }
}

const NavIcon = styled.div`

`;



export const Sidebar = () => {
    return (
        <RouterSideNav>

        </RouterSideNav>
    )
}

export default Sidebar