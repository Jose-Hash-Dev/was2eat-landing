"use client";

import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import DownloadButtons from "../../components/DownloadButtons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ApplicationPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState("history");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const applicationSections = [
    {
      title: "History",
      description:
        "Track all products you've scanned in the last 30 days with date and time stamps. Monitor your nutrition trends and get personalized recommendations.",
      image: "history",
    },
    {
      title: "Scanner",
      description:
        "Point your camera at any product barcode to instantly discover what's inside your food. Get comprehensive nutrition analysis with dual scoring system.",
      image: "scanner",
    },
    {
      title: "Search",
      description:
        "Find products by name, brand, or category. Browse through our extensive database of food items and discover healthier alternatives with smart filtering options.",
      image: "search",
    },
    {
      title: "Product Details",
      description:
        "Access comprehensive product information including nutrition facts, health scores, and additive analysis. View interactive charts and AI-powered summaries.",
      image: "product-detail",
    },
    {
      title: "Favorites",
      description:
        "Save frequently purchased products for quick access during shopping trips. Organize your favorite healthy options by categories and dietary preferences.",
      image: "favorites",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      {/* Header Section */}
      <Box
        sx={{
          background: "linear-gradient(45deg, #ffffff 30%, #f0f8f0 90%)",
          pt: { xs: 4, md: 5 },
          pb: { xs: 2, md: 2 },
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "Kalam, cursive",
                fontWeight: 400,
                color: "#00BF63",
                fontSize: { xs: "1.7rem", md: "2rem" },
              }}
            >
              Scan. Analyze. Choose Better.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          background: "#ffffff",
        }}
      >
        <Container maxWidth="lg">
          {/* Mobile Layout */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Grid container spacing={3} alignItems="center">
              {/* Mobile Image - Top */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    minHeight: "300px",
                    mb: 3,
                    pl: 3,
                  }}
                >
                  {/* Main App Image */}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      transform: "rotate(-8deg)",
                      mr: 3,
                    }}
                  >
                    <Image
                      src={`/images/application-screen/${currentImage}.png`}
                      alt="Application Feature"
                      width={260}
                      height={160}
                      style={{
                        width: "auto",
                        height: "auto",
                        maxHeight: "380px",
                        transition: "opacity 0.3s ease",
                      }}
                    />
                  </Box>

                  {/* Mobile Mascot */}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src="/images/mascot/1.png"
                      alt="Was2Eat Mascot"
                      width={180}
                      height={180}
                      style={{
                        width: "180px",
                        height: "180px",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>

              {/* Mobile Cards Slider */}
              <Grid item xs={12}>
                <Box sx={{ px: 2 }}>
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={15}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    speed={1000}
                    pagination={{
                      clickable: true,
                      bulletClass: "swiper-pagination-bullet",
                      bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    style={{
                      paddingBottom: "40px",
                      overflow: "visible",
                    }}
                    onSlideChange={(swiper) => {
                      const activeIndex = swiper.realIndex;
                      setCurrentImage(applicationSections[activeIndex].image);
                    }}
                  >
                    {applicationSections.map((section, index) => (
                      <SwiperSlide key={index}>
                        <Card
                          sx={{
                            borderRadius: "16px",
                            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                            overflow: "hidden",
                            background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                            border: "1px solid rgba(0,0,0,0.05)",
                            maxWidth: "280px",
                            margin: "0 auto",
                            height: "200px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <CardContent
                            sx={{
                              p: 2.5,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: 1,
                              textAlign: "center",
                            }}
                          >
                            <Typography
                              variant="h6"
                              component="h3"
                              gutterBottom
                              sx={{
                                fontFamily: "Kalam, cursive",
                                fontWeight: 400,
                                color: "#00BF63",
                                fontSize: "1.2rem",
                                lineHeight: 1.3,
                                mb: 1.5,
                              }}
                            >
                              {section.title}
                            </Typography>

                            <Typography
                              variant="body2"
                              sx={{
                                color: "#666",
                                fontSize: "0.85rem",
                                lineHeight: 1.5,
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {section.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Custom Swiper Styles */}
                  <style jsx global>{`
                    .swiper-pagination-bullet {
                      background: #ccc !important;
                      opacity: 1 !important;
                      width: 8px !important;
                      height: 8px !important;
                      transition: all 0.3s ease !important;
                    }
                    .swiper-pagination-bullet-active {
                      background: #00bf63 !important;
                      width: 20px !important;
                      border-radius: 4px !important;
                    }
                    .swiper-pagination {
                      bottom: 8px !important;
                    }
                    .swiper-slide {
                      transition: transform 0.3s ease !important;
                    }
                  `}</style>
                </Box>

                {/* Mobile Download Buttons */}
                <Box sx={{ mt: 4, textAlign: "center" }}>
                  <DownloadButtons />
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Desktop Layout - Show only on desktop */}
          <Grid
            container
            spacing={2}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {/* Left Side - Sections List */}
            <Grid item xs={12} md={7}>
              <Box sx={{ pr: { md: 2 } }}>
                {applicationSections.map((section, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: 1,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateX(-4px)",
                        "& h3": {
                          color: "#00BF63 !important",
                        },
                      },
                    }}
                    onMouseEnter={() => setCurrentImage(section.image)}
                  >
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                      {/* Logo Bullet Point */}
                      <Image
                        src="/images/logo.png"
                        alt="Was2Eat"
                        width={16}
                        height={16}
                        style={{
                          flexShrink: 0,
                          marginTop: "4px",
                        }}
                      />

                      <Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontFamily:
                              "'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            fontWeight: 500,
                            color: "#666",
                            fontSize: { xs: "1rem", md: "1.2rem" },
                            lineHeight: 1.3,
                            mb: 1,
                            transition: "color 0.3s ease",
                          }}
                        >
                          {section.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily:
                              "'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            color: "#666",
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                            lineHeight: 1.5,
                          }}
                        >
                          {section.description}
                        </Typography>

                        {/* Add download buttons after Favorites section */}
                        {section.title === "Favorites" && (
                          <Box sx={{ mt: 3 }}>
                            <DownloadButtons />
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Right Side - Dynamic Image (smaller and on right) */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "400px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    transform: `translate(${mousePosition.x * 0.01}px, ${
                      mousePosition.y * 0.005
                    }px) rotate(-8deg)`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  <Image
                    src={`/images/application-screen/${currentImage}.png`}
                    alt="Application Feature"
                    width={240}
                    height={150}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxHeight: "400px",
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Data Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: "linear-gradient(45deg, #ffffff 30%, #f0f8f0 90%)",
        }}
      >
        <Container maxWidth="lg">
          {/* Section Title - Centered */}
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: "Kalam, cursive",
              fontWeight: 400,
              color: "#00BF63",
              fontSize: { xs: "1.7rem", md: "2rem" },
              mb: 4,
              textAlign: "center",
            }}
          >
            Our Database
          </Typography>

          <Grid container spacing={2} alignItems="center">
            {/* Left Side - Data Statistics */}
            <Grid item xs={12} md={7}>
              <Box>
                {/* Statistics */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box
                    sx={{
                      background: "#f8f9fa",
                      borderRadius: "50px",
                      px: 3,
                      py: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      border: "1px solid #e9ecef",
                    }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Was2Eat"
                      width={24}
                      height={24}
                      style={{
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily:
                          "'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        color: "#333",
                        fontWeight: 500,
                      }}
                    >
                      3.9+ million food products
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      background: "#f8f9fa",
                      borderRadius: "50px",
                      px: 3,
                      py: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      border: "1px solid #e9ecef",
                    }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Was2Eat"
                      width={24}
                      height={24}
                      style={{
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      component="a"
                      href="https://openfoodfacts.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontFamily:
                          "'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        color: "#333",
                        fontWeight: 500,
                        textDecoration: "none",
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        "&:hover": {
                          color: "#00bf63",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Powered by Open Food Facts
                      <Box
                        component="svg"
                        sx={{
                          width: 16,
                          height: 16,
                          fill: "currentColor",
                        }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </Box>
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      background: "#f8f9fa",
                      borderRadius: "50px",
                      px: 3,
                      py: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      border: "1px solid #e9ecef",
                    }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Was2Eat"
                      width={24}
                      height={24}
                      style={{
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily:
                          "'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        color: "#333",
                        fontWeight: 500,
                      }}
                    >
                      1,000+ new products daily
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Mascot */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "300px",
                }}
              >
                <Image
                  src="/images/mascot/1.png"
                  alt="Was2Eat Mascot"
                  width={500}
                  height={500}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "500px",
                    maxHeight: "500px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
