import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "yw95u1hb",
  dataset: "production",
  useCdn: true,
});
