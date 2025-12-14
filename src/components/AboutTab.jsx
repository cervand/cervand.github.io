// src/components/TabContent/AboutTab.jsx
import { Title, Text, Stack, Grid, Image, Card } from '@mantine/core';
import profilePic from '../assets/profile.jpg';
import gradPic from '../assets/gradPic.jpg';

function AboutTab() {
  /*
  Notes for me...
  base = mobile
  md = tablet and up
  12 = 100% width
  6 = 50% width
  gutter = space between columns
  */
  return (
    <>
    <Card shadow="glow" padding="xl" radius="lg" mb="xl" bg="brand.8" c="brand.2">
      <Grid gutter={50} align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image 
            src = {profilePic}
            alt="Profile headshot of Andres" 
            radius="xl"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack>
            <Title order={1} size="3.5rem" c="brand.2">Hi! I am Andres</Title>
            <Text c="brand.2">
              Someone excited to work hard on becoming a better engineer.
              This is a summary about me and my background.
            </Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>

    <Card shadow="glow" padding="xl" radius="lg" mb="md" bg="brand.8" c="brand.2">
      {/* A value of mt 30 means margin-top of 30 pixels */}
      <Grid gutter={50} align="center" mt={30}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack>
            <Title order={3} c="brand.2">Background</Title>
            <Text c="brand.2">
              I graduated from the University of California, Irvine in 2022 with a Bachelor of Science in Computer Engineering.
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image 
            src={gradPic}
            alt="Graduation picture of Andres in front of the UCI Engineering School sign" 
            radius="xl"
          />
        </Grid.Col>
      </Grid> 
    </Card>



  </>

  );
}

export default AboutTab;