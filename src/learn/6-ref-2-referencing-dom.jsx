import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

function RefExampleReferencingDOM() {
  return (
    <>
      <h2 className="mb-10">컴포넌트 내부의 DOM 요소를 직접 참조하는 Refs</h2>
      <div className="flex gap-10">
        <Circle />
        <Circle />
        <Circle />
      </div>
    </>
  );
}

// React 컴포넌트는 순수해야 한다. (렌더링 프로세스 순수해야 하기 때문에)
// Web Animation, GSAP, jQuery와 같은 API는 명령형 프로그래밍이다.
// 그러므로 컴포넌트 내부에 직접 사용할 수 없다.
// 명령형 프로그래밍을 작성할 수 있는 구간은 2군데이다.
// 1. useLayoutEffect 훅 (브라우저 페인팅 이전에 실행)
// 2. Event Handler(Listener)
//
// React 요소(가상)가 실제 DOM에 렌더링 된 후 요소를 참조하려면?
// 기존의 document.getElementById, document.querySelector 사용하는 것이 권장되지 않는다.
// 그럼 어떻게 하는게 좋냐? 공식문서 피셜 useRef 훅을 사용해 Refs 객체 생성하여 활용하라.
// const anyRef = useRef(null);

// 1. Refs 생성
// 2. JSX 요소 ref 속성(prop)에 Refs 연결
// 3. useLayoutEffect 훅 안에서 Refs 현재(current) 값으로 명령형 프로그래밍

function Circle() {
  const componentRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. CSS 선택자 사용하기 (GSAP 사용자 방식)
      // gsap.to('img', { })
      // 2. Refs 사용하기 (React 방식)
      // gsap.to(imageRef.current, {  });
    }, componentRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <figure
      role="none"
      ref={componentRef}
      className="grid place-content-center w-16 h-16 rounded-full bg-yellow-400"
    >
      <img ref={imageRef} src="/vite.svg" alt="Vite" />
    </figure>
  );
}

export default RefExampleReferencingDOM;
