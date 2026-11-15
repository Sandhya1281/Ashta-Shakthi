import Image from 'next/image';

interface CommunityPhotoFeatureProps {
  src: string;
  alt: string;
  caption: string;
}

export default function CommunityPhotoFeature({ src, alt, caption }: CommunityPhotoFeatureProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <figure className="relative aspect-[4/3] sm:aspect-[16/6] w-full overflow-hidden rounded-3xl border border-cream-300 shadow-md bg-cream-100">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 90vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/10 to-transparent" />
        <figcaption className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium drop-shadow-md">
          {caption}
        </figcaption>
      </figure>
    </section>
  );
}
