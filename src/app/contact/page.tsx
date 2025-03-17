import { Box, Container, Typography, Grid, IconButton, Paper } from "@mui/material";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      <Container maxWidth="lg" sx={{ py: 6, flex: 1 }}>
        <Typography variant="h3" color="#00bf63" textAlign="center" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
          Have questions, feedback, or partnership inquiries? Contact us below.
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ borderRadius: "12px", overflow: "hidden", height: "100%" }}>
              <iframe
                title="Was2Eat Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79414.48149219992!2d9.844452880106267!3d51.53701537014667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4d4b86f98cac7%3A0x425ac6d94ac3e30!2sG%C3%B6ttingen!5e0!3m2!1sen!2sde!4v1742201420243!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: "12px",
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
                <EmailIcon sx={{ fontSize: 40, color: "#00bf63", mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">
                  info@was2eat.com
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}
              ></Box>

              <Typography variant="h6" color="#00bf63" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
                <IconButton
                  href="https://www.linkedin.com/company/was2eat"
                  target="_blank"
                  sx={{ color: "#0077B5" }}
                >
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/was2eat"
                  target="_blank"
                  sx={{ color: "#E1306C" }}
                >
                  <InstagramIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton
                  href="https://twitter.com/was2eat"
                  target="_blank"
                  sx={{ color: "#1DA1F2" }}
                >
                  <TwitterIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
