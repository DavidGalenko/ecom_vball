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
            <Typography variant="body2" style={{marginTop: "10px"}}>
              A great place to buy beach volleyball goods.
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
/*
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);*/

export default Footer;