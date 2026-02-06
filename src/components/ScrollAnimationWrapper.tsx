import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: 'slide-left' | 'slide-right' | 'slide-up' | 'scale' | 'fade';
  className?: string;
  delay?: number;
  threshold?: number;
}

export function ScrollAnimationWrapper({ 
  children, 
  animation = 'slide-up', 
  className = '',
  delay = 0,
  threshold = 0.1
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, keep it visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  const animationClass = `scroll-${animation}`;
  const visibleClass = isVisible ? 'visible' : '';
  
  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${visibleClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}