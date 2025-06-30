import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Feature {
  title: string;
  description: string;
  image: string;
  imagePosition: string;
}

interface FeaturesSliderProps {
  features: Feature[];
}

const FeaturesSlider: React.FC<FeaturesSliderProps> = ({ features }) => {
  const getMobileDescription = (feature: Feature) => {
    if (feature.title === "Analyze Every Product Instantly") {
      return "Scan any food barcode to instantly access comprehensive nutrition analysis from our OpenFoodFacts database. Get dual scoring with official Nutri-Score (A-E rating).";
    } else if (feature.title === "Compare Products Side-by-Side") {
      return "Use our smart comparison mode to compare multiple products side-by-side and find healthier alternatives that match your dietary preferences.";
    } else if (feature.title === "Monitor Your Daily Nutrition") {
      return "Track your daily nutrition intake by marking products as consumed and get comprehensive insights into your eating patterns. Set personalized nutrition goals.";
    }
    return feature.description;
  };
  const getFeatureImage = (feature: Feature) => {
    if (feature.image === "health-tracker-section") {
      return (
        <Image
          src="/images/features-section/health-tracker-section.png"
          alt={feature.title}
          width={240}
          height={160}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      );
    } else if (feature.image.includes("analysis") || feature.image.includes("kinder")) {
      return (
        <Box
          sx={{
            position: "relative",
            height: "160px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/scan-images/product-images/8000500242612.png"
            alt={feature.title}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "auto",
              maxWidth: "100px",
            }}
          />
          {/* Health Score Badge */}
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              px: 1.5,
              py: 0.5,
              border: "2px solid #ff6b35",
              boxShadow: "0 4px 16px rgba(255, 107, 53, 0.3)",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#ff6b35", fontWeight: "bold", fontSize: "0.7rem" }}
            >
              Bad - 21/100
            </Typography>
          </Box>
        </Box>
      );
    } else if (feature.image === "product-comparison") {
      return (
        <Box
          sx={{
            position: "relative",
            height: "160px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Image
            src="/images/scan-images/product-images/8000500242612.png"
            alt="Product 1"
            width={70}
            height={70}
            style={{
              width: "70px",
              height: "auto",
              maxWidth: "70px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0.5,
              color: "#00bf63",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            VS
          </Box>
          <Image
            src="/images/scan-images/product-images/3017620422003.png"
            alt="Product 2"
            width={70}
            height={70}
            style={{
              width: "70px",
              height: "auto",
              maxWidth: "70px",
            }}
          />
        </Box>
      );
    } else {
      return (
        <Image
          src={`/images/scan-images/product-details-screen/${feature.image}`}
          alt={feature.title}
          width={240}
          height={160}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      );
    }
  };

  return (
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
      >
        {features.map((feature, index) => (
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
              }}
            >
              {/* Image Section */}
              <Box sx={{ p: 2, pb: 0 }}>{getFeatureImage(feature)}</Box>

              {/* Content Section */}
              <CardContent sx={{ p: 2.5, pt: 2 }}>
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
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    textAlign: "center",
                  }}
                >
                  {getMobileDescription(feature)}
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
  );
};

export default FeaturesSlider;
