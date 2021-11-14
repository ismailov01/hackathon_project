import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import { formHelperTextClasses } from "@mui/material";

const Footer = () => {
    return (
            <>
        <Box>
                <Row>
    <Column>
                        <h2 style={{
                            color: "rgb(213, 65, 12)",
                            textAlign: "center",
                            marginTop: "10px",
                            display: 'flex',
                            flexDirection: 'wrap'
                        }}>
                            Makers Food <LocationOnIcon />
                        </h2>
                        <p
                            style={{
                                color: "white",
                                fontSize: "20px",
                                paddingTop: "10px"
                            }}
                        >Working time: from 10:00 to 22:00</p>
                        <p style={{
                            color: "white",
                            fontSize: "20px",
                            paddingTop: "10px"
                        }} >
                            +996508070785
                        </p>
                        <p style={{
                            color: "white",
                            fontSize: "20px",
                            paddingTop: "10px"
                        }} >  +996554158155</p>
    </Column>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Writing</FooterLink>
                        <FooterLink href="#">Internships</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        <FooterLink href="#">Teaching</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Uttar Pradesh</FooterLink>
                        <FooterLink href="#">Ahemdabad</FooterLink>
                        <FooterLink href="#">Indore</FooterLink>
                        <FooterLink href="#">Mumbai</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
        </Box>
            </>
    );
};
export default Footer;