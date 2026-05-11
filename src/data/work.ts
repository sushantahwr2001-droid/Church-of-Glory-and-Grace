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
    summary: "Food and daily essentials for families.",
    details:
      "We help families with food, daily essentials, and prayer when life becomes difficult.",
    image: {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
      alt: "Hands offering food and care to a family in need"
    }
  },
  {
    title: "Spreading the Gospel",
    summary: "Prayer, worship, and God's word.",
    details:
      "We share God's word through worship, prayer meetings, fellowship, and simple words of hope.",
    image: {
      src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80",
      alt: "An open Bible in warm light"
    }
  },
  {
    title: "Supporting Families",
    summary: "Help for families in hard times.",
    details:
      "We listen, pray, and stand beside families so they feel supported and not alone.",
    image: {
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
      alt: "A family sitting together in a peaceful moment"
    }
  },
  {
    title: "Building Communities",
    summary: "Care that brings people together.",
    details:
      "We encourage people to care for one another, serve together, and grow in faith.",
    image: {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      alt: "A caring community gathered together"
    }
  }
];
