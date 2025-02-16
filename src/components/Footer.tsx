import { Box, Container, Grid, Link, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import DownloadButtons from "./DownloadButtons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 3,
        width: "100%",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        mt: 4,
      }}
    >
      <Container sx={{ fontFamily: "'Roboto', 'Arial', sans-serif", py: 6 }} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Image
              src="/images/logo-transparent-with-text.png"
              alt="Company Logo"
              width={100}
              height={100}
              style={{ height: "auto", width: "120px" }}
            />
            <Typography fontFamily="roboto" variant="body1" sx={{ mt: 2 }} color="#00bf63">
              Scan. Ask AI. Eat Smarter.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
              <DownloadButtons />
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography color="#00bf63" variant="h6" gutterBottom>
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/team" color="inherit" sx={{ textDecoration: "none" }}>
                Team
              </Link>
              <Link href="/careers" color="inherit" sx={{ textDecoration: "none" }}>
                Careers
              </Link>
              <Link href="/contact" color="inherit" sx={{ textDecoration: "none" }}>
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography color="#00bf63" variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/privacy" color="inherit" sx={{ textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link href="/terms" color="inherit" sx={{ textDecoration: "none" }}>
                Terms of Use
              </Link>
              <Link href="/cookies" color="inherit" sx={{ textDecoration: "none" }}>
                Cookies
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Typography color="#00bf63" variant="h6" gutterBottom>
              Stay Connected
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}></Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
              <IconButton
                href="https://www.linkedin.com/company/was2eat"
                target="_blank"
                sx={{ color: "#0077B5" }}
              >
                <LinkedInIcon sx={{ fontSize: 32 }} />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/was2eat"
                target="_blank"
                sx={{ color: "#E1306C" }}
              >
                <InstagramIcon sx={{ fontSize: 32 }} />
              </IconButton>
              <IconButton
                href="https://twitter.com/was2eat"
                target="_blank"
                sx={{ color: "#1DA1F2" }}
              >
                <TwitterIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Was2Eat. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
