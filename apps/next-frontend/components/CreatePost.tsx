import { PublicationMainFocus, usePost } from "../../../lenskit-react";
import { Alert, Button, Card, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { v4 as uuidv4 } from "uuid";

export default function CreatePost() {
  const { post, publicationId, loading, error } = usePost();
  const form = useForm({
    initialValues: {
      version: "2.0.0",
      mainContentFocus: PublicationMainFocus.TEXT_ONLY,
      metadata_id: uuidv4(),
      description: "",
      locale: "en-US",
      content:
        "",
      external_url: "https://github.com/daoleno/lenskit",
      image: null,
      imageMimeType: null,
      name: "",
      attributes: [],
      tags: [""],
      appId: "lenskit-github",
      profileId: "0x530a",
    },
  });

  const handleCreatePost = async (values: any) => {
    const content = {
      version: "2.0.0",
      mainContentFocus: PublicationMainFocus.TEXT_ONLY,
      metadata_id: uuidv4(),
      name: values.name,
      description: values.description,
      content: values.content,
      locale: "en-US",
      external_url: values.external_url,
      image: values.image,
      imageMimeType: values.imageMimeType,
      attributes: [
        {
          traitType: "string",
          value: "yes this is custom",
          key: "custom_field",
        },
      ],
      tags: ["lenskit"],
      appId: "lenskit-github",
    };
    await post(values.profileId, content);
  };

  return (
    <form onSubmit={form.onSubmit(handleCreatePost)} className="">
      <Card withBorder>
        <Stack spacing="md">
          
          <h2 className="m-0 text-base md:text-2xl leading-5 bg-clip-text text-transparent bg-gradient-to-t from-purple-400 via-violet-500 to-teal-500">
            Leave a Comment
          </h2>
          
          <TextInput
            label="ProfileID"
            placeholder="0x530a"
            required
          />
          <TextInput label="Name" placeholder="Enter your name" required {...form.getInputProps("name")} />
          <TextInput
            label="Tags"
            placeholder="Tags can be used in the future for filtering posts (eg, 'lenskit', 'DIY')"
            required
            {...form.getInputProps("description")}
          />
          <TextInput
            label="External URL"
            placeholder="Enter an external URL to link your post to"
            {...form.getInputProps("external_url")}
          />
          <TextInput
            label="Comment"
            placeholder="Leave your comment here"
            required
            {...form.getInputProps("content")}
          />
          <Button
            variant="gradient"
            gradient={{ from: "violet", to: "cyan", deg: 45 }}
            w="full"
            type="submit"
            loading={loading && !error}
          >
            Submit
          </Button>
          <h3 className="font-light m-0 text-xs text-center"> Only a Profile ID is required to leave a comment.</h3>
          {error && <Alert color="red">{error.message}</Alert>}
          {publicationId && (
            <Alert color="green" title="Publication ID">
              Create Post Success! Publication ID: {publicationId}
            </Alert>
          )}
        </Stack>
      </Card>
    </form>
  );
}
