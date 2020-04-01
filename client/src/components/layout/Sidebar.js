import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed; 
  height: 100%;
  width: 75px;
  z-index: 1;
  top: 3.4em; 
  background-color: #222;
  overflow-x: hidden;
  padding-top: 10px;
`;
class SideNav extends React.Component {
    render() {
        return (
            <StyledSideNav>

            </StyledSideNav>
        )
    }

}

export const Sidebar = () => {
    return (
        <SideNav>

        </SideNav>
    )
}

export default Sidebar