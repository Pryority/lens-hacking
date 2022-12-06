import { useCreateProfile } from "../../../lenskit-react";
import { Button, Stack } from "@mantine/core";
import { useEffect, useState } from "react";

import { Alert, Card, Input, Title } from "@mantine/core";

export default function CreateProfile(): JSX.Element {
  const { createProfile, profileId, loading, error } = useCreateProfile();
  const [handle, setHandle] = useState("");
  const [profile, setProfile] = useState("");

  const create = () => createProfile(handle);

  return (
    <Card p="lg" radius="md" withBorder>
      <Stack spacing="md">
        <Title variant="gradient" gradient={{ from: "lime", to: "cyan", deg: 45 }} order={2}>
          Create Profile
        </Title>
        <Input
          placeholder={"Enter a handle"}
          value={handle}
          onChange={(e: any) => setHandle(e.target.value)}
        />
        <Button
          variant="gradient"
          gradient={{ from: "lime", to: "cyan", deg: 45 }}
          loading={loading}
          onClick={create}
        >
          Create
        </Button>
        {profileId && <Alert color="green">Profile created: {profileId}</Alert>}
        {error && <Alert color="red">{error.message}</Alert>}
      </Stack>
    </Card>
  );
}
