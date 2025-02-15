import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";

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
          <Grid item xs={12} md={4}>
            <Image src="/images/logo-transparent.png" alt="Company Logo" width={100} height={100} />
            <Typography fontFamily="roboto" variant="body1" sx={{ mt: 2 }}>
              Scan. Ask AI. Eat Smarter.
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#about" color="inherit">
                About Us
              </Link>
              <Link href="#careers" color="inherit">
                Careers
              </Link>
              <Link href="#contact" color="inherit">
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#privacy" color="inherit">
                Privacy Policy
              </Link>
              <Link href="#terms" color="inherit">
                Terms of Use
              </Link>
              <Link href="#cookies" color="inherit">
                Cookies
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Stay Connected
            </Typography>
            <Typography variant="body1">Subscribe to our newsletter for updates</Typography>
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
