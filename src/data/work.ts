export type WorkItem = {
  title: string;
  summary: string;
  details: string;
  image: {
    src: string;
    alt: string;
  };
};

export const workItems: WorkItem[] = [
  {
    title: "Feeding the Hungry",
    summary: "Food, essentials, and care for families in need.",
    details:
      "Through compassionate outreach, the foundation supports families with food, essential supplies, and prayerful care during difficult seasons.",
    image: {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
      alt: "Hands offering food and care to a family in need"
    }
  },
  {
    title: "Spreading the Gospel",
    summary: "Sharing God's word with peace and humility.",
    details:
      "Our ministry shares messages of faith and hope through worship, gatherings, fellowship, and gentle one-to-one encouragement.",
    image: {
      src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80",
      alt: "An open Bible in warm light"
    }
  },
  {
    title: "Supporting Families",
    summary: "Standing with families through difficult days.",
    details:
      "We walk beside families with prayer, practical support, and a listening heart, helping them feel seen and strengthened.",
    image: {
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
      alt: "A family sitting together in a peaceful moment"
    }
  },
  {
    title: "Building Communities",
    summary: "Helping communities grow through faith and care.",
    details:
      "Our work encourages unity, service, and shared responsibility so communities can grow with dignity, trust, and grace.",
    image: {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      alt: "A caring community gathered together"
    }
  }
];
