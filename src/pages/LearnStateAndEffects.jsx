// 상태는 스냅샷 같이 작동한다.
// 상태란? 시간의 흐름에 따라 변하는 데이터를 말한다.
// 스냅샷은 흐르는 상태의 특정 시점에서의 데이터 조각을 말한다.
// 스냅샷은 현재 실행된 함수 몸체 안에서 변경이 불가능하다.
// 렌더 트리거(요청)를 수행하는 상태 업데이트 함수에 전달한 nextState는 다음 렌더링 시점에 반영된다.
// 그렇다면? 현재 시점에서 변경될 상태에 접근할 수는 없는가?
// 아니다. 사이드 이펙트로 처리가 가능하다.
// 1. 이벤트 핸들러
// 2. useEffect 훅

import { useEffect, useState } from 'react';

function LearnStateAndEffects() {
  const [count, setCount] = useState(0);

  // 이펙트 사용 (동기화)
  // 상태의 변경이 발생하면 이펙트에 설정된 콜백 함수가실행된다.
  // 즉 다음 상태(nextState)에 접근 가능하다.
  useEffect(
    () => {
      // # 1단계 : 이펙트 콜백 함수
      // DOM 커밋 이후에 실행
      // 이펙트 콜백 함수
      console.log('count in effect', count); // nextState
    },
    // # 2단계 : 이펙트 콜백 함수를 실행시키는 조건(배열 포함된 항목)
    // 종속성 배열이 없는 경우, (컴포넌트 렌더링 될 때 마다) 이펙트 함수가 항상 실행됨. -> undefined
    // 종속성 배열이 빈 배열일 경우, 컴포넌트 최초 렌더링 시 1회 실행됨.
    // 종속성 배열에 의존하는 상태를 설정하면 -> 리액트는 종속된 상태의 변경을 감지(이전 -> 이후 상태 감지)
    // 상태가 변경 되었다면 이펙트 콜백 함수를 실행한다.
    // # 3단계 클린업
    [count]
  );

  function handleClick() {
    setCount(count + 10); // count (snapshot) = 0
    console.log('count in event handler', count); // 10???, 0!!!
  }

  /* -------------------------------------------------------------------------- */

  const [isShow, setIsShow] = useState(true);

  // current state snapshot

  useEffect(() => {
    console.log(isShow); // next state snapshot
  }, [isShow]);

  const handleToggle = () => {
    setIsShow(!isShow);
    console.log('isShow = ', isShow); // current state snapshot
  };

  /* -------------------------------------------------------------------------- */
  //   상태 (스냅샷)
  const [studyMessage, setStudyMessage] = useState('리액트에 대해서 알아봐요');

  // -이벤트 핸들러
  const handleChangeMessage = () => {
    // 상태 업데이트 함수 ( 실행되면 렌더 트리거)
    // 리액트!!! 화면에 메세지가 바뀌길 윈해 바꿔줘!(이벤트 핸들러에 요청-trigger)
    setStudyMessage('화이팅!');
  };

  // 컴포넌트 렌더링 ( 함수 컴포넌트 다시 실행)
  // -> 요청을 받고 리액트는 LearnStateAndEffects  컴포넌트를 다시 실행함!

  // 이펙트 (DOM커밋 이후에 실행됨)
  // -> 실제 DOM에 반영된 이후에 콜백 함수가 실행됨.

  // 이펙트 실행 조건 (배열로 설정)

  useEffect(
    // callback
    () => {},
    // 실행 조건
    // 배열에 포함된 상태가 변경되면 이펙트 함수가 콜백된다.
    [studyMessage] // 이 []인에 해당되는 것 말고는 무엇이 바뀌어도 신경쓰지 않겠다! -> 관심사 추가
  );

  // 클린업이 중요한 이유
  useEffect(() => {
    console.log('코기 렌더링 또는 리-렌더링 될 때마다 실행');
  }, [studyMessage, count]);

  return (
    <div className="m-10 flex flex-col gap-2 items-start">
      <h2 className={`text-indigo-600 font-suit text-2xl`}>
        상태 및 이펙트 학습하기 ({count})
      </h2>
      {/* DOM커밋 : 상태가 다음 상태로 변경되어 렌더링 되면 리액트가 실제 DOM 변경 이력을 반영 */}
      <p>{studyMessage}</p>
      {/*       <button type="button" onClick={handleToggle}>
        {isShow ? '감춤' : '숨김'}
      </button>
      {isShow && (
        <button type="button" onClick={handleClick}>
          +10
        </button>
      )} */}
    </div>
  );
}

export default LearnStateAndEffects;
