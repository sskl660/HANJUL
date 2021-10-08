# Git Convention

- 참조

https://overcome-the-limits.tistory.com/entry/협업-협업을-위한-기본적인-git-커밋컨벤션-설정하기

https://udacity.github.io/git-styleguide/

https://meetup.toast.com/posts/106

## 1. Commit types

- **init**: 새로운 프로젝트 초기 설정

- **feat**: 새로운 기능을 추가할 경우

- **fix**: 버그를 고친 경우

- **design**: CSS 등 디자인 변경

- **docs**: 문서를 수정한 경우 (제품 코드 수정 X)

- **style**: 코드 포맷 변경, 세미 콜론 누락, 주석 등의 변경

- **refactor**: 프로덕션 코드 리팩토링

- **test**: 테스트 추가, 테스트 리팩토링 (프로덕션 코드 변경 X)

- chore

  : 빌드 테스트 업데이트, 패키지 매니저를 설정/수정하는 경우 (프로덕션 코드 변경 X)

  - package.json의 변경이나 dotenv의 요소 변경, 모듈 변경 등

- **rename:** 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우

- **remove**: 파일을 삭제하는 작업만 수행한 경우sts

```bash
type: subject(제목)

body(본문)

footer(푸터)
```

## 1-1. 참고사항

1. 제목과 본문을 한 줄 띄워 분리하기

   1. 이유

   ```
   Derezz the master control program
   
   MCP turned out to be evil and had become intent on world domination.
   This commit throws Tron's disc into MCP (causing its deresolution)
   and turns it back into a chess game.
   ```

   `git log`는 이 커밋 메시지를 다음과 같이 보여줍니다.

   ```
   $ git log
   commit 42e769bdf4894310333942ffc5a15151222a87be
   Author: Kevin Flynn <kevin@flynnsarcade.com>
   Date:   Fri Jan 01 00:00:00 1982 -0200
   
    Derezz the master control program
   
    MCP turned out to be evil and had become intent on world domination.
    This commit throws Tron's disc into MCP (causing its deresolution)
    and turns it back into a chess game.
   ```

   별다를게 없네요. 여기서 `git log --oneline` 옵션을 사용해 봅니다.

   ```
   $ git log --oneline
   42e769 Derezz the master control program
   ```

2. 제목은 영문 기준 50자 이내로

3. 제목 첫글자를 대문자로

4. 제목 끝에 `.` 금지

5. 제목은 `명령조`로

   1. `제목` 에만 적용된다!

   ```bash
   예문을 보여드리겠습니다.
   (If applied, this commit will) Refactor subsystem X for readability
   (If applied, this commit will) Update getting started documentation
   (If applied, this commit will) Remove deprecated methods
   (If applied, this commit will) Release version 1.0.0
   (If applied, this commit will) Merge pull request #123 from user/branch
   
   안어울리는 문장을 쓰면 어떻게 되는지 볼까요?
   (If applied, this commit will) Fixed bug with Y
   (If applied, this commit will) Changing behavior of X
   (If applied, this commit will) More fixes for broken stuff
   (If applied, this commit will) Sweet new API methods
   ```

6. 본문은 영문 기준 72자마다 줄 바꾸기

7. 본문은 `어떻게`보다 `무엇을`, `왜`에 맞춰 작성하기

## 1-2. 예시

1. 

```bash
feat: 상세 페이지 ThumbnailList 컴포넌트에 무한 스크롤 추가

2020.04.05 x님의 기획 요구사항 변경으로 인해 상세 페이지 ThumbnailList 컴포넌트 기능 변경
모바일 버전에서 페이지네이션 방식에서 무한 스크롤 방식으로 기능 변경
- vue-infinitet-scroll@2.3.0 라이브러리 추가

issue tracker
Resolves: #231
```

1. 

```bash
feat: Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequenses of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```

1. 

```bash
feat: Update login ID/PWD components
```

## 2. Branch

- **feature**
  - feature/{위치}/{기능대분류}_{기능명}
    - feature/fe/user_login
    - feature/be/social_login
    - fe/be로만 나뉘기 때문에 이 방법이 좋을 것 같음
  - feature/{위치}_{기능}
    - feature/mobile_admin_dashboard
    - 브랜치명이 길게 나올 것 같으면 깔끔하게 나타낼 수 있음
- **develop**
  - 이름 그대로 사용
- **master**
  - 이름 그대로 사용
- release
  - release/1.0.0