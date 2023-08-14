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

  React.useEffect(() => {
    // * impure 이 안에선 불순해도 된다!
    // 이펙트 콜백 함수
    // DOM 커밋 이후에 실행
    console.log('effect callback');
    const effectElement = document.querySelector('.SideEffect');
    effectElement?.setAttribute('lang', 'en');
  });

  /* 
    // Virtual DOM => Virtual Element Tree (React Element Tree)
    {
      @@typeof: Symbol('react-element'),
      key: null,
      type: 'div',
      props: {
        className: 'SideEffect',
        children: [
          {
            @@typeof: Symbol('react-element'),
            key: null,
            type: 'h2',
            props: {
              children: 'Side Effect'
            }
          },
          {
            @@typeof: Symbol('react-element'),
            key: null,
            type: 'p',
            props: {
              children: 'impure action'
            }
          }
        ]
      }
    }
  */

  return React.createElement(
    'div',
    { className: 'SideEffect' },
    React.createElement('h2', null, 'Side Effect'),
    React.createElement('p', null, 'impure action')
  );

  // return (
  //   <div className="SideEffect">
  //     <h2>Side Effect</h2>
  //     <p>impure action</p>
  //   </div>
  // )
}

export default SideEffect;
