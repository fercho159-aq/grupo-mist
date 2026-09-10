'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/ui/Container';

interface StatItem {
  value: string;
  prefix: string;
  number: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '+9', prefix: '+', number: 9, suffix: '', label: 'Anos de experiencia' },
  { value: '8', prefix: '', number: 8, suffix: '', label: 'Servicios especializados' },
  { value: '+50', prefix: '+', number: 50, suffix: '', label: 'Proyectos ejecutados' },
  { value: '100%', prefix: '', number: 100, suffix: '%', label: 'Sector publico y privado' },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    }

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function StatCounter({
  stat,
  inView,
}: {
  stat: StatItem;
  inView: boolean;
}) {
  const count = useCountUp(stat.number, 2000, inView);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white md:text-5xl">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm text-white/80">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#8B7D3C] py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </Container>
    </section>
  );
}
