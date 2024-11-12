interface ImageFormat {
  small: {
    url: string;
  };
}

interface CoverPhoto {
  formats: ImageFormat;
}

interface Gallery {
  id: string;
  Gallery_Title: string;
  Cover_Photo: CoverPhoto;
}

interface GalleryResponse {
  data: Gallery[];
}

import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
export const dynamic = "force-static";

export default async function Gallery() {
  const res = await fetch(
    `${process.env.NEXT_STRAPI_URL}/api/galleries?populate=Cover_Photo`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const collections: GalleryResponse = await res.json(); // Use the defined type here

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {collections.data.map((gallery) => (
        <div key={gallery.id}>
          <h2>{gallery.Gallery_Title}</h2>
          <Image
            alt=""
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.NEXT_STRAPI_URL}${gallery.Cover_Photo.formats.small?.url}`}
          />
          <Link href={`/gallery/${gallery.id}`}>{gallery.Gallery_Title}</Link>
        </div>
      ))}
    </div>
  );
}
