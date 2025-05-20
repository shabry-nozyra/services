import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "Academy",
    description:
      "Access our worldwide support team of coaches and peers to help you harness industry knowledge and gain the competitive edge.",
    buttonText: "Get learning",  
    buttonLink: "/academy",
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "Pro Services",
    description:
      "Add bandwidth and expertise to your team so you can focus on growing your business.",
    buttonText: "Get growing",
    buttonLink: "/services",
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Events",
    description:
      "Fuel your growth with live and virtual events that connect you to peers, best practices and business potential.",
    buttonText: "Explore events",
    buttonLink: "/events",
  },
];

export default featuresData;
