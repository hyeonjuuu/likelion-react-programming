// 함수 안에는 순수해야 한다.
// &순수하지 않은 코드가 들어와도 되는 구간 : 1. 이벤트 핸들러 2. 이펙트 훅
import * as React from 'react';

function SideEffect() {
  //* pure 순수해야한다

  // impure code?
  // side effect
  // effect callback
  // useEffect hook
  React.useEffect(
    // * impure 이 안에선 불순해도 된다!
    // 이펙트 콜백 함수
    // DOM 커밋 이후에 실행
    () => {
      // 이 안에 작성된 코드는 이벤트 핸들러처럼
      // 사이드 이펙트 코드를 작성할 수 있다.
      const sideEffectElement = document.querySelector('.SideEffect');
      sideEffectElement.setAttribute('lang', 'en');
    }
  );

  return (
    <div className="SideEffect">
      <h2>Side Effect</h2>
      <p>impure action</p>
    </div>
  );
}

export default SideEffect;
