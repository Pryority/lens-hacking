import { PublicationTypes, usePublications } from "../../../lenskit-react";
import { Carousel } from "@mantine/carousel";
import {
  Alert,
  Avatar,
  Card,
  Center,
  Group,
  Image,
  Input,
  Loader,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";

export function PublicationsCard() {
  const [profileId, setProfileId] = useState("0x530a");
  const { publications, loading, error } = usePublications(profileId, [PublicationTypes.Post]);
  useEffect(() => {
    console.log("publications", publications);
  }, [publications]);

  return (
    <div className="h-fit flex">
      <Card withBorder radius="sm">
        <Stack>
          <h2 className="m-0 text-base md:text-2xl leading-5 bg-clip-text text-transparent bg-gradient-to-t from-purple-400 via-violet-500 to-teal-500">
            Comments
          </h2>
          <Input placeholder="0x530a" onChange={(e: any) => setProfileId(e.currentTarget.value)} />

          {publications && publications.items.length > 0 ? (
            <Carousel>
              {publications.items.map((publication) => (
                <Carousel.Slide key={publication.id}>
                  <Card withBorder radius="sm">
                    <Card.Section>
                      <a>
                        <Image src={"cover.jpeg"} height={180} alt="" />
                      </a>
                    </Card.Section>

                    <Text weight={500} component="a" className="mt-5 mb-2 block">
                      {publication?.metadata.name}
                    </Text>

                    <Text size="sm" color="dimmed" lineClamp={4}>
                      {publication?.metadata.content}
                    </Text>

                    <Group position="apart" className="mt-5">
                      <Center>
                        <Avatar src="lens/lens-logo.svg" size={24} radius="xl" mr="xs" />
                        <Text size="sm" inline>
                          {publication?.profile.name}
                        </Text>
                      </Center>
                    </Group>
                  </Card>
                </Carousel.Slide>
              ))}
            </Carousel>
          ) : (
            <Alert color="red">No publications found</Alert>
          )}
          {loading && <Loader />}
          {error && <Alert color="red">{error.message}</Alert>}
        </Stack>
      </Card>
    </div>
  );
}
