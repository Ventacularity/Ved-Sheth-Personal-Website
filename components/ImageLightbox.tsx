"use client";
import { useEffect, useState } from "react";

export default function ImageLightbox() {
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null);
  useEffect(() => {
    function open(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement) || !anchor.closest("#main")) return;
      const img = anchor.querySelector("img");
      if (!img || !/\.(png|jpe?g|webp|gif|avif)(?:$|[?#])/i.test(anchor.href)) return;
      event.preventDefault();
      setImage({ src: anchor.href, alt: img.alt || "Expanded photograph" });
    }
    document.addEventListener("click", open);
    return () => document.removeEventListener("click", open);
  }, []);
  useEffect(() => {
    if (!image) return;
    function closeOnEscape(event: KeyboardEvent) { if (event.key === "Escape") setImage(null); }
    document.addEventListener("keydown", closeOnEscape);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = previous; };
  }, [image]);
  if (!image) return null;
  return <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={image.alt} onClick={() => setImage(null)}>
    <button type="button" className="image-lightbox-close" onClick={() => setImage(null)} aria-label="Close enlarged image">×</button>
    <img src={image.src} alt={image.alt} onClick={event => event.stopPropagation()} />
    <span className="image-lightbox-hint">Click outside or press Esc to close</span>
  </div>;
}
