'use client';

import AOS from 'aos';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      delay: 25,
      duration: 400,
      easing: 'ease-in-out',
      offset: 20,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  useEffect(() => {
    const existing = document.getElementById('rb2b-script');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = 'rb2b-script';
    script.src =
      'https://ddwl4m2hdecbv.cloudfront.net/b/R6G5YH8MJ165/R6G5YH8MJ165.js.gz';
    script.async = true;
    document.body.appendChild(script);
  }, [pathname]);

  return <ParallaxProvider>{children}</ParallaxProvider>;
}
