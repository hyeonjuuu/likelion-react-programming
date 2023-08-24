import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

function RefExampleReferencingDOM() {
  return (
    <>
      <h2 className="mb-10">컴포넌트 내부의 DOM 요소를 직접 참조하는 Refs</h2>
      <Circle />
    </>
  );
}

function Circle() {
  // 이펙트 영역
  useLayoutEffect(() => {
    const circleElement = document.getElementById('circle');

    gsap.set(circleElement, { scale: 0.5 });

    const handleScale = (e) => {
      gsap.to(e.currentTarget, { scale: 2 });
    };

    circleElement.addEventListener('click', handleScale);

    return () => {
      circleElement.removeEventListener('click', handleScale);
    };
  }, []);

  // 이벤트 핸들러
  const handleEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { opacity: 0.5, scale: 4 });
  };

  const handleLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { opacity: 1, scale: 1 });
  };

  return (
    <figure
      role="none"
      id="circle"
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      className="w-16 h-16 rounded-full bg-yellow-400"
    />
  );
}

export default RefExampleReferencingDOM;
