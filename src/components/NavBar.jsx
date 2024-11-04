import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../redux/SliceTheme'
import { Button, Collapse, Container, Flex, rem, Switch, Text, useMantineTheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import ToggleTheme from './ToggleTheme'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import '../assets/css/navbar.css'
import { routerLink } from '../router/routes'



const NavBar = () => {


    return (

        <Flex
            justify={'space-around'}
            align={'center'}
            py={'xl'}
            wrap={'wrap'}
            className="navbar"
        >

            <Flex
                justify={'space-around'}
                gap={'md'}
                className='pagesLink'
                wrap={'wrap'}
                mx={350}
            >
                {
                    routerLink.map((link) => {
                        return (
                            <Link to={link.path} >
                                {link.name}
                            </Link>
                        )
                    })
                }
            </Flex>
            <Flex gap={15} align={'center'}>
                <FiSearch />
                <ToggleTheme />
            </Flex>
        </Flex>
    )
}

export default NavBar