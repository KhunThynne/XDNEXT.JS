import type { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
  slug: "settings",
  label: "SMTP Settings",
  admin: {
    hideAPIURL: false,
  },
  fields: [
    {
      name: "smtpHost",
      type: "text",
      required: true,
    },
    {
      name: "smtpPort",
      type: "text",
      required: true,
    },
    {
      name: "smtpUser",
      type: "text",
      required: true,
    },
    {
      name: "smtpPass",
      type: "text",
      required: true,
    },
    {
      name: "redirect",
      type: "text",
      required: true,
      admin: {
        description: "This field can be setting redirection app url",
      },
    },
  ],
};
