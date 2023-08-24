// 컨텍스트
// 1. Context 생성 (React.createContext)
// 3. Context Provider로 앱을 감쌈
// 2. Context Provider를 사용해 값(value) 공급

// 컴포넌트
// 1. useContext 훅을 사용해서 공급된 컨텍스트 값을 주입 (injection)
// 2. JSX 또는 이벤트 핸들러 내부에서 값을 사용

/* -------------------------------------------------------------------------- */

import { useState } from 'react';
import { createContext } from 'react';

// Context 생성
const AuthContext = createContext();
// 초기 인증 상태
const initialAuthState = {
  isAuth: false,
  user: null,
  token: '',
};
// Context.Provider 래퍼 컴포넌트 작성
function AuthProvider({ displayName = 'AuthProvider', children }) {
  // pb.authStore = {isValid, model, token}
  // 인증 상태 관리
  const [authState, setAuthState] = useState(initialAuthState);

  // 메서드를 만들어 공급.
  // 메서드 : 할 수 있는 기능
  // 회원가입, 로그인, 로그아웃, 가입탈퇴
  const signUp = async () => {
    return await pb.collection('users').create;
  };
  const signIn = async () => {};
  const signOut = async () => {};
  const secession = async () => {};
  const authValue = {
    authInfo: authState,
    signUp,
    signIn,
    signOut,
    secession,
  };

  return (
    <AuthContext.Provider value={authValue} displayName={displayName}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
