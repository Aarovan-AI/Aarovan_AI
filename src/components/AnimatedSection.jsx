import { useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

export default function AnimatedSection({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className = '',
  as: Tag = 'div'
}) {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const innerRef = useRef(null);

  useEffect(() => {
    if (isVisible && innerRef.current) {
      innerRef.current.style.transitionDelay = `${delay}ms`;
    }
  }, [isVisible, delay]);

  const directionClass = {
    up: 'animate-up',
    left: 'animate-left',
    right: 'animate-right',
    scale: 'animate-scale',
  }[direction] || 'animate-up';

  return (
    <Tag
      ref={(node) => {
        ref.current = node;
        innerRef.current = node;
      }}
      className={`animate-on-scroll ${directionClass} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
