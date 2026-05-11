export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "This ministry has been a blessing in my life. Their prayers and support helped me through my darkest times.",
    name: "Anjali",
    location: "Bhopal",
    rating: 5
  },
  {
    quote:
      "When our family needed hope, they stood with us. Their love felt simple, honest, and full of faith.",
    name: "Ramesh",
    location: "Chhatarpur",
    rating: 5
  },
  {
    quote:
      "The prayer team listened with patience and prayed with us like family. We felt peace again.",
    name: "Meena",
    location: "Laundi",
    rating: 5
  }
];
