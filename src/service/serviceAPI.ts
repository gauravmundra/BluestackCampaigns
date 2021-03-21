import { Campaign } from "../views/campaigns/ICampaign";

export {};

export const logger = (error: any) => console.log(error);

export const data: Campaign[] = [
  {
    key: 1,
    name: "Test Whatsapp",
    region: "US",
    createdOn: 1617357342000,
    endDate: 1617357942000,
    price: [{ Duration: "1 week - 1 month", Price: 1000 }],
    csv: "www.google.com",
    report: "www.google.com",
    image_url: "www.google.com",
  },
  {
    key: 2,
    name: "Super Jewels Quest",
    region: "CA, FR",
    createdOn: 1617357342000,
    endDate: 1617357942000,
    price: [
      { Duration: "1 Week - 1 Month", Price: 100.0 },
      { Duration: "6 Months", Price: 500.0 },
      { Duration: "1 Year", Price: 900.0 },
    ],
    csv: "www.google.com",
    report: "www.google.com",
    image_url: "www.google.com",
  },
  {
    key: 3,
    name: "Mole Slayer",
    region: "FR",
    createdOn: 1616320542765,
    endDate: 1616390542765,
    price: [{ Duration: "1 week - 1 month", Price: 1002 }],
    csv: "www.google.com",
    report: "www.google.com",
    image_url: "www.google.com",
  },
  {
    key: 4,
    name: "Mancala Mix",
    region: "JP",
    createdOn: 1559806680124,
    endDate: 1559907714999,
    price: [{ Duration: "1 week - 1 month", Price: 1003 }],
    csv: "www.google.com",
    report: "www.google.com",
    image_url: "www.google.com",
  },
];
