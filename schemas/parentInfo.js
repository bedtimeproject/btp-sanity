export default {
  name: "parentInfo",
  title: "[Parents] Info Section",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
