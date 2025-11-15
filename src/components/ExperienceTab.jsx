// src/components/TabContent/ExperienceTab.jsx
import { Title, Text, Stack } from '@mantine/core';
import Role from './Role';

function ExperienceTab() {
  return (
    <Stack spacing="xl">
      <Stack spacing="md">
        <Title order={2} c="brand.2">Professional Experience</Title>
        <Role
          title="Software Engineer"
          company="Summit Interconnect"
          date="July 2024 – Present"
          bullets={[
            "Automated CI/CD pipelines using Jenkins for legacy systems, integrating unit testing and reducing deployment time by 70%.",
            "Actively spearheading the architecture and implementation of a new PostgreSQL database, including full schema design for manufacturing data and system logs.",
            "Drove full-stack development and built key architectural components for a mission-critical application, translating Figma designs into a modern React.js/Next.js frontend and high-performance Flask/Python API backend that integrates with internal microservices and databases; ensured operational visibility by integrating Azure logging for the application; managed the project lifecycle through UAT and stakeholder collaboration.",
            "Developed high-performance REST API services in Python (Flask/FastAPI) and successfully managed/maintained an existing Nest.JS application, connecting to Azure and on-prem databases (e.g., Azure SQL).",
            "Designed and developed modern GitHub branching and Pull Request workflows—integrated with Jenkins to enforce test-driven and automated review standards—which were subsequently adopted across the entire software division to improve code quality and collaboration.",
            "Architected and implemented a real-time data replication pipeline to synchronize critical on-premises data with Azure (Data Factory), designing the technical system and securing approval from engineering stakeholders.",
            "Managed and secured mission-critical Linux servers and web applications, strictly adhering to compliance standards (e.g., ITAR) through robust configuration, certificate management, and access control."
          ]}
        />
        <Role
          title="Professional Services Intern"
          company="Amazon Web Services"
          date="June 2021 – Sep 2021"
          bullets={[
            "Created a full-stack web app on AWS Amplify using JavaScript, React.js, and HTML5 that streamlined staff assignment by creating an accessible database of employee skill sets, reducing client assistance time significantly.",
            "Crafted and delivered a YAML CloudFormation package for a stakeholder at NASA that instantly deploys a CloudWatch dashboard widget for website health monitoring using Synthetics Canaries, enhancing operational efficiency and enabling rapid issue response."
          ]}
        />
      </Stack>

      <Stack spacing="md">
        <Title order={2} c="brand.2">Projects</Title>
        <Role
          title="Software Developer"
          company="Parkinson's Disease Keyboard Senior Design"
          date="Sep 2021 – Mar 2022"
          bullets={[
            "Developed the keyboard's real-time word prediction software and driver firmware in Python on a Linux based microcontroller.",
            "Optimized software efficiency to improve performance on a CPU that accessed 476,000 words per keystroke."
          ]}
        />
        <Role
          title="Moodtracks.me"
          company="Personal Project"
          date="Sep 2023 - Nov 2023"
          bullets={[
            "Created a serverless web application using Spotify's Web API, JavaScript, Node.js, CSS, and HTML, hosted on Netlify that analyzes the mood of your music based on JSON data from your library.",
            "Created a Figma mock-up of website and transformed it into a fully functional, live website, bringing conceptual designs to life.",
            "Significantly reduced load times by optimizing libraries and frameworks to only use the needed resources.",
            "Implemented OAuth 2.0 protocol to authorize Spotify API requests to ensure secure and private user data."
          ]}
        />
      </Stack>
    </Stack>
  );
}

export default ExperienceTab;