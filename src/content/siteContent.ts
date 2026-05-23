/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SHIKHAR MEDIA — SITE CONTENT CMS
 *  Edit this file to update images, text, and media across the site.
 *  No code knowledge required — just update the values below!
 *
 *  HOW TO ADD YOUR OWN PHOTOS:
 *  1. Drop your photo into the /public/images/ folder
 *  2. Update the `src` value to "/images/your-photo-filename.jpg"
 *  3. Save — changes appear instantly on the dev server
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteMedia = {
  /**
   * HERO BACKGROUND
   * Controls the large full-screen background on the homepage.
   */
  hero: {
    backgroundImage: {
      src: "/images/hero-bg.jpg",
      alt: "Aerial view of a heritage hotel in the Kumaon hills",
      overlay: 0.52,
      position: "center center",
    },
  },

  /**
   * CULTURE SECTION — Aipan Art
   * Images showing the traditional Aipan folk art of Kumaon.
   * Shown in the "Roots of Kumaon" section.
   */
  aipan: [
    {
      src: "/images/aipan-art.jpg",
      alt: "Traditional Aipan folk art with lotus and peacock motifs",
      caption: "Sacred geometry — Lotus & Peacock",
    },
    {
      src: "/images/aipan-wall.jpg",
      alt: "Aipan art painted on the wall of a Kumaoni home",
      caption: "White rice-paste patterns on terracotta",
    },
    // Add more Aipan images here:
    // { src: "/images/aipan-floor.jpg", alt: "...", caption: "..." },
  ],

  /**
   * CULTURE SECTION — Kumaoni Homes
   * Images of traditional Kumaoni architecture.
   */
  homes: [
    {
      src: "/images/kumaoni-home.jpg",
      alt: "Traditional Kumaoni stone and wood home with Himalayan backdrop",
      caption: "Stone & timber — Built to last centuries",
    },
    {
      src: "/images/kumaoni-village.jpg",
      alt: "Kumaoni hilltop village with terraced fields and snow peaks",
      caption: "A village on the ridge — Kumaon, Uttarakhand",
    },
    // Add more home images here:
    // { src: "/images/nainital-property.jpg", alt: "...", caption: "..." },
  ],

  /**
   * ABOUT SECTION GALLERY
   * The main photo that appears in the About section.
   */
  gallery: [
    {
      src: "/images/hero-bg.jpg",
      alt: "Kumaon hill property at golden hour",
      caption: "Kumaon, Uttarakhand",
    },
  ],

  /**
   * BRAND / LOGO
   */
  logo: {
    src: null as string | null,
    alt: "Shikhar Media",
  },
};

/**
 * AREAS WE SERVE
 * Edit name, lat/lng coordinates, and description for each location.
 */
export const servedAreas = [
  { name: "Nainital",     lat: 29.38, lng: 79.46, desc: "The Lake District of Kumaon" },
  { name: "Mukteshwar",   lat: 29.47, lng: 79.65, desc: "Misty hilltop retreats & orchards" },
  { name: "Jim Corbett",  lat: 29.53, lng: 79.02, desc: "Wildlife resorts & jungle camps" },
  { name: "Ranikhet",     lat: 29.65, lng: 79.43, desc: "Colonial-era hill station" },
  { name: "Almora",       lat: 29.60, lng: 79.66, desc: "Heritage capital of Kumaon" },
  { name: "Binsar",       lat: 29.72, lng: 79.74, desc: "Himalayan panorama & eco-lodges" },
  { name: "Bhimtal",      lat: 29.34, lng: 79.56, desc: "Serene lake homestays" },
  { name: "Kausani",      lat: 29.84, lng: 79.59, desc: "Sunrise views of the Himalayas" },
];

export default siteMedia;
