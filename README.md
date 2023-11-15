# 5주차 미션: Next-Netflix

## 서론

안녕하세요, 프론트 운영진 **노수진**입니다 😸

이번주부터는 새 프로젝트인 **Netflix 클론코딩**을 진행합니다. 이번 미션은 Next.js를 사용해 보며 SSR을 학습하고 Figma로 주어지는 디자인을 활용해 스타일링 하는 방법을 이해하는 것을 목표로 합니다.

또한 이번주부터는 프론트 페어와 함께하는 과제인 만큼 각 팀별로 미리 호흡을 맞춰 보는 좋은 기회가 될 것 같습니다. 모두 화이팅입니다🔥

## 미션

### 미션 목표

- Next.js 사용법을 공부해봅니다.
- Figma로 주어지는 디자인으로 스타일링 하는 방식에 익숙해집니다.
- Git을 이용한 협업 방식에 익숙해집니다.

### 기한

- 2023년 11월 10일 (기한 엄수)

### 필수 요건

- [결과화면](https://next-netflix-17th-sepia.vercel.app/)의 랜딩 페이지와 메인 페이지를 구현합니다.
- [Figma](https://www.figma.com/file/UqdXDovIczt1Gl0IjknHQf/Netflix?node-id=0%3A1)의 디자인을 그대로 구현합니다.
- Open api를 사용해서 데이터 패칭을 진행합니다. (ex. [themoviedb API](https://developers.themoviedb.org/3/getting-started/introduction))
- `yarn`, `yarn berry`, `npm`, `pnpm`등 패키지 매니저를 직접 선택해 Next.js를 세팅해 봅니다.

### 선택 사항

- SSR(Server Side Rendering)을 적용해서 구현합니다.
- 웹 폰트를 사용합니다.
- 반응형을 고려합니다.

## **Key Question**

- Server Side Rendering과 Client Side Rendering의 차이
- SEO란
- 전반적인 협업 과정

## 링크 및 참고자료

- [랜딩페이지 영상](https://lottiefiles.com/kr/)
- [Next.js Docs](https://beta.nextjs.org/docs)
- [Next.js 13에서 변한 것들](https://velog.io/@hang_kem_0531/Next.js-13%EC%9D%B4-%EB%82%98%EC%99%80%EB%B2%84%EB%A0%B8%EB%8B%A4)
- [Next.js 14에서 변한 것들](https://velog.io/@lee_1124/Next.js-14-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8)
- [Git 협업 가이드](https://velog.io/@jinuku/Git-%ED%98%91%EC%97%85-%EA%B0%80%EC%9D%B4%EB%93%9C)
- [디자이너와 개발자가 협업하기 위한 피그마 기본 기능](https://chingguhl.tistory.com/entry/%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-%ED%94%BC%EA%B7%B8%EB%A7%88-10%EA%B0%80%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EC%99%80-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%ED%98%91%EC%97%85%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-%ED%94%BC%EA%B7%B8%EB%A7%88-%EA%B8%B0%EB%B3%B8-%EA%B8%B0%EB%8A%A5)
- [React에서 무한 스크롤 구현하기](https://tech.kakaoenterprise.com/149)

# PR멘트

## Key Question

### SSR과 CSR의 차이
SSR은 서버 쪽에서 렌더링 준비를 마친 상태에서 클라이언트에게 전달하는 방식이고, 반대로 CSR은 서버에서 요청을 받아 클라이언트로 파일을 보내면 클라이언트 측에서 렌더링을 시작하는 방식이다.
웹페이지 로딩 시간에 있어서 성능차이가 있는데, SSR이 상대적으로 첫 페이지를 로딩하는 시간이 빠르고 나머지 페이지를 로딩하는 시간이 더 느리다 (첫페이지 로딩 과정을 반복하기 때문)
이전 과제까지 사용한 React에서는 라우팅을 통해 CSR을 사용했고, 이번 NextJS에서는 app 폴더 내 url pathname에 맞춘 폴더를 만들어 SSR을 사용했는데 확실히 클라이언트 쪽에서 라우팅 처리를 하지 않아도 되니 작업하는데는 편했지만 페이지 전환 시 로딩 시간이 길어지는 느낌이 있었다.

### SEO
SEO(Search Engine Optimization)는 Search Engine, 구글과 같은 검색엔진에 친화적인 사이트를 만들어 검색 결과의  트래픽 양과 질을 극대화하는 작업이다. 검색엔진은 크롤링을 통해 웹사이트를 읽는데 동적으로 컨텐츠가 생성되는 CSR에 비해 SSR은 애초에 서버사이드에서 컴파일되어 클라이언트로 넘어와서 크롤러 대응에 용이하다

### 협업과정
파트 분리와 gitflow에 기반해 협업하고자 했다. 팀 레포에서 Header,NavBar,Landing, ControlBar / MovieList, api, Slide 로 나누어 각 기능별 브랜치를 파서 구현 후 PR을 올려 merge했다
특정 기능이 완료되어야 이후 작업을 할 수 있는게 있어서 초기세팅과 api연동, 마크업은 분리해서 계획을 짜는 게 좋을 것 같다~!
