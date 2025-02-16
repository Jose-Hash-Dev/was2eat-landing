"use client";

import {
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 3,
        width: "100%",
        borderBottomRightRadius: "50px",
        borderBottomLeftRadius: "50px",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
          }}
        >
          {/* Logo */}
          <Link href="/" passHref>
            <Image
              src="/images/logo-transparent-with-text.png"
              alt="Company Logo"
              width={120}
              height={70}
            />
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Button href="/application" color="inherit">
              Application
            </Button>
            <Link href="/team" passHref>
              <Button color="inherit">Team</Button>
            </Link>
            <Button href="/careers" color="inherit">
              Careers
            </Button>
            <Button href="/contact" color="inherit">
              Contact Us
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton sx={{ display: { xs: "flex", md: "none" } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          <Link href="/application" passHref>
            <ListItem component="a" onClick={handleDrawerToggle}>
              <ListItemText primary="Application" />
            </ListItem>
          </Link>

          <Link href="/team" passHref>
            <ListItem component="a" onClick={handleDrawerToggle}>
              <ListItemText primary="Team" />
            </ListItem>
          </Link>

          <Link href="/careers" passHref>
            <ListItem component="a" onClick={handleDrawerToggle}>
              <ListItemText primary="Careers" />
            </ListItem>
          </Link>

          <Link href="/contact" passHref>
            <ListItem component="a" onClick={handleDrawerToggle}>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navigation;
