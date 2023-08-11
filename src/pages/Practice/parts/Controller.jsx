import GoToButton from './GoToButton';
import { getNode } from '@/utils/getNode';

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      <GoToButton
        direction="down"
        label="스크롤 다운"
        onClick={() => {
          // side effect 영역
          // React 렌더링 과정과 상관 없이 여기에는 어떤 코드든 작성이 가능하다
          // 왜냐하면 리얼월드에서 처리되기 때문.
          // #이벤트 적용하기
          const practiceElement = getNode('.Practice');
          practiceElement.scroll({ top: 900, behavior: 'smooth' });
        }}
      />

      <GoToButton
        direction="up"
        label="스크롤 업"
        onClick={() => {
          console.log('go to up');
          // #이벤트 적용하기
          const practiceElement = getNode('.Practice');
          practiceElement.scroll({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default Controller;
