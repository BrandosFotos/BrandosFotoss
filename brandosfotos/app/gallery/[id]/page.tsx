import { Image } from "@nextui-org/image";
import React from "react";

export const dynamic = "force-static";

interface ImageFormat {
  url: string;
  name?: string;
  width?: number;
  height?: number;
}

interface Upload {
  id: string;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    large?: ImageFormat;
  };
  name?: string;
}

interface Gallery {
  id: string;
  Upload_Collection: Upload[];
}

interface GalleryResponse {
  data: Gallery[];
}

export async function generateStaticParams() {
  // Fetch the list of galleries to get their IDs
  const res = await fetch(`${process.env.NEXT_STRAPI_URL}/api/galleries`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const galleries: GalleryResponse = await res.json();

  // Return the list of params (ids) for all gallery pages
  return galleries.data.map((gallery) => ({
    id: gallery.id.toString(), // Ensure the id is a string
  }));
}
export default async function GalleryDetail(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const res = await fetch(
    `${process.env.NEXT_STRAPI_URL}/api/galleries?filters[id][$eq]=${params.id}&populate=Upload_Collection`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const collections: GalleryResponse = await res.json();

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {collections.data.map((gallery: Gallery) => (
        <React.Fragment key={gallery.id}>
          {gallery.Upload_Collection.map((image) =>
            image.formats?.small ? (
              <div key={image.id} className="break-inside-avoid mb-4">
                <Image
                  alt={"Gallery Image"}
                  className="w-full h-full rounded-lg object-cover"
                  height={image.formats.small?.height}
                  src={`${process.env.NEXT_STRAPI_URL}${image.formats.small?.url}`}
                  width={image.formats.small?.width}
                />
              </div>
            ) : (
              <p key={image.id}>No image available</p>
            ),
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
