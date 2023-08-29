import { create } from "zustand";


// 스토어 : sideMenu 표시 전환을 위한 상태 관리
// 어떤 상태? : displaySideMenu (boolean)
// 어떤 액션? : toggleSideMenu 

// 커스텀 훅 : useSideMenuStore 내보내기
// 생성 : create() 함수

export const useSideMenuStore = create((set) => {
  displaySideMenu : false,
})