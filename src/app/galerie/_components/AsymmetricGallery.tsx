'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { galleryItems } from '@/lib/data';

function ParallaxImage({ item, index }: { item: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Different items get slightly different speeds based on index 
  // to break the grid uniformity and create depth.
  const yOffset = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? [50, -50] : [100, -100]);

  // Use the data-driven `span` property for layout
  let spanClass = "asym-gallery__item";
  if (item.span === 'wide') spanClass += " asym-gallery__item--wide";
  else if (item.span === 'tall') spanClass += " asym-gallery__item--tall";

  return (
    <div ref={ref} className={spanClass}>
      <motion.div 
        style={{ y: yOffset }} 
        className="asym-gallery__img-wrap"
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="asym-gallery__img"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
        />
        <div className="asym-gallery__caption-layer">
          <span>{item.caption}</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function AsymmetricGallery() {
  return (
    <div className="asym-gallery">
      {galleryItems.map((item, i) => (
        <ParallaxImage key={i} item={item} index={i} />
      ))}
    </div>
  );
}
