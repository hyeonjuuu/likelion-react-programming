const { create } = require("zustand")

// 1. store 작성 (상태 관리 저장소)
const catStore = () => {
  // 이 함수에서 반환되는 객체 = 함수
  // 상태 = 명사(속성), 동사(함수 = 액션)
return {
  // 상태 : 고양이들(집합)
  // 읽기 (GET, 불변 데이터 관리)
  cats : [
    {id : crypto.randomUUID(), name:'찐빵', age:2, gender:'male'},
    {id : crypto.randomUUID(), name:'뭉치', age:2, gender:'male'}
  ]
  // 쓰기(SET)
  // 고양이(반려묘) 추가
  // 추가할 고양이 정보 : 이름, 나이, 성별
  // ^매개변수 3개
// addCat({name, age, gender})=>{}
// ^매개변수 1개
addCat(catInfo)=>{}
  // 고양이(반려묘) 제거
}
}

// 2. use 훅 생성 (훅 내보내기)
export const useCatsStore = create(catStore)