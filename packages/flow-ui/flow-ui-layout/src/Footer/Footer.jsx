import React from 'react'
import { Container, Box, Flex } from 'theme-ui'
import { FooterLogo } from './Footer.Logo'
import { FooterMenu } from './Footer.Menu'
import { FooterSocial } from './Footer.Social'
import CookieConsent, { Cookies } from "react-cookie-consent";

const styles = {
  wrapper: {
    position: `relative`,
    bg: `footerBg`,
    mt: [5, 6]
  }
}

export const Footer = () => (
  <Box sx={styles.wrapper}>
    <Container variant='compact' sx={styles.container}>
      <Flex variant='layout.footer'>
        <Box>
          <FooterLogo />
        </Box>
        <FooterMenu />
        <Box>
          <FooterSocial />
        </Box>
      </Flex>
    </Container>
    <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
  </Box>
)
