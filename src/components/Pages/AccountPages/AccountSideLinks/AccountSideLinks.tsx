import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfilePageSideLinks = [
  'My Account',
  'eGift Card',
  'Orders',
  'Contact Details',
  'Address Book',
  'Reviews',
  'My Favourites',
  'Commenication Preferences',
  'Chage Passowrd'
]

const AccountSideLinks = () => {
  return (
    <aside>
      {ProfilePageSideLinks.map((item, index) => (
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={item.split(' ').join('-').toLowerCase()}
          key={index}
          onClick={() => {
            window.scrollTo(0, 0)
          }}>
          {item}
        </NavLink>
      ))}
    </aside>
  )
}

export default AccountSideLinks
