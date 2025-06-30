"use client";

import { Box, Container, Typography, Grid, Card, CardContent, IconButton } from "@mui/material";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";

export default function ContactPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 }, flex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: "Kalam, cursive",
              fontWeight: 400,
              color: "#00BF63",
              fontSize: { xs: "1.7rem", md: "2rem" },
              mb: 2,
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Kalam, cursive",
              fontWeight: 400,
              color: "#2c3e50",
              fontSize: { xs: "1.2rem", md: "1.2rem" },
              mb: 2,
            }}
          >
            Have questions, feedback, or need support? We&apos;re here to help you make the most of
            Was2Eat.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information Cards */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, height: "100%" }}>
              {/* Email Contact */}
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box sx={{ mr: 2 }}>
                      <EmailIcon sx={{ color: "#666", fontSize: 24 }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Kalam, cursive",
                        fontWeight: 400,
                        color: "#2c3e50",
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      Email Support
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#00BF63",
                      fontWeight: 600,
                      mb: 1,
                      fontSize: "1.1rem",
                    }}
                  >
                    info@was2eat.com
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#7f8c8d", lineHeight: 1.6 }}>
                    For general questions, privacy inquiries, data requests, and technical support
                  </Typography>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box sx={{ mr: 2 }}>
                      <AccessTimeIcon sx={{ color: "#666", fontSize: 24 }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Kalam, cursive",
                        fontWeight: 400,
                        color: "#2c3e50",
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      Response Time
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: "#2c3e50", lineHeight: 1.6 }}>
                    We aim to respond to all inquiries within{" "}
                    <strong style={{ color: "#00BF63" }}>48 hours</strong> during business days
                  </Typography>
                </CardContent>
              </Card>

              {/* Support Types */}
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  flex: 1,
                }}
              >
                <CardContent sx={{ p: 3, height: "100%" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kalam, cursive",
                      fontWeight: 400,
                      color: "#2c3e50",
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                      mb: 2,
                    }}
                  >
                    How We Can Help
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box sx={{ flexShrink: 0 }}>
                        <Image
                          src="/images/logo.png"
                          alt="Was2Eat Logo"
                          width={16}
                          height={16}
                          style={{ width: "16px", height: "16px" }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        General questions about Terms and App features
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box sx={{ flexShrink: 0 }}>
                        <Image
                          src="/images/logo.png"
                          alt="Was2Eat Logo"
                          width={16}
                          height={16}
                          style={{ width: "16px", height: "16px" }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        Privacy-related inquiries and data requests
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box sx={{ flexShrink: 0 }}>
                        <Image
                          src="/images/logo.png"
                          alt="Was2Eat Logo"
                          width={16}
                          height={16}
                          style={{ width: "16px", height: "16px" }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        Technical support and app troubleshooting
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box sx={{ flexShrink: 0 }}>
                        <Image
                          src="/images/logo.png"
                          alt="Was2Eat Logo"
                          width={16}
                          height={16}
                          style={{ width: "16px", height: "16px" }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        Partnership inquiries and business questions
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Map and Location */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3, height: "100%" }}>
              {/* Location Info */}
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box sx={{ mr: 2 }}>
                      <LocationOnIcon sx={{ color: "#666", fontSize: 24 }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Kalam, cursive",
                        fontWeight: 400,
                        color: "#2c3e50",
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      Our Location
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#2c3e50",
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    Sepapaja tn 6<br />
                    15551 Tallinn
                    <br />
                    Harju Maakond, Estonia
                  </Typography>
                </CardContent>
              </Card>

              {/* Map */}
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  flex: 1,
                  minHeight: "400px",
                }}
              >
                <iframe
                  title="Was2Eat Location - Tallinn, Estonia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.6234567890123!2d24.7535!3d59.4370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949c2c4b8b8b%3A0x1234567890abcdef!2sSepapaja%206%2C%2015551%20Tallinn%2C%20Estonia!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Social Media Section */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Kalam, cursive",
              fontWeight: 400,
              color: "#00BF63",
              fontSize: { xs: "1.5rem", md: "1.7rem" },
              mb: 3,
            }}
          >
            Follow Us on Social Media
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "#7f8c8d",
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            Stay updated with the latest news, features, and health tips from Was2Eat
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <IconButton
              href="https://www.linkedin.com/company/was2eat"
              target="_blank"
              sx={{
                "&:hover": {
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease-in-out",
                p: 1,
              }}
            >
              <Image
                src="/images/social-media-icons/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
                style={{ width: "32px", height: "32px" }}
              />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/was2eat"
              target="_blank"
              sx={{
                "&:hover": {
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease-in-out",
                p: 1,
              }}
            >
              <Image
                src="/images/social-media-icons/instagram.png"
                alt="Instagram"
                width={32}
                height={32}
                style={{ width: "32px", height: "32px" }}
              />
            </IconButton>
            <IconButton
              href="https://www.tiktok.com/@was2eat"
              target="_blank"
              sx={{
                "&:hover": {
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease-in-out",
                p: 1,
              }}
            >
              <Image
                src="/images/social-media-icons/tiktok.png"
                alt="TikTok"
                width={32}
                height={32}
                style={{ width: "32px", height: "32px" }}
              />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/was2eat"
              target="_blank"
              sx={{
                "&:hover": {
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease-in-out",
                p: 1,
              }}
            >
              <Image
                src="/images/social-media-icons/facebook.webp"
                alt="Facebook"
                width={32}
                height={32}
                style={{ width: "32px", height: "32px" }}
              />
            </IconButton>
          </Box>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
