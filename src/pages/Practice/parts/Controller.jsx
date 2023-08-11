// 필요 없어요. 왜? -> JSX 트랜스폼(변환) 엔진 업그레이드로 아래 코드가 없어도 정상 작동됨.
// import React from 'react';

import GoToButton from './GoToButton';

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      <GoToButton direction="down" label="스크롤 다운" />
      <GoToButton direction="up" label="스크롤 업" />
    </div>
  );
}

export default Controller;
