# React Router Test

## 공부한 내역

- React

  - `npx create-react-app react-router-study` 로 자동 생성가능

&nbsp;

- React-Router
  - [참조 링크](https://velog.io/@kwonh/React-react-router-dom-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)
  - `npm i react-router-dom` 로 임포트
  - App.js 에서 적용
    ```javascript
    import React, { Component } from "react";
    import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
    ```
  - 각각의 임포트된 라이브러리는 다음의 역할을 합니다.
    - BrowserRouter
      > history API를 사용해 URL과 UI를 동기화하는 라우터입니다.
    - Route
      > 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링한다.
    - Link
      > 'a'태그와 비슷합니다. to속성에 설정된 링크로 이동합니다. 기록이 history스택에 저장됩니다.
    - Switch
      > 자식 컴포넌트 Route또는 Redirect중 매치되는 첫 번째 요소를 렌더링합니다. Switch를 사용하면 BrowserRouter만 사용할 때와 다르게 하나의 매칭되는 요소만 렌더링한다는 점을 보장해줍니다. 사용하지 않을 경우 매칭되는 모두를 렌더링합니다.
