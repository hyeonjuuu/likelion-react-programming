import { useState } from 'react';

// const getOne = () => 1;

function LearnStateAndEffects() {
  // 지역 변수는 상태 변수???
  // 리액트 상태 변수는 useState 훅(함수) 사용한다.
  // Q. 컴포넌트 count 상태를 리액트에서 인식하도록 정의해봅니다.
  // let count = 100;
  // A. React.useState() 훅을 사용하세요.
  // const [count2] = useState(() => getOne());
  // console.log(count1);
  // console.log(count2);
  const [count, setCount] = useState(100);
  const [step] = useState(12);

  // 상태 정의와 상태 변경

  return (
    <div className="m-10 flex flex-col gap-2 items-start" lang="en">
      <h2 className="text-indigo-600 text-2xl uppercase">
        Learn State And Effects {count}
      </h2>
      <div>
        <div>
          <label htmlFor="">step</label>
          <input
            type="number"
            value={step}
            onChange={(e) => {
              console.log(e.target.value);
            }}
            className="w-12 py-1 px-2 border-slate-300 border rounded-full"
          />
        </div>
        <button
          type="button"
          onClick={() => setCount(count + step)}
          className="py-0.5 px-2.5 border rounded-md border-slate-600"
        >
          +{step}
        </button>
      </div>
    </div>
  );
}

export default LearnStateAndEffects;
