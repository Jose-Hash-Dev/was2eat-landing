import { Box, Container, Typography, Button, Grid, Divider } from "@mui/material";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function CareersPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      <Container maxWidth="lg" sx={{ py: 6, flex: 1, textAlign: "center" }}>
        <Typography variant="h3" color="#00bf63" gutterBottom>
          Join the Was2Eat Team
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          We’re on a mission to revolutionize how people make food choices using AI. Be part of
          something impactful!
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <Image
            src="/images/banner-transparent.png"
            alt="App screenshot"
            width={1500}
            height={1500}
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
          />
        </Box>

        <Divider sx={{ my: 4, borderBottomWidth: 1, bgcolor: "#00BF63" }} />

        <Typography variant="h4" color="#00bf63" gutterBottom>
          Why Work at Was2Eat?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Innovative AI Technology",
              content: "Work on cutting-edge AI that transforms how people choose what to eat.",
            },
            {
              title: "Flexible Work Culture",
              content: "We believe in a healthy work-life balance and remote-friendly policies.",
            },
            {
              title: "Impactful Mission",
              content:
                "Be part of a team that's making nutrition more accessible and transparent for everyone.",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {item.title}
              </Typography>
              <Typography color="text.secondary">{item.content}</Typography>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderBottomWidth: 1, bgcolor: "#00BF63" }} />

        <Typography variant="h4" color="#00bf63" gutterBottom>
          Current Job Openings
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          We post our latest job opportunities on LinkedIn. Follow us to stay updated!
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#0077B5",
            color: "white",
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            gap: 1,
            maxWidth: "fit-content",
            mx: "auto",
          }}
          href="https://www.linkedin.com/company/was2eat/jobs"
          target="_blank"
        >
          <LinkedInIcon sx={{ fontSize: 24 }} />
          View Jobs on LinkedIn
        </Button>
      </Container>

      <Footer />
    </Box>
  );
}
