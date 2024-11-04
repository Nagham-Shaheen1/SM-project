import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import './Root.css'
import { useSelector } from 'react-redux'
import { SideBar } from './components/SideBar'

const Root = () => {
    const themeMode = useSelector(state => state.sliceTheme.mode)

    return (
        <div className={themeMode === 'dark' ? 'dark-mode' : 'light-mode'} style={{ display: 'flex', minHeight: '100vh' }}>
            <SideBar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <NavBar style={{ width: '90%', height: '60px', marginBottom: '20px' }} />
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Outlet />
                </div>
            </div>
        </div>


    )
}

export default Root