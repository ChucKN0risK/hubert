import type { Meta, StoryObj } from "@storybook/react"

import Folder from "./Folder";
const meta = {
  title: "02-molecules/Folder",
  component: Folder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    item: {
      "id": "6ddcb5f4-5598-4d45-9cd1-e9c675dd85b2",
      "name": "AI",
      "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/AI",
      "size": 128,
      "lastModified": "2024-04-30T04:10:33.324Z",
      "children": [
        {
          "id": "4f41c708-fb4e-46e0-8def-3da420395dcf",
          "name": "jan.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/AI/jan.jpg",
          "size": 430164,
          "lastModified": "2024-04-30T04:01:50.009Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "b662ec3e-75e9-4e4e-9e0d-9f95a2a0c9da",
          "name": "superwhisper.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/AI/superwhisper.jpg",
          "size": 549304,
          "lastModified": "2024-04-30T04:09:49.981Z",
          "children": [],
          "depth": 2
        }
      ],
      "depth": 1
    },
  },
} satisfies Meta<typeof Folder>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story['render'] = (args) => (
  <ul className="u-list-style:none">
    <Folder {...args} />
  </ul>
);

export const Default: Story = {
  render: Template
};

export const withSubFolders: Story = {
  args: {
    item: {
      "id": "848c239d-b68d-4bff-91b6-d7a45b0d9953",
      "name": "Design Tokens",
      "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens",
      "size": 3616,
      "lastModified": "2024-10-23T12:26:38.650Z",
      "children": [
        {
          "id": "f5ede0f0-54bc-4cb4-818e-0910794230cd",
          "name": "Intuit",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Intuit",
          "size": 128,
          "lastModified": "2024-10-13T00:02:11.384Z",
          "children": [
            {
              "id": "edf06bcb-9fb5-4ff2-b553-ab8c6fcbb6c5",
              "name": "intuit_design_tokens_workflow.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Intuit/intuit_design_tokens_workflow.jpg",
              "size": 100764,
              "lastModified": "2024-10-13T00:02:11.384Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "3a88a84c-76af-451f-9e6e-2371d5288461",
              "name": "intuit_durable-framework.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Intuit/intuit_durable-framework.jpg",
              "size": 54378,
              "lastModified": "2024-10-13T00:02:11.385Z",
              "children": [],
              "depth": 3
            }
          ],
          "depth": 2
        },
        {
          "id": "e9b4241d-b3be-4f94-ae26-1ac293b4d5d0",
          "name": "OKLab-sRGB-perceived-brightness-comparison.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/OKLab-sRGB-perceived-brightness-comparison.jpg",
          "size": 67604,
          "lastModified": "2024-04-21T10:59:53.941Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "861c6f67-12ea-4e23-817b-36773548617a",
          "name": "Scaleway Design Tokens",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Scaleway Design Tokens",
          "size": 352,
          "lastModified": "2024-10-16T21:37:38.255Z",
          "children": [
            {
              "id": "149f9e38-31a7-4242-bf15-d11fad7977c0",
              "name": "scaleway-components-usage-metrics-1.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Scaleway Design Tokens/scaleway-components-usage-metrics-1.jpg",
              "size": 2367651,
              "lastModified": "2024-10-16T21:37:38.157Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "8fc93f2f-ea7a-4633-8571-5990c3a64364",
              "name": "scaleway-components-usage-metrics-2.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Scaleway Design Tokens/scaleway-components-usage-metrics-2.jpg",
              "size": 2061187,
              "lastModified": "2024-10-16T21:37:38.167Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "6b0bb0d4-0672-41ac-8606-6fe6806cf238",
              "name": "scaleway-figma-tokens-flow.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Scaleway Design Tokens/scaleway-figma-tokens-flow.jpg",
              "size": 2287133,
              "lastModified": "2024-10-16T21:37:38.175Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "fd5524d6-30af-41dd-ab7e-4bb56a2b16cd",
              "name": "scaleway-icon-tokens-usage.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Scaleway Design Tokens/scaleway-icon-tokens-usage.jpg",
              "size": 1966794,
              "lastModified": "2024-10-16T21:37:38.185Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "87be5b32-3f9e-4c33-81a3-fd73519be3b8",
              "name": "scaleway-other-token-categories.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Scaleway Design Tokens/scaleway-other-token-categories.jpg",
              "size": 1949678,
              "lastModified": "2024-10-16T21:37:38.192Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "769f4ed3-a556-4faf-b6ae-321270bbe5d1",
              "name": "scaleway-specific-icon-tokens.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Scaleway Design Tokens/scaleway-specific-icon-tokens.jpg",
              "size": 2068668,
              "lastModified": "2024-10-16T21:37:38.218Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "08290866-4354-4790-a1fa-bcde23e0c15c",
              "name": "scaleway-theme-generator.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Scaleway Design Tokens/scaleway-theme-generator.jpg",
              "size": 2401125,
              "lastModified": "2024-10-16T21:37:38.235Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "11bdf5af-5c3a-44c4-a1e2-e9e9b195d131",
              "name": "scaleway-tokens-lifecycle.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Scaleway Design Tokens/scaleway-tokens-lifecycle.jpg",
              "size": 1849407,
              "lastModified": "2024-10-16T21:37:38.254Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "284b1af5-4145-40aa-a735-eb3c81ecba48",
              "name": "scaleway-tokens-usage.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Scaleway Design Tokens/scaleway-tokens-usage.jpg",
              "size": 2403720,
              "lastModified": "2024-10-16T21:37:38.263Z",
              "children": [],
              "depth": 3
            }
          ],
          "depth": 2
        },
        {
          "id": "5fca82e5-24e0-4a66-a87e-8eaaee806b07",
          "name": "Source - Design Tokens Part 1 - Types & Uses",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses",
          "size": 512,
          "lastModified": "2023-04-13T12:46:52.514Z",
          "children": [
            {
              "id": "cd6d1304-95eb-4d56-b2d7-44430ee29668",
              "name": "Screenshot 2023-04-13 at 14-45-06 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-45-06 (91) Publier LinkedIn.png",
              "size": 41629,
              "lastModified": "2023-04-13T12:45:10.027Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "83ef45ec-2371-42f5-ac8e-1593cb09f01e",
              "name": "Screenshot 2023-04-13 at 14-45-14 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-45-14 (91) Publier LinkedIn.png",
              "size": 76943,
              "lastModified": "2023-04-13T12:45:16.700Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "5a4f031a-045b-481d-af78-c41ae9b75973",
              "name": "Screenshot 2023-04-13 at 14-45-21 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-45-21 (91) Publier LinkedIn.png",
              "size": 71422,
              "lastModified": "2023-04-13T12:45:23.917Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "4a3c35da-7106-42ee-9667-f85716be584f",
              "name": "Screenshot 2023-04-13 at 14-45-27 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-45-27 (91) Publier LinkedIn.png",
              "size": 104857,
              "lastModified": "2023-04-13T12:45:29.231Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "75b7d331-9dff-4b9e-9aca-a51209f20bd1",
              "name": "Screenshot 2023-04-13 at 14-45-33 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-45-33 (91) Publier LinkedIn.png",
              "size": 112645,
              "lastModified": "2023-04-13T12:45:34.816Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "22e10aee-01af-4a1c-b0d7-d25b0bb7455b",
              "name": "Screenshot 2023-04-13 at 14-45-38 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-45-38 (91) Publier LinkedIn.png",
              "size": 83473,
              "lastModified": "2023-04-13T12:45:40.228Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "9906f854-d825-445d-8a13-f28dde29a388",
              "name": "Screenshot 2023-04-13 at 14-45-44 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-45-44 (91) Publier LinkedIn.png",
              "size": 81337,
              "lastModified": "2023-04-13T12:45:45.287Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "3a655d9e-7533-40c0-b30b-b9cee80228d7",
              "name": "Screenshot 2023-04-13 at 14-45-48 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-45-48 (91) Publier LinkedIn.png",
              "size": 108789,
              "lastModified": "2023-04-13T12:45:49.985Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "bd45ef0c-4224-4dcc-8587-9f2537bf3fdb",
              "name": "Screenshot 2023-04-13 at 14-45-53 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-45-53 (91) Publier LinkedIn.png",
              "size": 113358,
              "lastModified": "2023-04-13T12:45:54.500Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "869675f9-0070-49ec-9345-54b27474476e",
              "name": "Screenshot 2023-04-13 at 14-45-57 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-45-57 (91) Publier LinkedIn.png",
              "size": 91818,
              "lastModified": "2023-04-13T12:45:58.673Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "7f839ae2-f8b6-4850-8cf7-a4c6559484c7",
              "name": "Screenshot 2023-04-13 at 14-46-02 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-46-02 (91) Publier LinkedIn.png",
              "size": 102177,
              "lastModified": "2023-04-13T12:46:04.074Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "8fa8f90b-9604-44af-85e8-b803e2efcb66",
              "name": "Screenshot 2023-04-13 at 14-46-07 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-46-07 (91) Publier LinkedIn.png",
              "size": 81774,
              "lastModified": "2023-04-13T12:46:08.823Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "2658bdf3-a6e9-49eb-a196-98b981132383",
              "name": "Screenshot 2023-04-13 at 14-46-12 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-46-12 (91) Publier LinkedIn.png",
              "size": 93909,
              "lastModified": "2023-04-13T12:46:13.612Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "8bf59024-62d7-45f4-8ce5-801413f96cbd",
              "name": "Screenshot 2023-04-13 at 14-46-17 (91) Publier LinkedIn.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Source - Design Tokens Part 1 - Types & Uses/Screenshot 2023-04-13 at 14-46-17 (91) Publier LinkedIn.png",
              "size": 80995,
              "lastModified": "2023-04-13T12:46:18.471Z",
              "children": [],
              "depth": 3
            }
          ],
          "depth": 2
        },
        {
          "id": "ebf93d7a-3c1a-488b-8380-3bec66f5a61e",
          "name": "State of Design Tokens 2022",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/State of Design Tokens 2022",
          "size": 288,
          "lastModified": "2022-12-12T09:33:22.008Z",
          "children": [
            {
              "id": "9577bb22-459d-439f-97c9-53283e0daef7",
              "name": "are-your-design-tokens-automatically-updated.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/State of Design Tokens 2022/are-your-design-tokens-automatically-updated.png",
              "size": 244692,
              "lastModified": "2022-12-12T09:33:03.470Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "3221f72b-7ad3-4910-9018-0f2b5c0f8538",
              "name": "do-you-alias-your-design-token.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/State of Design Tokens 2022/do-you-alias-your-design-token.png",
              "size": 233413,
              "lastModified": "2022-12-12T09:33:22.009Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "25c313e6-fd31-4f59-bdfc-cbcfdc776ccb",
              "name": "do-you-theme-your-design-tokens.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/State of Design Tokens 2022/do-you-theme-your-design-tokens.png",
              "size": 287519,
              "lastModified": "2022-12-12T09:33:12.918Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "f59fe2bb-40f7-4957-a787-cff06d2f858d",
              "name": "do-you-version-your-design-tokens.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/State of Design Tokens 2022/do-you-version-your-design-tokens.png",
              "size": 255431,
              "lastModified": "2022-12-12T09:33:07.978Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "7b16077f-2277-41b8-84da-cc6caf4583dc",
              "name": "how-many-design-tokens-do-you-have.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/State of Design Tokens 2022/how-many-design-tokens-do-you-have.png",
              "size": 233938,
              "lastModified": "2022-12-12T09:32:45.225Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "c9f12a3e-3ffa-4c26-a9d8-62cc4e13f135",
              "name": "who-is-responsible-for-managing-design-tokens.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/State of Design Tokens 2022/who-is-responsible-for-managing-design-tokens.png",
              "size": 235170,
              "lastModified": "2022-12-12T09:32:24.170Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "4ecc8249-e0fc-4f1c-a9ee-7d4a15e6e2dc",
              "name": "why-theme-your-design-tokens.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/State of Design Tokens 2022/why-theme-your-design-tokens.png",
              "size": 250763,
              "lastModified": "2022-12-12T09:33:17.520Z",
              "children": [],
              "depth": 3
            }
          ],
          "depth": 2
        },
        {
          "id": "784bf744-bc78-427e-a5b9-07759d466996",
          "name": "State-Design-Tokens-2024.pdf",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/State-Design-Tokens-2024.pdf",
          "size": 22958044,
          "lastModified": "2024-04-21T10:59:26.799Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "8bac90f3-5591-451a-877c-d410216a6e8d",
          "name": "Tools",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools",
          "size": 1408,
          "lastModified": "2024-10-23T12:26:38.650Z",
          "children": [
            {
              "id": "3db3b145-26c0-4698-ac09-79b5d0f04ec5",
              "name": "Beedle",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle",
              "size": 448,
              "lastModified": "2022-08-16T09:19:13.201Z",
              "children": [
                {
                  "id": "a32b98c6-73d5-46d5-a939-a8b5e7eac6d3",
                  "name": "breakpoints-creation.gif",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/breakpoints-creation.gif",
                  "size": 1044871,
                  "lastModified": "2022-08-16T09:05:23.311Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "6f0ca565-d00d-41e8-b6dc-a28b3d6dc166",
                  "name": "color-shades-generation.gif",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/color-shades-generation.gif",
                  "size": 1789398,
                  "lastModified": "2022-08-16T08:50:42.867Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "eee8531f-9731-4757-88aa-52f4971052d0",
                  "name": "color-theme-creation.gif",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/color-theme-creation.gif",
                  "size": 2704454,
                  "lastModified": "2022-08-16T08:52:13.957Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "6208f789-8fcd-4ba1-9d3c-90de01c793ea",
                  "name": "colors-synced-in-figma-from-beedle.png",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/colors-synced-in-figma-from-beedle.png",
                  "size": 179671,
                  "lastModified": "2022-08-16T08:53:07.704Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "37a59af1-24b7-4391-a378-3715c2dc4052",
                  "name": "cover.png",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/cover.png",
                  "size": 87384,
                  "lastModified": "2022-08-16T09:09:51.160Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "e379593b-5b4f-4fa4-a970-fb7c6cedeb8e",
                  "name": "design-tokens-update-from-beedle-to-code.gif",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/design-tokens-update-from-beedle-to-code.gif",
                  "size": 3213953,
                  "lastModified": "2022-08-16T08:55:22.062Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "75a30bf7-28ad-40f8-bce3-470cfdb9420d",
                  "name": "dimension-design-tokens-creation.gif",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/dimension-design-tokens-creation.gif",
                  "size": 1297207,
                  "lastModified": "2022-08-16T09:06:32.452Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "b1638988-fcdf-46ef-bff3-16c78cb12482",
                  "name": "github-integration.gif",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/github-integration.gif",
                  "size": 2427564,
                  "lastModified": "2022-08-16T08:59:08.561Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "1aca2dcf-c976-4e40-8771-2d82dddfd839",
                  "name": "icons-import-and-size-variants-creation.gif",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/icons-import-and-size-variants-creation.gif",
                  "size": 2185423,
                  "lastModified": "2022-08-16T09:08:49.022Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "d0fb94ae-b88b-451e-9212-2077e0d8ead1",
                  "name": "text-styles-creation.gif",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/text-styles-creation.gif",
                  "size": 2116091,
                  "lastModified": "2022-08-16T09:07:57.121Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "2aee325a-a36b-4aa7-959b-4a7f6df1e805",
                  "name": "workflow-with-beedle.png",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/workflow-with-beedle.png",
                  "size": 137208,
                  "lastModified": "2022-08-16T08:57:18.512Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "4bd9b7c9-d481-4422-b42a-79972bc8e415",
                  "name": "workflow-without-beedle.png",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Beedle/workflow-without-beedle.png",
                  "size": 112520,
                  "lastModified": "2022-08-16T08:57:11.394Z",
                  "children": [],
                  "depth": 4
                }
              ],
              "depth": 3
            },
            {
              "id": "8b8a95ea-c334-403f-b0b8-06f63ef41270",
              "name": "ColorBox.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/ColorBox.jpg",
              "size": 293701,
              "lastModified": "2024-03-17T17:40:14.787Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "3724287d-2e17-4e45-8690-3d76839eff71",
              "name": "Contrast Grid.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Contrast Grid.jpg",
              "size": 764594,
              "lastModified": "2024-03-17T17:43:49.388Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "0c0fd91c-28c6-434f-8584-8d1567e6f523",
              "name": "Contrast.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Contrast.jpg",
              "size": 279076,
              "lastModified": "2024-03-17T17:45:56.618Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "db8497de-0653-4856-ad8b-138816d3aaef",
              "name": "Genome Color Space.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Genome Color Space.jpg",
              "size": 718667,
              "lastModified": "2024-03-17T17:49:33.243Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "455b4917-08d6-4a2d-9ec7-b08aec72aac8",
              "name": "Grab",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Grab",
              "size": 160,
              "lastModified": "2024-03-12T13:37:02.242Z",
              "children": [
                {
                  "id": "0a26b1a5-8a4c-4f86-b503-5d627b5943c5",
                  "name": "grab-design-plugins-1.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Grab/grab-design-plugins-1.jpg",
                  "size": 826320,
                  "lastModified": "2024-03-07T14:18:09.443Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "2395d640-51ab-400d-b208-dc863d42436b",
                  "name": "grab-design-plugins-2.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Grab/grab-design-plugins-2.jpg",
                  "size": 771824,
                  "lastModified": "2024-03-07T14:15:46.151Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "2835f2c1-b5c0-41ca-876c-67340a6701d0",
                  "name": "grab-design-plugins-3.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Grab/grab-design-plugins-3.jpg",
                  "size": 829922,
                  "lastModified": "2024-03-07T14:03:19.809Z",
                  "children": [],
                  "depth": 4
                }
              ],
              "depth": 3
            },
            {
              "id": "6e99371b-67a0-4c6a-896a-47b1be106e49",
              "name": "Huetone.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Huetone.jpg",
              "size": 784465,
              "lastModified": "2024-03-17T18:15:05.192Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "e13d33bf-402d-47c5-9225-0d89b957f578",
              "name": "Invision DSM Design Tokens Manager",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Invision DSM Design Tokens Manager",
              "size": 192,
              "lastModified": "2024-03-24T18:19:50.874Z",
              "children": [
                {
                  "id": "768646c8-ff53-43cf-b029-f8b2e0d40af5",
                  "name": "invision_dsm_tokens_manager.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Invision DSM Design Tokens Manager/invision_dsm_tokens_manager.jpg",
                  "size": 43016,
                  "lastModified": "2021-10-02T15:02:31.790Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "31f49876-c18e-4b56-a28d-a56357ad7e33",
                  "name": "invision_dsm_tokens_manager_2.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Invision DSM Design Tokens Manager/invision_dsm_tokens_manager_2.jpg",
                  "size": 49406,
                  "lastModified": "2021-10-02T15:03:44.740Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "c2a4a6fa-28ac-4e5c-88ff-5360c47e217a",
                  "name": "invision_dsm_tokens_manager_3.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Invision DSM Design Tokens Manager/invision_dsm_tokens_manager_3.jpg",
                  "size": 62820,
                  "lastModified": "2021-10-02T15:04:11.740Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "c704bf0a-99e9-4ca1-a9e9-3ef37a40ff11",
                  "name": "invision_dsm_tokens_manager_4.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Invision DSM Design Tokens Manager/invision_dsm_tokens_manager_4.jpg",
                  "size": 69906,
                  "lastModified": "2021-10-02T15:04:39.000Z",
                  "children": [],
                  "depth": 4
                }
              ],
              "depth": 3
            },
            {
              "id": "086db16c-2e9c-4636-891b-808bbf23d25c",
              "name": "Invision DSM Tokens Manager",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Invision DSM Tokens Manager",
              "size": 192,
              "lastModified": "2024-10-13T00:02:11.386Z",
              "children": [
                {
                  "id": "736818e0-3641-485e-8d86-6f48cd898a6c",
                  "name": "invision_dsm_tokens_manager.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Invision DSM Tokens Manager/invision_dsm_tokens_manager.jpg",
                  "size": 43016,
                  "lastModified": "2024-10-13T00:02:11.385Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "ca43ee86-bc1f-40d6-b2c4-427abc2a3919",
                  "name": "invision_dsm_tokens_manager_2.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Invision DSM Tokens Manager/invision_dsm_tokens_manager_2.jpg",
                  "size": 49406,
                  "lastModified": "2024-10-13T00:02:11.385Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "beaa1cb5-c12b-4035-b993-4309e9f637b0",
                  "name": "invision_dsm_tokens_manager_3.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Invision DSM Tokens Manager/invision_dsm_tokens_manager_3.jpg",
                  "size": 62820,
                  "lastModified": "2024-10-13T00:02:11.386Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "e731b2cb-811f-42b7-be8e-246e5655b2dd",
                  "name": "invision_dsm_tokens_manager_4.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Invision DSM Tokens Manager/invision_dsm_tokens_manager_4.jpg",
                  "size": 69906,
                  "lastModified": "2024-10-13T00:02:11.386Z",
                  "children": [],
                  "depth": 4
                }
              ],
              "depth": 3
            },
            {
              "id": "7b04e7c4-52a6-4b63-b856-100a5bd3cd01",
              "name": "Keystone Figma Plugin.mp4",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Keystone Figma Plugin.mp4",
              "size": 270207,
              "lastModified": "2024-03-17T18:08:54.255Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "3134f415-c147-4b71-bfa3-f9c2fb003d36",
              "name": "Lyft Product Language",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Lyft Product Language",
              "size": 128,
              "lastModified": "2024-03-24T18:19:14.639Z",
              "children": [
                {
                  "id": "e65bbbac-3188-4ce3-9a56-5c80329273a8",
                  "name": "lpl-static-preview.png",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Lyft Product Language/lpl-static-preview.png",
                  "size": 809731,
                  "lastModified": "2021-12-13T13:46:24.350Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "82e62c98-c4d6-4ce6-ad0c-ac15205c5a80",
                  "name": "lpl_figma.gif",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Lyft Product Language/lpl_figma.gif",
                  "size": 198976,
                  "lastModified": "2021-12-13T13:46:32.780Z",
                  "children": [],
                  "depth": 4
                }
              ],
              "depth": 3
            },
            {
              "id": "eaff81bf-c0d1-4349-8a0a-4041eb808078",
              "name": "Name That Color.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Name That Color.jpg",
              "size": 497722,
              "lastModified": "2024-03-17T17:53:50.679Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "a66ce383-5250-4825-bf80-bdc649eeac40",
              "name": "Pollen.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Pollen.jpg",
              "size": 440019,
              "lastModified": "2024-03-17T18:34:25.690Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "c0f6b2ed-d8f9-4454-8cdc-fe4ad9058e13",
              "name": "Prismer Prism by GitHub.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Prismer Prism by GitHub.jpg",
              "size": 414282,
              "lastModified": "2024-03-17T17:55:18.884Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "545bcf95-8f92-49d7-a20c-9259f2618fd2",
              "name": "Radix",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Radix",
              "size": 192,
              "lastModified": "2024-03-24T18:25:06.254Z",
              "children": [
                {
                  "id": "7341b565-1559-4fdd-b433-ade3a5f62f5f",
                  "name": "radix-colors-custom-palette.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Radix/radix-colors-custom-palette.jpg",
                  "size": 420231,
                  "lastModified": "2024-03-24T17:47:53.810Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "350f5df7-a307-4284-a281-161e0e13c44f",
                  "name": "radix-colors.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Radix/radix-colors.jpg",
                  "size": 413340,
                  "lastModified": "2024-03-24T17:46:41.291Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "e1e51c66-c9cc-4471-8ff9-e2f38dfce89e",
                  "name": "radix-icons.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Radix/radix-icons.jpg",
                  "size": 364460,
                  "lastModified": "2024-03-24T18:24:43.052Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "531c7172-7703-430a-a80b-27d3797ecae1",
                  "name": "radix-theme-playground.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Radix/radix-theme-playground.jpg",
                  "size": 461923,
                  "lastModified": "2024-03-24T17:57:27.436Z",
                  "children": [],
                  "depth": 4
                }
              ],
              "depth": 3
            },
            {
              "id": "274332c4-f041-4103-bdf1-1882f254b51e",
              "name": "Shaper",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Shaper",
              "size": 128,
              "lastModified": "2024-04-21T10:59:49.515Z",
              "children": [
                {
                  "id": "1b8a58a0-e2f2-42b8-8a5c-562fe6726ed9",
                  "name": "shaper-v2.jpg",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Shaper/shaper-v2.jpg",
                  "size": 297111,
                  "lastModified": "2024-04-21T10:59:49.515Z",
                  "children": [],
                  "depth": 4
                },
                {
                  "id": "b4d8b7f7-5f02-45fd-98c4-ee792a926593",
                  "name": "shaper-v2.mp4",
                  "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Shaper/shaper-v2.mp4",
                  "size": 3850918,
                  "lastModified": "2024-04-21T10:59:49.484Z",
                  "children": [],
                  "depth": 4
                }
              ],
              "depth": 3
            },
            {
              "id": "8f7a262c-9bdd-4915-bb8d-bb2c083d1e4d",
              "name": "Slicer.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Slicer.jpg",
              "size": 359001,
              "lastModified": "2024-03-17T18:04:59.210Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "8290980c-24a6-45ce-bed9-ff5a2f95d5f4",
              "name": "Utopia.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/Utopia.jpg",
              "size": 450822,
              "lastModified": "2024-03-17T18:56:52.683Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "652313c6-e616-4335-a8c9-abb2aa551c41",
              "name": "arcade.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/arcade.jpg",
              "size": 296202,
              "lastModified": "2024-04-05T08:46:20.521Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "0ab9259e-3076-44b5-b5de-480cf7c6e2cf",
              "name": "bitspace.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/bitspace.jpg",
              "size": 132697,
              "lastModified": "2024-04-01T16:55:25.215Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "6487a527-dcc7-44e4-9fd3-83fda7f84356",
              "name": "cobalt.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/cobalt.jpg",
              "size": 353132,
              "lastModified": "2023-11-07T10:08:21.239Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "e18361e7-6b3d-43aa-be6b-59bbe58bad9f",
              "name": "color-and-contrast.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/color-and-contrast.jpg",
              "size": 215838,
              "lastModified": "2023-11-21T09:43:32.612Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "8b56f845-f2de-4009-94c2-bf9b6f69afbe",
              "name": "eightshapes-specs.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/eightshapes-specs.png",
              "size": 103713,
              "lastModified": "2024-04-04T15:48:34.995Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "065a984b-51bc-4778-a4a5-9ce750c218c0",
              "name": "harmony.mp4",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/harmony.mp4",
              "size": 14302983,
              "lastModified": "2024-04-01T16:34:26.150Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "001bfb78-6761-4b76-8541-4ed4de46b2bb",
              "name": "hueplot.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/hueplot.jpg",
              "size": 86877,
              "lastModified": "2024-03-14T13:00:54.244Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "4a04e275-be00-4146-afa4-d3bd968e0e78",
              "name": "loken.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/loken.png",
              "size": 387032,
              "lastModified": "2024-05-14T17:54:17.997Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "700fe702-be7e-4472-87fc-55a316879d46",
              "name": "moebius.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/moebius.jpg",
              "size": 182279,
              "lastModified": "2024-03-13T19:03:43.478Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "19e9c8a9-a4e1-4d4a-a39b-c27615bc64e9",
              "name": "nord-health-color-generator.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/nord-health-color-generator.jpg",
              "size": 1298435,
              "lastModified": "2022-10-25T07:59:25.395Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "0746ea24-ed6a-481a-b63d-a98c879e2a29",
              "name": "noya-design-tokens.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/noya-design-tokens.png",
              "size": 93125,
              "lastModified": "2024-09-23T21:09:19.846Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "ffeb7cf4-5ca2-41a0-818d-7663ce61e7d5",
              "name": "open-props.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/open-props.jpg",
              "size": 239662,
              "lastModified": "2023-11-07T10:01:27.997Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "00310280-b870-48a5-880d-2d8fdc045ac7",
              "name": "shaper.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/shaper.png",
              "size": 192499,
              "lastModified": "2021-08-28T07:53:02.000Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "f9f093f3-6570-4bf9-8027-c25df5db1ded",
              "name": "spotify-figgy-in-action.webp",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/spotify-figgy-in-action.webp",
              "size": 13477420,
              "lastModified": "2023-01-04T17:00:10.312Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "d15750e9-5fa4-485c-93cb-d735ecd54466",
              "name": "squoosh.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/squoosh.jpg",
              "size": 801207,
              "lastModified": "2024-05-05T15:40:23.784Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "2c201b46-1424-4ef1-bfea-922d42da967d",
              "name": "stitches.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/stitches.png",
              "size": 3457446,
              "lastModified": "2024-03-24T18:06:47.865Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "617e3e97-abd5-4170-a884-a1b27fa455b1",
              "name": "style-dictionary-play.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/style-dictionary-play.jpg",
              "size": 122493,
              "lastModified": "2022-10-25T08:43:43.890Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "160ce90b-1940-43e1-a6b7-c37b4aba0a70",
              "name": "tempera.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/tempera.png",
              "size": 124116,
              "lastModified": "2023-11-21T09:42:03.469Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "bdbf29eb-f089-4d0f-a7ed-034fc98a9e14",
              "name": "token-base.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/token-base.jpg",
              "size": 234703,
              "lastModified": "2024-03-19T09:36:03.005Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "b9580802-18ea-426e-a56d-139543525b82",
              "name": "tokens-studio-resolver.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/tokens-studio-resolver.jpg",
              "size": 304681,
              "lastModified": "2024-05-16T09:05:58.022Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "f4deb970-86b3-49aa-b484-abb8e3cb3a99",
              "name": "tokens-studio.webp",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/tokens-studio.webp",
              "size": 145454,
              "lastModified": "2023-10-24T13:38:17.493Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "a1bc54ce-560b-4d36-acd1-b7115d42c74f",
              "name": "typescale.jpg",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/typescale.jpg",
              "size": 219596,
              "lastModified": "2023-10-19T15:42:01.447Z",
              "children": [],
              "depth": 3
            },
            {
              "id": "2db89cd3-e9fd-4a92-a4f2-3da314913cbf",
              "name": "useDesignTokens.png",
              "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/Tools/useDesignTokens.png",
              "size": 497358,
              "lastModified": "2023-11-15T13:16:55.017Z",
              "children": [],
              "depth": 3
            }
          ],
          "depth": 2
        },
        {
          "id": "11672311-da02-4c34-84fa-1533dfef858b",
          "name": "alias-tokens-exmaples.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/alias-tokens-exmaples.jpg",
          "size": 1277834,
          "lastModified": "2023-10-13T08:38:41.516Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "07d8d253-e9ba-4250-87c6-d6a2d011ece9",
          "name": "asana-design-tokens-naming-convention.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/asana-design-tokens-naming-convention.jpg",
          "size": 102580,
          "lastModified": "2023-03-01T09:18:01.866Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "eb174e34-8e29-4bac-a967-b0d5f8faa40f",
          "name": "asana-design-tokens-usage-button.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/asana-design-tokens-usage-button.jpg",
          "size": 61803,
          "lastModified": "2023-03-01T09:33:12.533Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "7efbff23-273d-4569-af4a-c40a93003f0f",
          "name": "asana-design-tokens-usage-code-dark-mode.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/asana-design-tokens-usage-code-dark-mode.jpg",
          "size": 65363,
          "lastModified": "2023-03-01T09:36:21.313Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "b9d630ef-2d0f-4a54-9ad8-d3f97aba1fcd",
          "name": "asana-design-tokens-usage-code-light-mode.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/asana-design-tokens-usage-code-light-mode.jpg",
          "size": 97396,
          "lastModified": "2023-03-01T09:35:18.249Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "8aac1b83-a127-4a63-9a4c-8208ac08ed76",
          "name": "asana-design-tokens-usage-example-1.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/asana-design-tokens-usage-example-1.jpg",
          "size": 87338,
          "lastModified": "2023-03-01T09:31:23.392Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "562ec9fa-6d43-4e07-bc49-d9fd0ab6b31c",
          "name": "asana-design-tokens-usage-example-2.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/asana-design-tokens-usage-example-2.jpg",
          "size": 82271,
          "lastModified": "2023-03-01T09:32:16.242Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "9f935513-936c-41e2-a6b8-6e09bbdb86de",
          "name": "asana-design-tokens-usage-web.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/asana-design-tokens-usage-web.jpg",
          "size": 105414,
          "lastModified": "2023-03-01T09:36:57.222Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "b17df09d-69a5-45f4-8f84-ebed2401944f",
          "name": "atomic-design-taxonomy-advanced.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/atomic-design-taxonomy-advanced.jpg",
          "size": 330732,
          "lastModified": "2023-10-13T08:44:19.822Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "15efc750-a97b-4194-a5ef-2d3da3cf4cea",
          "name": "atomic-design-taxonomy-with-tokens-advanced.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/atomic-design-taxonomy-with-tokens-advanced.jpg",
          "size": 362710,
          "lastModified": "2023-10-13T08:44:35.083Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "e0dec710-6ad6-4e2b-83fc-aafd7fc9ebdf",
          "name": "brand+theme-affecting-button-tokens.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/brand+theme-affecting-button-tokens.jpg",
          "size": 125601,
          "lastModified": "2024-05-06T11:25:58.481Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "9fc7fc8c-0785-4ff6-b9b9-b87d30475c16",
          "name": "button-component-design-tokens-anatomy-light.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/button-component-design-tokens-anatomy-light.jpg",
          "size": 30921,
          "lastModified": "2021-08-16T09:46:32.830Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "753ddfb1-eff7-4e82-8250-b3f017b04c7e",
          "name": "button-component-styled-for-several-brands.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/button-component-styled-for-several-brands.jpg",
          "size": 146520,
          "lastModified": "2023-10-05T14:18:55.604Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "6c8c65f6-1c82-42ba-bf2d-d725592fe5b8",
          "name": "buttons-design-data-skeleton-light.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/buttons-design-data-skeleton-light.jpg",
          "size": 431718,
          "lastModified": "2023-10-13T08:50:57.762Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "52aa8f7b-322d-4fe5-92bf-8fe3d5a08d44",
          "name": "complementary-space-spacing-away.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/complementary-space-spacing-away.gif",
          "size": 18731072,
          "lastModified": "2024-03-23T13:39:20.973Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "9684a0ff-4e06-44f6-aaa9-11f3b6345683",
          "name": "complementary-space-spacing-near-example.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/complementary-space-spacing-near-example.jpg",
          "size": 535905,
          "lastModified": "2024-03-23T13:33:18.703Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "37b23ef5-0371-4860-834a-1c298c124042",
          "name": "component-styled-according-to-4-brands.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/component-styled-according-to-4-brands.gif",
          "size": 939330,
          "lastModified": "2021-09-13T16:15:38.070Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "80505f94-b056-4e95-8c16-43ef44dd6f29",
          "name": "core-library-and-child-libraries-relationship.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/core-library-and-child-libraries-relationship.jpg",
          "size": 2167396,
          "lastModified": "2023-10-13T08:36:52.190Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "6ec509e5-9ecf-44f0-acc4-9cd1cb254f18",
          "name": "core-library-shared-by-several-brands.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/core-library-shared-by-several-brands.jpg",
          "size": 1771673,
          "lastModified": "2023-10-13T08:40:35.702Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "63dcf468-ac45-4a08-92cb-08043d775f67",
          "name": "core-tokens-examples.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/core-tokens-examples.jpg",
          "size": 149547,
          "lastModified": "2023-10-13T08:38:32.583Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "40bea25b-8484-4b82-a631-f38dd18c2314",
          "name": "design-api-on-demand.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design-api-on-demand.jpg",
          "size": 23166,
          "lastModified": "2021-11-30T14:07:16.760Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "c96f75b5-84d6-4132-b9a1-17a515999b3d",
          "name": "design-token-component-category-property-attribute-relationship-state-naming-pattern.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design-token-component-category-property-attribute-relationship-state-naming-pattern.jpg",
          "size": 121910,
          "lastModified": "2022-04-03T02:13:18.417Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "e68b03ac-66cc-4fcf-9464-bfb75b28c607",
          "name": "design-tokens-colors-nomenclature.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design-tokens-colors-nomenclature.png",
          "size": 225970,
          "lastModified": "2022-11-08T14:14:54.580Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "2e13dc8b-2b60-4b7c-9098-636192cfe74f",
          "name": "design-tokens-logo.avif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design-tokens-logo.avif",
          "size": 60388,
          "lastModified": "2022-11-02T12:45:06.116Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "bc39e013-684f-4d61-994c-d6ae47b193b3",
          "name": "design-tokens-pattern.avif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design-tokens-pattern.avif",
          "size": 275664,
          "lastModified": "2022-11-02T12:44:24.977Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "b4415136-502f-4cf1-a191-5affae4d070d",
          "name": "design-tokens-relationships-in-jsoncrack.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design-tokens-relationships-in-jsoncrack.jpg",
          "size": 372425,
          "lastModified": "2022-10-06T14:45:58.408Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "3b8596e5-e572-4a60-a537-bf771e117548",
          "name": "design-tokens-relationships.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design-tokens-relationships.jpg",
          "size": 96231,
          "lastModified": "2022-10-05T11:17:26.451Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "65b46b32-48a9-4ec8-94a9-a4fc905f4f1d",
          "name": "design-tokens-system-category-variant-scale-naming-pattern-more-complex.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design-tokens-system-category-variant-scale-naming-pattern-more-complex.jpg",
          "size": 92611,
          "lastModified": "2022-04-03T02:11:18.398Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "7d95f36c-5e78-42dc-b310-d5a37d43df28",
          "name": "design-tokens-system-category-variant-scale-naming-pattern.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design-tokens-system-category-variant-scale-naming-pattern.jpg",
          "size": 75517,
          "lastModified": "2022-04-03T01:49:12.152Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "3b4123ec-e54b-44e7-b625-a6851b4f95eb",
          "name": "design-tokens-within-atomic-design-taxonomy.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design-tokens-within-atomic-design-taxonomy.jpg",
          "size": 43657,
          "lastModified": "2021-08-16T09:46:32.830Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "25a2fc8a-67c3-4473-a0cd-9b49901a6013",
          "name": "design_api_distributing_design_tokens_to_platforms.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_api_distributing_design_tokens_to_platforms.jpg",
          "size": 497880,
          "lastModified": "2024-10-13T00:02:11.389Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "f5bea1a6-f1f3-4bfe-a9e5-09de66e8276f",
          "name": "design_api_serves_tools.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_api_serves_tools.jpg",
          "size": 114729,
          "lastModified": "2021-09-05T19:29:45.540Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "cfd1f3ca-d849-4078-a38f-24e0888b245e",
          "name": "design_token_anatomy.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_token_anatomy.jpg",
          "size": 39966,
          "lastModified": "2021-09-05T19:32:22.440Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "eed50e04-e531-42ba-889e-cab7c4fcade5",
          "name": "design_token_types.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_token_types.png",
          "size": 811472,
          "lastModified": "2021-08-28T07:52:58.000Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "63226c64-021f-4a39-831c-38707c327433",
          "name": "design_tokens_are_idiosyncratric_to_the_tool_they_are_used_in.webp",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_are_idiosyncratric_to_the_tool_they_are_used_in.webp",
          "size": 10592,
          "lastModified": "2023-09-29T08:57:59.386Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "c53b0153-b399-479e-b327-3f9dff5bb2f9",
          "name": "design_tokens_are_totipotent.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_are_totipotent.png",
          "size": 173088,
          "lastModified": "2021-08-28T09:26:04.600Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "4a5faf49-f8d5-4357-b400-78bc9517017d",
          "name": "design_tokens_categorization.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_categorization.png",
          "size": 119298,
          "lastModified": "2021-08-28T09:30:26.990Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "c81fdfd8-6cb1-4e2f-a023-ec2341dfb339",
          "name": "design_tokens_cti_naming_pattern.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_cti_naming_pattern.png",
          "size": 109070,
          "lastModified": "2021-09-05T15:12:37.880Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "afa92bee-c2d0-4020-8ce9-ad6372510000",
          "name": "design_tokens_design_decisions.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_design_decisions.png",
          "size": 174888,
          "lastModified": "2021-08-28T07:53:02.000Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "6a5a97db-550a-4235-bd8a-5b9ebced6c28",
          "name": "design_tokens_design_options.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_design_options.png",
          "size": 135345,
          "lastModified": "2021-08-28T07:53:00.000Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "91d02315-c9a7-458d-a67a-e13af43e496e",
          "name": "design_tokens_hierarchy 1.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_hierarchy 1.png",
          "size": 330301,
          "lastModified": "2021-08-28T09:33:11.190Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "51889271-1c9e-4a83-be3a-9818fefdba67",
          "name": "design_tokens_hierarchy.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_hierarchy.png",
          "size": 119298,
          "lastModified": "2021-08-28T09:30:39.150Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "53a7efff-d663-41a1-942e-cf6e228a6e90",
          "name": "design_tokens_hierarchy2.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_hierarchy2.png",
          "size": 172862,
          "lastModified": "2021-08-28T09:33:11.190Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "dfa9e50a-692d-443a-99a0-4fb695081fc5",
          "name": "design_tokens_in_atomic_design.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_in_atomic_design.png",
          "size": 938192,
          "lastModified": "2021-08-28T07:52:56.000Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "4bda2f52-da72-4b66-891e-322948954c1f",
          "name": "design_tokens_in_practice.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_in_practice.png",
          "size": 379002,
          "lastModified": "2021-08-28T07:53:02.000Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "aef3cabe-aebf-4caa-8241-822825e7cecb",
          "name": "design_tokens_levels_of_abstraction.webp",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_levels_of_abstraction.webp",
          "size": 7818,
          "lastModified": "2023-09-29T09:21:02.033Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "1b6a3983-2aab-4a76-b175-4502589b898d",
          "name": "design_tokens_specificity_layers.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_specificity_layers.jpg",
          "size": 2066850,
          "lastModified": "2023-10-13T08:48:46.622Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "1172ebec-30d8-42f2-a2cf-d6f4cc38b8f7",
          "name": "design_tokens_specificity_layers.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_specificity_layers.png",
          "size": 137060,
          "lastModified": "2021-09-05T14:29:00.320Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "c635c92d-c8f5-441e-9b26-2663da2a98b5",
          "name": "design_tokens_types.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_types.png",
          "size": 253493,
          "lastModified": "2021-09-05T14:42:02.540Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "2b5fe913-384a-4c5d-9123-109f2aa8d0df",
          "name": "design_tokens_within_button.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/design_tokens_within_button.png",
          "size": 284217,
          "lastModified": "2021-09-05T15:49:57.270Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "a5f03505-d2d3-4f08-8e74-0149963e4340",
          "name": "dtcg_logo.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/dtcg_logo.png",
          "size": 143484,
          "lastModified": "2021-08-28T07:53:02.000Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "be804fc0-86d4-4dc6-a113-65f8090edd73",
          "name": "dynamic_tokens_distributed_in_design_system.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/dynamic_tokens_distributed_in_design_system.png",
          "size": 298845,
          "lastModified": "2021-09-05T14:52:29.980Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "e66c38eb-ce47-4cd4-807c-f73ee38e19d1",
          "name": "elevation-system.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/elevation-system.png",
          "size": 109911,
          "lastModified": "2024-04-08T11:22:52.543Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "f158333b-cec1-416e-9420-e9221bf148d7",
          "name": "figma-semantic-token-schema.webp",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/figma-semantic-token-schema.webp",
          "size": 30688,
          "lastModified": "2022-07-26T10:11:54.660Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "f6ed91ff-a7ad-426b-8588-a52db06cd8f1",
          "name": "figma-semantic-tokens-example.mp4",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/figma-semantic-tokens-example.mp4",
          "size": 2554238,
          "lastModified": "2022-07-29T08:08:40.844Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "8686ee3b-072f-49cb-bfcd-6eb696537346",
          "name": "flexible-styles-for-multi-brand-design-systems.webp",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/flexible-styles-for-multi-brand-design-systems.webp",
          "size": 59776,
          "lastModified": "2024-09-29T11:01:06.045Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "bd563fd7-b5fa-4526-92c5-eb4f8adf373c",
          "name": "future-of-design-tokens.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/future-of-design-tokens.jpg",
          "size": 2970739,
          "lastModified": "2023-10-13T08:41:15.784Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "ea10b0ec-1629-49a0-864d-6013ef4419b2",
          "name": "how-deep-does-a-token-inventory-usually-go.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/how-deep-does-a-token-inventory-usually-go.png",
          "size": 120004,
          "lastModified": "2022-01-27T21:54:47.637Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "62c2d166-fa5e-4d41-8613-fba6e07318fd",
          "name": "how-design-decisions-are-applied-light.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/how-design-decisions-are-applied-light.jpg",
          "size": 48546,
          "lastModified": "2021-09-07T20:10:22.190Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "c52d6410-1ad8-4dc9-a2cc-63a643e35ef7",
          "name": "material-design-design-tokens-inheritance.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/material-design-design-tokens-inheritance.png",
          "size": 44231,
          "lastModified": "2021-12-13T08:13:50.800Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "fbe04670-db3d-406c-a4f6-30300004addf",
          "name": "material-design-design-tokens-naming-convention.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/material-design-design-tokens-naming-convention.png",
          "size": 14708,
          "lastModified": "2021-12-13T08:12:36.780Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "e21fedb2-705c-4549-aca8-b4f5301e8c6a",
          "name": "maxrewards-design-tokens-name-completion--react-native-thanks-to-specify.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/maxrewards-design-tokens-name-completion--react-native-thanks-to-specify.gif",
          "size": 3609367,
          "lastModified": "2022-10-05T12:42:50.417Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "5a76a194-f279-4932-861a-f756ff967ada",
          "name": "namespace-object-base-modifier-examples.webp",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/namespace-object-base-modifier-examples.webp",
          "size": 62936,
          "lastModified": "2023-03-15T14:14:28.682Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "1f144651-9854-4de1-a15e-8ced7358f104",
          "name": "namespace-object-base-modifier.webp",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/namespace-object-base-modifier.webp",
          "size": 43302,
          "lastModified": "2023-03-15T14:14:04.162Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "57922fc4-b811-43fd-9f38-62e056cffbd6",
          "name": "nathan-curtis-card-spacing.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/nathan-curtis-card-spacing.png",
          "size": 659773,
          "lastModified": "2022-09-01T13:11:55.186Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "a444ed78-22f6-41d2-a818-0e5edd224c59",
          "name": "news-uk-themer-figma-plugin.mp4",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/news-uk-themer-figma-plugin.mp4",
          "size": 1820282,
          "lastModified": "2021-09-13T17:54:17.470Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "1107cedd-c4a2-45a1-90bb-84e191f5cb9b",
          "name": "object-base-modifier-tokens-naming.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/object-base-modifier-tokens-naming.png",
          "size": 186101,
          "lastModified": "2021-12-02T10:55:15.040Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "9baa0eeb-0c49-4209-af70-480dcdba884c",
          "name": "option-decision-design-tokens.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/option-decision-design-tokens.png",
          "size": 17736,
          "lastModified": "2023-03-22T12:29:19.130Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "0907eef9-83b8-4d5f-90c0-b1e5f71216f0",
          "name": "option-tokens.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/option-tokens.jpg",
          "size": 110814,
          "lastModified": "2022-09-26T20:38:07.242Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "2810e093-4f30-4ba0-885a-19ece9923730",
          "name": "options-tokens-usage.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/options-tokens-usage.jpg",
          "size": 124287,
          "lastModified": "2022-09-26T20:38:57.208Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "b36b557f-fe7c-4481-84e6-12da87281730",
          "name": "polaris-for-vscode-preview.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/polaris-for-vscode-preview.gif",
          "size": 7453650,
          "lastModified": "2023-10-12T11:15:24.150Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "65f34334-84a7-4cea-b5c3-340cbd88f590",
          "name": "polaris-motion-tokens-preview.mp4",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/polaris-motion-tokens-preview.mp4",
          "size": 954476,
          "lastModified": "2023-10-12T11:31:02.543Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "dfcb98de-014d-44b6-84d4-834d2484d314",
          "name": "polaris-stylelint.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/polaris-stylelint.gif",
          "size": 5281679,
          "lastModified": "2023-10-12T11:19:37.460Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "881198a5-dec5-4216-8c13-bb5f2122c196",
          "name": "polaris-tokens-playground.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/polaris-tokens-playground.gif",
          "size": 1771248,
          "lastModified": "2022-04-03T01:10:28.246Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "a14467ef-d92f-4a73-b560-9d082f3f5180",
          "name": "proportio.webp",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/proportio.webp",
          "size": 70020,
          "lastModified": "2023-05-09T14:21:05.554Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "d1fc5e6c-0a0e-4493-bfc3-e8b180e764b9",
          "name": "same_component_different_styles.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/same_component_different_styles.png",
          "size": 548626,
          "lastModified": "2021-08-28T07:53:04.000Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "4e4702cb-8964-4dd8-9bc3-7c05ba260134",
          "name": "sass-common-brand-architecture.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/sass-common-brand-architecture.jpg",
          "size": 258939,
          "lastModified": "2023-10-13T08:45:49.591Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "74bb40cc-acec-4327-acf2-d4037d2b9ab1",
          "name": "semantic-token-abstraction-spacing-within-component.webp",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/semantic-token-abstraction-spacing-within-component.webp",
          "size": 15880,
          "lastModified": "2024-03-29T12:02:57.156Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "6b8a5ac6-c620-4f1f-aca9-a66f7831bd7b",
          "name": "semantic-token-space-between-elements.webp",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/semantic-token-space-between-elements.webp",
          "size": 15880,
          "lastModified": "2024-03-18T13:06:46.298Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "17b88c56-1570-45fa-ba91-1e4ff6051a9f",
          "name": "spectrum-adaptive-ui-concept.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/spectrum-adaptive-ui-concept.png",
          "size": 640338,
          "lastModified": "2024-05-22T14:49:49.474Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "4d628a4e-6a4e-4e6f-b772-75cb89877c51",
          "name": "spotify_encore_foundations.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/spotify_encore_foundations.png",
          "size": 386608,
          "lastModified": "2021-08-28T07:52:52.000Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "4c1323b5-5eb2-4ed4-92fd-4f841c9f1c1a",
          "name": "stripe_white-labelled_payment_form.mp4",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/stripe_white-labelled_payment_form.mp4",
          "size": 146761,
          "lastModified": "2021-09-21T20:38:22.910Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "39fd3dd3-de8b-46b4-ab8f-1386fdf79d04",
          "name": "tanner-christensen-superb-menu-bar-app.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/tanner-christensen-superb-menu-bar-app.jpg",
          "size": 102226,
          "lastModified": "2021-11-30T13:25:36.350Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "3ec35198-e438-4ae7-bfb4-9e8497c2b60b",
          "name": "tanner-christensen-superb-menu-bar-app.mp4",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/tanner-christensen-superb-menu-bar-app.mp4",
          "size": 390189,
          "lastModified": "2021-11-30T13:24:11.850Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "d858dbfc-d955-475b-a8b7-bd6f27269bde",
          "name": "theme-layer-in-3-tier-token-system.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/theme-layer-in-3-tier-token-system.png",
          "size": 98083,
          "lastModified": "2023-09-18T08:17:10.765Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "61dc2393-717c-474c-b75e-71aa9a2bbf81",
          "name": "themeable-card-component.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/themeable-card-component.gif",
          "size": 1135362,
          "lastModified": "2021-09-04T22:01:09.380Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "cc6a0d8f-2124-4193-8ea7-6d82368c50ca",
          "name": "tinder-tokens-lookup-tool.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/tinder-tokens-lookup-tool.png",
          "size": 185446,
          "lastModified": "2023-01-16T13:10:05.538Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "daea590b-e75e-435f-9e9b-87758cd5c76a",
          "name": "token-change-between-light-dark-mode.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/token-change-between-light-dark-mode.gif",
          "size": 455248,
          "lastModified": "2023-10-05T14:17:37.067Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "ed1dc1fc-895e-4389-bc33-cacfdc1c6b76",
          "name": "token_naming_structure_spectrum.png",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/token_naming_structure_spectrum.png",
          "size": 32947,
          "lastModified": "2024-03-05T10:21:11.201Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "41bf4b76-46fc-4d09-9689-5800af0612f4",
          "name": "tokens-naming-conventions-per-types.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/tokens-naming-conventions-per-types.jpg",
          "size": 1520840,
          "lastModified": "2023-10-13T08:40:03.278Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "45fa0b91-7f5f-4d9a-8f27-6b963600a805",
          "name": "tokens-solution-metro-map.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/tokens-solution-metro-map.jpg",
          "size": 37299,
          "lastModified": "2024-04-20T12:30:32.104Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "5a3d06b3-8d1c-4cad-a539-8b82a963ed4b",
          "name": "type-of-tokens.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/type-of-tokens.jpg",
          "size": 1658071,
          "lastModified": "2023-10-13T08:38:02.860Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "fc96bf90-93e1-4d57-abb6-30df8a477f7e",
          "name": "vitamin-play-token-sync-model.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/vitamin-play-token-sync-model.jpg",
          "size": 59743,
          "lastModified": "2024-04-20T12:30:32.105Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "326d4790-8113-4cd2-a0db-aaa4dfaf7f26",
          "name": "white-labelled-component-with-design-tokens.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/white-labelled-component-with-design-tokens.gif",
          "size": 933507,
          "lastModified": "2021-10-08T10:01:56.470Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "94fd45b5-d469-46a2-b8f0-f64c999bb3ec",
          "name": "why-we-need-alias-tokens-part-1.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/why-we-need-alias-tokens-part-1.jpg",
          "size": 111594,
          "lastModified": "2022-09-26T20:40:07.944Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "31ca909c-5925-4eee-b1fd-d99b4d973784",
          "name": "why-we-need-alias-tokens-part-2.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/why-we-need-alias-tokens-part-2.jpg",
          "size": 105748,
          "lastModified": "2022-09-26T20:40:20.984Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "892fd06a-1f2f-4ed7-b18b-4b1544d34a21",
          "name": "why-we-need-alias-tokens-part-3.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/why-we-need-alias-tokens-part-3.jpg",
          "size": 109529,
          "lastModified": "2022-09-26T20:41:33.060Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "5bd28a41-8407-481c-abca-924aef5f9834",
          "name": "why-we-need-alias-tokens-part-4.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/why-we-need-alias-tokens-part-4.jpg",
          "size": 128444,
          "lastModified": "2022-09-26T20:41:42.650Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "e935b549-8841-4c9c-ae44-d51ca0013ff5",
          "name": "why-we-need-alias-tokens-part-5.jpg",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/why-we-need-alias-tokens-part-5.jpg",
          "size": 133531,
          "lastModified": "2022-09-26T20:42:27.305Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "6120fbe7-7be2-480f-ac18-e845f888a1ff",
          "name": "wieden_kennedy_formula_1_custom_.format-webp.width-2880_sgfa4xeNw5cvlWp7.webp",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/wieden_kennedy_formula_1_custom_.format-webp.width-2880_sgfa4xeNw5cvlWp7.webp",
          "size": 530086,
          "lastModified": "2021-10-01T08:39:25.860Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "4c4f3de5-f753-411d-b3a3-4ffb80657705",
          "name": "wieden_kennedy_formula_1_custom_design_software_digital_graphic_design.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/wieden_kennedy_formula_1_custom_design_software_digital_graphic_design.gif",
          "size": 1487313,
          "lastModified": "2021-10-01T08:36:27.050Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "54d6f53b-85f2-4b5f-9b21-6d75f758dfaf",
          "name": "wieden_kennedy_formula_1_custom_design_software_digital_graphic_design_i_2cd89hU.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/wieden_kennedy_formula_1_custom_design_software_digital_graphic_design_i_2cd89hU.gif",
          "size": 2031155,
          "lastModified": "2021-10-01T08:38:23.410Z",
          "children": [],
          "depth": 2
        },
        {
          "id": "dcda285c-73ca-4c00-bee6-6a748e113bbb",
          "name": "wieden_kennedy_formula_1_custom_design_software_digital_graphic_design_its.gif",
          "path": "/Users/lucho/Textes/my-second-brain/🧠 My Second Brain/00. ASSETS 📎/Design Tokens/wieden_kennedy_formula_1_custom_design_software_digital_graphic_design_its.gif",
          "size": 5518236,
          "lastModified": "2021-10-01T08:37:49.390Z",
          "children": [],
          "depth": 2
        }
      ],
      "depth": 1
    },
  },
  render: Template
};
