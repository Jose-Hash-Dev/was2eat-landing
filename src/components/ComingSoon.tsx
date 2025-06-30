import { Box, Container, Typography, IconButton, Divider } from "@mui/material";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "./Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function ComingSoon({ pageName }: { pageName: string }) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      <Container maxWidth="md" sx={{ py: 6, flex: 1, textAlign: "center" }}>
        <Typography variant="h3" color="#00bf63" gutterBottom>
          {pageName} is Almost Here!
        </Typography>
        <Typography variant="h6" color="text.secondary">
          We’re in the final stages of development. Stay tuned for exciting updates!
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Image
            src="/images/coming-soon.png"
            alt="Coming Soon"
            width={600}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "12px",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 3 }}>
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

          <IconButton href="https://twitter.com/was2eat" target="_blank" sx={{ color: "#1DA1F2" }}>
            <TwitterIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Divider sx={{ width: "80px", bgcolor: "#00bf63", mx: "auto", mb: 1 }} />
          <Typography variant="h5" color="#00bf63" fontWeight="bold">
            Stay Connected
          </Typography>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
