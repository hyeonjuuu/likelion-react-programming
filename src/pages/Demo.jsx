import Switcher from '@/components/Switcher/Switcher';
import React from 'react';

function Demo() {
  // 로컬변수
  let myName = '로컬 변수';

  // 로컬 뮤테이션
  // myName += 'Wow';

  // 상태 관리는 페이지 컴포넌트에서 진행
  // React.useState() 훅으로 선언된 상태로 제어
  // on/off 상태 변수 (관리할 데이터 타입은 Boolean)

  const readyState = React.useState();

  // 리액트가 요구하는 방법대로 상태를 업데이트(변경)하면?
  // 렌더링 트리거 -> 컴포넌트 렌더링 -> DO< 커밋 순으로 진행

  return (
    <div
      style={{
        padding: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 8,
      }}
    >
      {/* Atomic Component */}
      <Switcher onLabel="on" offLabel="off" />
      <Switcher
        on
        onLabel="on"
        offLabel="off"
        onClick={() => {
          console.log('clicked switcher');
        }}
      />
    </div>
  );
}

export default Demo;
