// ^ store을 전달받아 Hook을 생성
// store (define state & action) -> hook (bind componenet)
import { create } from 'zustand';

// import { createWithEqualityFn } from "zustand/traditional";

// ^setState와 같은 상태
const listStore = (set) => {
  // return state
  return {};
};

create(listStore);
