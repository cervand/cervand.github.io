import { Card, Title, Text, List, Stack } from '@mantine/core';

function Role({ title, company, date, bullets = [] }) {
  return (
    <Card shadow="sm" padding="md" mb="md">
      <Stack spacing="xs">
        <Title order={4}>{title}</Title>
        <Text weight={500}>{company}</Text>
        <Text size="sm" c="dimmed">{date}</Text>
        {bullets.length > 0 && (
          <List spacing="xs" size="sm" mt="xs">
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