import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Box from "@mui/material/Box"

import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

import openBook from "assets/Photorealistic-Magazine-MockUp-2.jpg"
import closedBook from "assets/Square-Book-Mockup-By-PuneDesign.jpg"
import quoteBook from "assets/Notebook-Mockup-PSD.jpg"
import paperPouch from "assets/Paper-Pouch-Packaging-MockUp.jpg"
import businessCardsLight from "assets/Business-Card-Mockup-03.jpg"
import blackMug from "assets/Mug-PSD-MockUp-2.jpg"
import justRideShirt from "assets/T-Shirt-MockUp_Front.jpg"
import businessCardsDark from "assets/Business-Card-Mockup-15.jpg"
import beerBottles from "assets/Artisan-Beer-Bottle-MockUp.jpg"
import toteBag from "assets/Canvas-Tote-Bag-MockUp.jpg"
import labels from "assets/Label-Tag-PSD-MockUp.jpg"
import paperBag from "assets/Brown-Paper-Bag-MockUp.jpg"
import yellowMug from "assets/Enamel-Mug-PSD-MockUp2.jpg"
import coolShirt from "assets/Woman-T-Shirt-MockUp-2_Front.jpg"
import record from "assets/Vinyl-Record-PSD-MockUp.jpg"

const images = [
  {
    img: openBook,
    alt: "open book",
    title: "Project Example 1 - Magazine",
    subTitle: "Mockups",
  },
  {
    img: closedBook,
    alt: "closed book",
    title: "Project Example 1 - Square Book",
    subTitle: "Mockups",
  },
  {
    img: quoteBook,
    alt: "open book with quote",
    title: "Project Example 1 - Notebook",
    subTitle: "Mockups",
  },
  {
    img: paperPouch,
    alt: "paper pouch",
    title: "Project Example 1 - Paper Pouch",
    subTitle: "Mockups",
  },
  {
    img: businessCardsLight,
    alt: "business cards light",
    title: "Project Example 1 - Cards",
    subTitle: "Mockups",
  },
  {
    img: blackMug,
    alt: "black mug",
    title: "Project Example 3 - Green",
    subTitle: "Photography",
  },
  {
    img: justRideShirt,
    alt: "Just Ride T-shirt",
    title: "Project Example 3 - Beige",
    subTitle: "Photography",
  },
  {
    img: businessCardsDark,
    alt: "business cards dark",
    title: "Project Example 3 - Grey",
    subTitle: "Photography",
  },
  {
    img: beerBottles,
    alt: "beer bottles",
    title: "Project Example 3 - Blue",
    subTitle: "Photography",
  },
  {
    img: toteBag,
    alt: "tote bag",
    title: "Project Example 3 - Yellow",
    subTitle: "Photography",
  },
  {
    img: labels,
    alt: "labels",
    title: "Project Example 2 - Pink",
    subTitle: "Video",
  },
  {
    img: paperBag,
    alt: "paper bag",
    title: "Project Example 2 - Green",
    subTitle: "Video",
  },
  {
    img: yellowMug,
    alt: "yellow mug",
    title: "Project Example 2 - Grey",
    subTitle: "Video",
  },
  {
    img: coolShirt,
    alt: "Cool T-shirt",
    title: "Project Example 2 - Blue",
    subTitle: "Video",
  },
  {
    img: record,
    alt: "record",
    title: "Custom Project Link opening in a new tab",
    subTitle: "Video",
  }, // weird title casing for record matches the title casing from the portfolio page
]

const styles = {
  textBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  gridImage: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
}

function GridBody() {
  // We have to manually set columns because the ImageList component doens't support mui breakpoints yet
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"))
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"))
  const isMedium = useMediaQuery(theme.breakpoints.up("md"))
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"))
  let columns

  if (isDesktop) {
    columns = 5
  } else if (isMedium) {
    columns = 3
  } else if (isSmall) {
    columns = 2
  } else if (isMobile) {
    columns = 1
  }

  return (
    <Card>
      <CardContent>
        <Typography align="center" variant="h2">
          Portfolio Grid 4
        </Typography>
        <Typography align="center">
          This grid shows the items pages in a popup
        </Typography>
        <ImageList cols={columns} gap={10}>
          {images.map((item) => (
            <ImageListItem
              key={item.img}
              className="grid-image-container"
              sx={{ overflow: "hidden" }}
            >
              <Box sx={styles.textBox}>
                <Typography
                  align="center"
                  sx={{ fontWeight: "700", fontSize: "1.5em" }}
                >
                  {item.title}
                </Typography>
                <Typography align="center">{item.subTitle}</Typography>
              </Box>
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.alt}
                loading="lazy"
                sx={styles.gridImage}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
    </Card>
  )
}

export default GridBody
