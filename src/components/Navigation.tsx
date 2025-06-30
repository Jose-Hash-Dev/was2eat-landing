"use client";

import {
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "Application", href: "/application" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        width: "100%",
        height: { xs: "70px", md: "80px" },
        top: 0,
        left: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        py: 1,
      }}
    >
      <Container maxWidth="lg" className="container-mobile">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: 0,
            height: "100%",
            alignItems: "center",
            minHeight: { xs: "70px", md: "80px" },
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/logo.png"
              alt="Was2Eat"
              width={150}
              height={50}
              style={{
                width: "auto",
                height: "40px",
              }}
            />
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                fontFamily: "Kalam, cursive",
                fontWeight: 700,
                color: "#2c3e50",
                textDecoration: "none",
                fontSize: { xs: "1.5rem", md: "2rem" },
                ml: { xs: 1, md: 2 },
              }}
            >
              Was2Eat
            </Typography>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  color: "#666",
                  fontWeight: 500,
                  px: 2.5,
                  py: 1,
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  minHeight: "44px",
                  "&:hover": {
                    color: "#00bf63",
                    bgcolor: "rgba(0,191,99,0.08)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={handleClick}
              sx={{
                color: "#666",
                width: "48px",
                height: "48px",
                "&:hover": {
                  color: "#00bf63",
                  bgcolor: "rgba(0,191,99,0.08)",
                },
              }}
            >
              {/* Hamburger Menu Icon */}
              <Box
                component="svg"
                sx={{
                  width: 28,
                  height: 28,
                  fill: "currentColor",
                }}
                viewBox="0 0 24 24"
              >
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </Box>
            </IconButton>

            {/* Mobile Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "12px",
                  mt: 1,
                  minWidth: "180px",
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.label}
                  component={Link}
                  href={item.href}
                  onClick={handleClose}
                  sx={{
                    color: "#666",
                    fontWeight: 500,
                    py: 2,
                    px: 3,
                    minHeight: "48px",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#00bf63",
                      bgcolor: "rgba(0,191,99,0.08)",
                    },
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
