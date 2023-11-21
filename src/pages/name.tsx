import { Astro } from "./index.astro";

export const {
name = "Alan Vidal", degree = "Product design Engineer", presentation = "Senior Lecture with 5+ years guiding 1500+ students in Engineering & Design. Co-creator of Spark Innovation Kit & Co-founder of Loyka.Studio.", cert = "📝 Google Certification", bio = "public/AlanVidal.png",
} = Astro.props;
