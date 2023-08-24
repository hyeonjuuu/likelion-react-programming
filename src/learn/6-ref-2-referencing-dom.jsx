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
  // useEffect 콜백보다 먼저 실행
  // 리액트 렌더링 프로세스
  // 1. 렌더 트리거
  // 2. 컴포넌트 렌더링
  // 3. DOM 커밋
  // -useLayoutEffect() 콜백
  // 브라우저 렌더링 프로세스
  // 4.브라우저 페인팅
  // -useEffect() 콜백
  useLayoutEffect(() => {
    // javascript animation API
  });
  return (
    <figure role="none" className="w-16 h-16 rounded-full bg-yellow-400" />
  );
}

export default RefExampleReferencingDOM;
