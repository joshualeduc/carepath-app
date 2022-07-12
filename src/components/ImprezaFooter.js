import * as React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"

// Twitter/Instagram/LinkedIn used as placehold since material didn't have the same icons as portfolio site
import FacebookIcon from "@mui/icons-material/Facebook"
import YouTubeIcon from "@mui/icons-material/YouTube"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const styles = {
  card: { backgroundColor: "transparent", color: "#FFF", boxShadow: "none" },
  socialIcons: {
    background: "#222222",
    padding: "10px",
    borderRadius: "8px",
  },
}

// Posts should change over time, so we have a small functional component while everything else in the footer is more static
function RecentPosts({ post }) {
  const { title, date, commentNum } = post
  return (
    <Box>
      <Typography variant="body1" fontWeight={500} className="pink-hover">
        {title}
      </Typography>
      <Grid container pr={5}>
        <Grid item xs={6}>
          <Typography variant="body2">{date}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" className="pink-hover">
            {commentNum || "No"} Comments
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default function ImprezaFooter() {
  const navItems = ["Home", "About Us", "Contacts"]

  // In a live app these posts would be fetched instead of hard coded
  const posts = [
    {
      title: "This Post Looks Beautiful even with Long Interesting Title",
      date: "April 12, 2019",
      commentNum: 0,
    },
    {
      title: "Satisfaction Lies in the Effort",
      date: "November 21, 2018",
      commentNum: 1,
    },
    {
      title: "Another Interesting Single Post",
      date: "September 20, 2018",
      commentNum: 0,
    },
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box className="footer-section">
        <Container>
          <Grid container spacing={0}>
            {/* Text Block */}
            <Grid item xs={12} md={4}>
              <Card sx={styles.card}>
                <CardContent sx={{ paddingLeft: 0 }}>
                  <Typography variant="h5" fontWeight={500} gutterBottom>
                    Text Block
                  </Typography>
                  <Typography gutterBottom paragraph>
                    Add any content element into this footer section via Visual
                    Composer. Also you can change sizes, colors, background
                    image of all footer sections.
                  </Typography>
                  <Typography paragraph>
                    Goodbuy unconvenient widget-oriented content of footer
                    areas! Customize your footer as any other page section!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Recent Posts */}
            <Grid item xs={12} md={4}>
              <Card sx={styles.card}>
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight={500}
                    gutterBottom
                    className="pink-hover"
                  >
                    Recent Posts
                  </Typography>
                  {posts.map((post) => (
                    <RecentPosts post={post} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
            {/* Contacts */}
            <Grid item xs={12} md={4}>
              <Card sx={styles.card}>
                <CardContent>
                  <Typography variant="h5" fontWeight={500} gutterBottom>
                    Contacts
                  </Typography>
                  <Grid container mb={1}>
                    <Grid item xs={1}>
                      <EmailOutlinedIcon />
                    </Grid>
                    <Grid item xs={11}>
                      <Typography className="pink-hover">
                        info@example.com
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container mb={1}>
                    <Grid item xs={1}>
                      <PhoneOutlinedIcon />
                    </Grid>
                    <Grid item xs={11}>
                      <Typography className="pink-hover">
                        +321 123 4567
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container mb={2}>
                    <Grid item xs={1}>
                      <LocationOnOutlinedIcon />
                    </Grid>
                    <Grid item xs={11}>
                      <Typography className="pink-hover">
                        1600 Amphitheatre Pkwy Mountain View, CA 94043, United
                        States
                      </Typography>
                    </Grid>
                  </Grid>
                  {/* Social Media Group */}
                  <Grid container>
                    <Grid item xs={2}>
                      <FacebookIcon sx={styles.socialIcons} />
                    </Grid>
                    <Grid item xs={2}>
                      <YouTubeIcon sx={styles.socialIcons} />
                    </Grid>
                    <Grid item xs={2}>
                      <TwitterIcon sx={styles.socialIcons} />
                    </Grid>
                    <Grid item xs={2}>
                      <InstagramIcon sx={styles.socialIcons} />
                    </Grid>
                    <Grid item xs={2}>
                      <LinkedInIcon sx={styles.socialIcons} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Bottom Bar With Links */}
      <Toolbar sx={{ backgroundColor: "#222222", color: "#FFF" }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "space-apart",
            justifyItems: "center",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span className="pink-hover">Impreza Theme</span>{" "}
            <span style={{ color: "#999999" }}>by UpSolutions</span>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                sx={{ color: "#FFF", marginRight: "15px" }}
                className="pink-hover"
                underline="none"
              >
                {item}
              </Link>
            ))}
          </Box>
        </Container>
      </Toolbar>
    </Box>
  )
}
