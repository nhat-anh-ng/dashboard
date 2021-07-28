import { Dashboard, DonutLarge, DragHandle, ExitToApp, Mail, MailOutline, Menu, PersonOutline, Settings } from '@material-ui/icons'
import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <DragHandle />
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <DonutLarge />
                        </li>
                        <li className="sidebarListItem">
                            <Dashboard />
                        </li>
                        <li className="sidebarListItem">
                            <MailOutline />
                        </li>
                        <li className="sidebarListItem">
                            <PersonOutline />
                        </li>
                        <li className="sidebarListItem">
                            <Settings />
                        </li>
                    </ul>
                    <ExitToApp />
                </div>
            </div>
        </div>
    )
}