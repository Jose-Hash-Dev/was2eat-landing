import { Box, Container, Grid, Link, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import DownloadButtons from "./DownloadButtons";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #ffffff 30%, #f0f8f0 90%)",
        boxShadow: 3,
        width: "100%",
        mt: 4,
        position: "relative",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Mascot Image - Centered */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <Image
          src="/images/mascot/1.png"
          alt="Was2Eat Mascot"
          width={360}
          height={360}
          style={{ width: "360px", height: "auto" }}
        />
      </Box>

      <Container
        sx={{ fontFamily: "'Roboto', 'Arial', sans-serif", py: 6, position: "relative", zIndex: 2 }}
        maxWidth="lg"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
              <Image
                src="/images/logo.png"
                alt="Was2Eat Logo"
                width={50}
                height={50}
                style={{ height: "50px", width: "auto" }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Kalam, cursive",
                  fontWeight: 700,
                  color: "#2c3e50",
                  fontSize: "2rem",
                }}
              >
                Was2Eat
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
              <DownloadButtons />
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              color="#00bf63"
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "Kalam, cursive",
                fontWeight: 400,
                fontSize: "1.3rem",
              }}
            >
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/company" color="inherit" sx={{ textDecoration: "none" }}>
                Company
              </Link>
              <Link href="/contact" color="inherit" sx={{ textDecoration: "none" }}>
                Contact
              </Link>
              <Link href="/help" color="inherit" sx={{ textDecoration: "none" }}>
                Help
              </Link>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              color="#00bf63"
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "Kalam, cursive",
                fontWeight: 400,
                fontSize: "1.3rem",
              }}
            >
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/privacy" color="inherit" sx={{ textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link href="/terms" color="inherit" sx={{ textDecoration: "none" }}>
                Terms of Use
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Typography
              color="#00bf63"
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "Kalam, cursive",
                fontWeight: 400,
                fontSize: "1.3rem",
              }}
            >
              Stay Connected
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}></Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
              <IconButton
                href="https://www.linkedin.com/company/was2eat"
                target="_blank"
                sx={{ p: 0 }}
              >
                <Image
                  src="/images/social-media-icons/linkedin.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  style={{ width: "37px", height: "auto" }}
                />
              </IconButton>
              <IconButton href="https://www.instagram.com/was2eat" target="_blank" sx={{ p: 0 }}>
                <Image
                  src="/images/social-media-icons/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  style={{ width: "32px", height: "32px" }}
                />
              </IconButton>
              <IconButton href="https://www.tiktok.com/@was2eat" target="_blank" sx={{ p: 0 }}>
                <Image
                  src="/images/social-media-icons/tiktok.png"
                  alt="TikTok"
                  width={32}
                  height={32}
                  style={{ width: "32px", height: "32px" }}
                />
              </IconButton>
              <IconButton href="https://www.facebook.com/was2eat" target="_blank" sx={{ p: 0 }}>
                <Image
                  src="/images/social-media-icons/facebook.webp"
                  alt="Facebook"
                  width={32}
                  height={32}
                  style={{ width: "32px", height: "32px" }}
                />
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
