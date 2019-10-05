import React from 'react'
import { Link } from 'gatsby'

const BreadCrumbs = ({ links }) => {
  return (
    <div style={{margin: '20px 0'}}>
      {links.map((link, index) => {
        const isFinal = index === links.length - 1
        let result
        if (!isFinal) {
          result = <span key={link.label}><Link to={link.to}>{link.label}</Link>{' / '}</span>
        } else {
          result = <span key={link.label}>{link.label}</span>
        }
        return result
      })}
    </div>
  )
}

export default BreadCrumbs
