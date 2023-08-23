import { useState } from 'react';

function PassingProps() {
  const { color, setColor } = useState('bg-rose-100');
  // 상태 없데이트 이벤트 핸들러 (색상 바꾸는 함수)
  const handleChangeColor = (newColor) => setColor(newColor);

  return (
    <div className="PassingProps">
      <GrandParent color={color} onChangeColor={handleChangeColor} />
      {/* <GrandParent>
        <Parent>
          <Child>
            <GrandChild>
              <p>데이터를 주세요.</p>
            </GrandChild>
          </Child>
        </Parent>
      </GrandParent> */}
    </div>
  );
}

export default PassingProps;

/* -------------------------------------------------------------------------- */

export function GrandParent({ children }) {
  return <div className="GrandParent">{children}</div>;
}

export function Parent({ children }) {
  return <div className="Parent">{children}</div>;
}

export function Child({ children }) {
  return <div className="Child">{children}</div>;
}

export function GrandChild({ children }) {
  return <div className="GrandChild">{children}</div>;
}
