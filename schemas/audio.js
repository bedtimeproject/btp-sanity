export default {
  name: "audio",
  title: "Audio",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "audio",
      title: "Audio",
      type: "file",
      options: {
        accept: "audio/*",
      },
    },
    {
      name: "attribution",
      title: "Attribution",
      type: "string",
    },
    {
      name: "playground",
      title: "Used on Playground",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "attribution",
    },
  },
};
