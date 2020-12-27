import React from 'react'
import { menuData } from '../../data/MenuData'
import { Button } from '../Navbar/Button'
import { CloseIcon, DropDownContainer, DropDownMenu, Icon, DropDownLink, BtnWrap } from './DropDownElement'

const DropDown = ({isOpen, toggle}) => {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <DropDownMenu>
                {menuData.map((item, index) => (
                    <DropDownLink to={item.link} key={index}>
                        {item.title}
                    </DropDownLink>
                ))}
            </DropDownMenu>
            <BtnWrap>
                <Button primary="true" round="true" big="true" to="/content" >
                    Content
                </Button>
            </BtnWrap>
        </DropDownContainer>
    )
}

export default DropDown
