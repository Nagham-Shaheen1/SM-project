import { useState } from 'react';
import { Group, Code, Text } from '@mantine/core';
import {
    IconBellRinging,
    IconFingerprint,
    IconKey,
    IconSettings,
    Icon2fa,
    IconDatabaseImport,
    IconReceipt2,
    IconSwitchHorizontal,
    IconLogout,
} from '@tabler/icons-react';
import classes from '../assets/css/NavbarNested.module.css';

const data = [
    { link: '', label: 'Dashboard', icon: IconBellRinging },
    { link: '', label: 'Roles', icon: IconReceipt2 },
    { link: '', label: 'Admins', icon: IconFingerprint },
    { link: '', label: 'Traders', icon: IconKey },
    { link: '', label: 'Stores', icon: IconDatabaseImport },
    { link: '', label: 'Customers', icon: Icon2fa },
    { link: '', label: 'Shipping', icon: IconSettings },
    { link: '', label: 'Orders', icon: Icon2fa },
    { link: '', label: 'Coupons', icon: IconSettings },
];

export function SideBar() {
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ));

    return (
        <nav className={classes.navbar} style={{backgroundColor:'purple'}}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <div className="logo">
                        <Text size='20px' style={{padding:'15px'}}>SUPER MALL</Text>
                        <Text size='15px' style={{paddingLeft:'30px'}}>control panel</Text>
                    </div>

                </Group>
                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Contact</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </div>
        </nav>
    );
}