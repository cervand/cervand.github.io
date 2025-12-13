import { Card, Title, Text, List, Stack } from '@mantine/core';

function Role({ title, company, date, bullets = [] }) {
  return (
    <Card shadow="xl" padding="xl" mb="md" bg="brand.8" c="brand.2">
      <Stack spacing="xs">
        <Title order={4}>{title}</Title>
        <Text fw={500}>{company}</Text>
        <Text size="sm" c="brand.2" >{date}</Text>
        {bullets.length > 0 && (
          <List 
            spacing="xs" 
            size="sm" 
            mt="xs"
            pr="md"
          >
            {bullets.map((point, idx) => (
              <List.Item key={idx}>{point}</List.Item>
            ))}
          </List>
        )}
      </Stack>
    </Card>
  );
}

export default Role;