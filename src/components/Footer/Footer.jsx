import React from 'react'
import logo from '../../assets/vball-logo.png';
import {Typography} from '@material-ui/core';
import { footerLinks, socialMedia } from "../../constants";
import {Box, Container, ColumnA, ColumnB, FooterLink, FooterBottom} from './styles'

const Footer = () => {

  return (
      <Box style={{borderTop: '1px solid rgba(0, 0, 0, 0.12)'}}>
        <Container>
          <ColumnA>
            <img
              src={logo}
              alt="vballonthebeach"
              height="120px"
              width= '80px'
            />
            <Typography variant="h6" style={{marginTop: "10px"}}>
              A great place to shop all things beach volleyball.
            </Typography>
          </ColumnA>
          <ColumnB>
            {footerLinks.map((footerlink) => (
            <div style={{display: "flex", flexDirection: "column", minWidth: "150px", marginTop: "1rem", marginBottom: "1rem"}} key={footerlink.title}>
              <Typography variant="body2" style={{ fontWeight: "medium", fontSize: "18px", lineHeight: "27px"}}>
                  {footerlink.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" >
              <ul style={{listStyleType: "none", marginTop: "1rem", paddingLeft: "0px"}}>
                {footerlink.links.map((link) => (
                  <li
                    style={{fontWeight: "normal", fontSize: "16px", lineHeight: "24px", cursor: "pointer", marginBottom: "1rem", marginLeft: "0px"}}
                    key={link.name}
                    onClick={() => window.open(link.link)}>
                      <FooterLink>{link.name}</FooterLink>
                  </li>
                ))}
              </ul>
              </Typography>
            </div>
           ))}
          </ColumnB>
        </Container>
        <FooterBottom style={{borderTop: '1px solid black'}}>
          <Typography variant = "body2" style={{textAlign: 'center', fontSize: '18px', lineHeight: "27px" }}>
              Copyright Ⓒ 2022 VballOnTheBeach. All Rights Reserved.
          </Typography>

          <div style={{display: 'flex', flexDirection: "row", marginTop: '0px'}}>
            {socialMedia.map((social) => (
              <img
                style={{width: '21px', height: '21px', cursor: "pointer", marginRight: "6px"}}
                key={social.id}
                src={social.icon}
                alt={social.id}
                onClick={() => window.open(social.link)}
          />
        ))}
      </div>
        </FooterBottom>
      </Box>
  )
}

export default Footer;