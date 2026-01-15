import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: 'slide-left' | 'slide-right' | 'slide-up' | 'scale' | 'fade';
  className?: string;
  delay?: number;
}

export function ScrollAnimationWrapper({ 
  children, 
  animation = 'slide-up', 
  className = '',
  delay = 0
}: ScrollAnimationWrapperProps) {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  const animationClass = `scroll-${animation}`;
  const visibleClass = isVisible ? 'visible' : '';
  
  return (
    <div
      ref={elementRef as any}
      className={`${animationClass} ${visibleClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
