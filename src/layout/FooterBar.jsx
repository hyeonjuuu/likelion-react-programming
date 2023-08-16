// import styles from '@/styles/FooterBar.module.css';
import { useState } from 'react';

function FooterBar() {
  // 상태 정의와 상태 변경
  // 현재(오늘) 년도를 화면에 출력하는 상태 설정
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    // <footer className='container'>
    <footer className="p-5 grid place-content-center bg-slate-200">
      <small className="text-base text-slate-700">
        Copyright <b>{currentYear}</b> &copy; 모든 저작권은 이듬(EUID)에
        있습니다.
      </small>
    </footer>
  );
}

export default FooterBar;
