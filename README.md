# 🌿 Leafresh - Frontend

> Leafresh - Frontend 프로젝트는 식물 원예 일지 플랫폼인 Leafresh의 View를 구성하기 위하여 설계되었습니다.
> 
<br/>

## **목차**
+ [기술 스택](#기술-스택)
+ [설치 방법](#설치-방법)
+ [기여 방법](#기여-방법)
+ [문의 사항](#문의-사항)

<br/>

## 기술 스택
+ 언어: Html, Css, Javascript
+ 프레임워크: Vue.js - v3.4.29
+ API: Axios
+ IDE Tool: Vscode
+ 기타 도구: Vercel, Npm

<br/>

## 설치 방법

### **리포지토리 클론**
```bash

$ git clone https://github.com/Leafresh-2024/Leafresh-Frontend.git

```

<br/>

### **디렉토리 이동**

```bash

$ cd Leafresh-Frontend

```

<br/>

### **의존성 설치**

```bash

$ npm run install

# or

$ npm run i


```

<br/>

### **애플리케이션 실행**

```bash

$ npm run dev

```

<br/>

## 기여 방법
### **버전 관리 규칙 (Version Control Guidelines)**

- **브랜치 전략 (Branching Strategy)**:
    
    모든 브랜치 이름은 `leafresh/`로 시작하며, 그 뒤에 두 개의 구분자로 나뉜 식별자가 따라옵니다.
    
    첫 번째 식별자와 두 번째 식별자 사이에는 언더바로 구분합니다, 병합이 완료된 브랜치는 삭제하지 않습니다.
    
    1. **첫 번째 식별자**: 해당 브랜치의 주제를 나타냅니다. 예를 들어, 주요 기능이나 모듈 이름을 사용합니다. (예: `main`, `admin`)
    2. **두 번째 식별자**: 주제와 관련된 세부 작업 또는 세부 기능을 나타냅니다. 예를 들어, 특정 컴포넌트나 기능의 이름을 사용합니다. (예: `components`, `diary`, `notice`)
    
    예시:
    
    - `leafresh/main_components`: 메인 기능과 관련된 컴포넌트 작업.
    - `leafresh/main_diary`: 메인 기능과 관련된 다이어리 기능 작업.
    - `leafresh/admin_notice`: 관리자 기능과 관련된 공지사항 작업.


- **커밋 메시지 규칙 (Commit Message Conventions)**: 커밋 메세지의 형식은 [**https://jane-aeiou.tistory.com/93**](https://jane-aeiou.tistory.com/93) 에 의하여 작성한다.
    
    
    | Type 키워드 | 사용 시점 |
    | --- | --- |
    | feat | 새로운 기능 추가 |
    | fix | 버그 수정 |
    | docs | 문서 수정 |
    | style | 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)기능 수정이 없는 경우 |
    | design | 사용자 UI 디자인 변경 (CSS 등) |
    | test | 테스트 코드, 리팩토링 테스트 코드 추가 |
    | refactor | 코드 리팩토링 |
    | build | 빌드 파일 수정 |
    | ci | CI 설정 파일 수정 |
    | perf | 성능 개선 |
    | chore | 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등) |
    | rename | 파일 혹은 폴더명을 수정만 한 경우 |
    | remove | 파일을 삭제만 한 경우 |
    
    ### Commit Message 구조
    
    > type(타입) : title(제목)
    > 
    
    ex) feat : main diary update
    

- **병합 및 충돌 해결 (Merging and Conflict Resolution)**:
    - 디폴트 브랜치에 *병합할 때에는* 생성한 도메인의 브랜치에서 dev 브랜치로 pull request 하여 병합한다. 이때 리뷰어는 최소 3명이 필요하며 승인을 받아야 한다.
    - 병합 충돌시에는 깃허브 Resolve conflicts를 이용하여 조정한다.

<br/>

## 문의 사항

> 프로젝트와 관련된 문의는 다음을 통해 연락주시기 바랍니다.

토론 등록: [GitHub Discussions](https://github.com/orgs/Leafresh-2024/discussions)

<br/>
