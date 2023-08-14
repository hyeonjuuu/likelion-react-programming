// 함수 안에는 순수해야 한다.
// &순수하지 않은 코드가 들어와도 되는 구간 : 1. 이벤트 핸들러 2. 이펙트 훅
import * as React from 'react';
//* pure 순수해야한다

// React.useEffect
// React.useState
// ...
// React.useRef

function SideEffect() {
  // pure
  console.log(document.querySelector('.SideEffect'));

  React.useEffect(
    /* setup */
    () => {
      // impure
      console.log('effect callback');
      const effectElement = document.querySelector('.SideEffect');
      effectElement?.setAttribute('lang', 'en');
    }
    /* dependencies? */
  );

  return (
    <div className="SideEffect">
      <h2>Side Effect</h2>
      <p>impure action</p>
    </div>
  );
}

export default SideEffect;
