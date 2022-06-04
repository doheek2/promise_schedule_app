# 📅 약속 일정 APP

![사진1](https://user-images.githubusercontent.com/97458345/172025650-cb379de2-6af7-4e22-8006-4bd39aa1db0e.jpg)

- **배포 URL** <br/> https://promise-schedule-app.netlify.app

<br/>

# 실행 방법
>1. git clone https://github.com/doheek2/promise_schedule_app.git
>2. cd promise_schedule_app
>3. yarn install
>4. yarn start
>5. 로그인 계정 ( E-MAIL: doheek2@naver.com / PW: dohee123 )

<br/>

▶ 회원가입 가능하지만 일정 저장/편집/삭제 기능이 구현되지 않아 <br/>
데이터 읽기가 가능한 계정으로 로그인 부탁드립니다.

<br/>

# 🗂 프로젝트 소개
- **개발 기간** 22.06.01 - 22.06.05
- **프로젝트 개요** Firebase & 카카오 Map API를 이용한 약속 일정 APP

<br/>

# 📁 폴더 구조
<details>
    <summary>펼치기</summary>

```
├─ src
│  ├─ assets
│  │  └─ svgs
│  │     ├─ check.svg
│  │     ├─ index.js
│  │     └─ logo.svg
│  ├─ components
│  │  ├─ CloseBtn
│  │  │  ├─ closeBtn.module.scss
│  │  │  └─ index.tsx
│  │  ├─ Form
│  │  │  ├─ form.module.scss
│  │  │  └─ index.tsx
│  │  └─ MobileWrapper
│  │     ├─ index.tsx
│  │     └─ mobileWrapper.module.scss
│  ├─ index.tsx
│  ├─ logo.svg
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ routes
│  │  ├─ index.tsx
│  │  ├─ Login
│  │  │  ├─ index.tsx
│  │  │  └─ login.module.scss
│  │  ├─ Main
│  │  │  ├─ Calendar
│  │  │  │  ├─ calendar.module.scss
│  │  │  │  └─ index.tsx
│  │  │  ├─ index.tsx
│  │  │  ├─ main.module.scss
│  │  │  └─ SelectList
│  │  │     ├─ index.tsx
│  │  │     └─ selectList.module.scss
│  │  ├─ NewSchedule
│  │  │  ├─ index.tsx
│  │  │  ├─ KakaoMap
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ kakaoMap.module.scss
│  │  │  ├─ newSchedule.module.scss
│  │  │  └─ SelectDate
│  │  │     ├─ datepicker.css
│  │  │     ├─ index.tsx
│  │  │     └─ selectDate.module.scss
│  │  ├─ routes.module.scss
│  │  └─ SignUp
│  │     ├─ index.tsx
│  │     ├─ signUp.module.scss
│  │     └─ SuccessSignUp
│  │        ├─ index.tsx
│  │        └─ successSignUp.module.scss
│  ├─ services
│  │  └─ firebase.ts
│  ├─ setupTests.ts
│  ├─ states
│  │  └─ recoil.ts
│  ├─ styles
│  │  ├─ base
│  │  │  ├─ _fonts.scss
│  │  │  ├─ _more.scss
│  │  │  └─ _reset.scss
│  │  ├─ constants
│  │  │  ├─ _colors.scss
│  │  │  ├─ _levels.scss
│  │  │  └─ _sizes.scss
│  │  ├─ index.js
│  │  ├─ index.scss
│  │  └─ mixins
│  │     ├─ _animation.scss
│  │     ├─ _flexbox.scss
│  │     ├─ _position.scss
│  │     ├─ _responsive.scss
│  │     ├─ _typography.scss
│  │     └─ _visual.scss
│  ├─ types
│  │  └─ promise.d.ts
│  └─ utils
│     └─ axios.ts
├─ tsconfig.json
└─ yarn.lock
```

</details>

<br/>

# 🔨 기술 스택
<div align="center">
 <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
 <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
 <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
 <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
 <img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white"/>

 <br/>

|라이브러리|내용|버전|
|:---:|:---:|:---:|
| classnames | styles 관련 | 2.3.1 |
| firebase | 로그인 및 DB 관련 | 9.8.2 |
| react-datepicker | Date Picker 관련 | 4.8.0 |
| react-icons | icon 관련 | 4.4.0 |
| react-kakao-maps-sdk | kakao API 관련 | 1.1.1 |
| react-use | 리액트 편의 | 17.3.2 |

<br/>

</div>

# 🏞 기능 설명

## 1. 로그인 및 회원가입

![사진2](https://user-images.githubusercontent.com/97458345/172026026-8467ff18-186a-4e6f-9810-0bc43ae92e71.jpg)

### - 로그인
<details>
  <summary>구현 방법</summary>
1. signInWithEmailAndPassword를 통해 firebase에 있는 계정 정보와 일치하면 메인 화면으로 이동합니다.

```ts
signInWithEmailAndPassword(auth, email, password).then(() => {
  setIsLoggedIn(true)
  navigate('/')
})
```   

</details>

<br/>

### - 회원가입
<details>
    <summary>구현 방법</summary>
1. createUserWithEmailAndPassword를 통해 firebase에 계정 생성이 되면 '회원 가입 성공' 페이지로 이동합니다.

```ts
createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    navigate('/successSignUp')
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error.message)
  })
```
</details>

<br/>

## 2. 메인 페이지 및 '약속 일정 생성' 페이지

![사진1](https://user-images.githubusercontent.com/97458345/172025650-cb379de2-6af7-4e22-8006-4bd39aa1db0e.jpg)

### - 메인 페이지
<details>
  <summary>구현 방법</summary>
1. 현재 선택된 month 1일의 요일을 구하여 일요일부터 해당 요일까지 공백을 준 뒤, date count만큼 date을 출력합니다.

```ts
const returnDay = useCallback(() => {
  const dayArr: ReactElement[] = []
  for (const nowDay of WEEK_LIST) {
    let i = 0
    const day = new Date(selectedYear, selectedMonth - 1, 1).getDay()
    if (WEEK_LIST[day] === nowDay) {
      for (i = 0; i < dateTotalCount; i += 1) {
        const timeKey = `day${i + 1}`
        dayArr.push(
          <button
            type='button'
            key={timeKey}
            onClick={dateClickHandler}
            value={i + 1}
            className={cx(
              {
                [styles.today]: TODAY.year === selectedYear && TODAY.month === selectedMonth && TODAY.date === i + 1,
              },
              { [styles.weekday]: true },
              {
                [styles.sunday]: new Date(selectedYear, selectedMonth - 1, i + 1).getDay() === 0,
              },
              {
                [styles.clickedDate]: isBtnClickedArr[i],
              }
            )}
          >
            {i + 1}
          </button>
        )
      }
    } else {
      dayArr.push(<div key={nowDay} className={styles.weekday} />)
    }
    if (i === dateTotalCount) break
  }
  return dayArr
}, [selectedYear, selectedMonth, dateTotalCount])
```

<br/>

2. firebase에 저장되어 있는 일정 날짜 데이터와 캘린더에 선택한 날짜 데이터가 일치하면 selectData에 push합니다.

```ts
if (firebaseData.length !== 0) {
  firebaseData[0].data.forEach((v) => {
    const year = new Date(v.date).getFullYear()
    const month = new Date(v.date).getMonth() + 1
    const date = new Date(v.date).getDate()

    if (year === selectedYear && month === selectedMonth && date === selectedDate) {
      selectData.push(v)
    }
  })
}
```
</details>

<br/>

### - '약속 일정 추가' 페이지
<details>
  <summary>구현 방법</summary>
1. 라이브러리를 통해 DatePicker를 구현하였습니다. <br/>
(직접 custom을 하기 위해 module.scss가 아닌 css 파일을 사용하였습니다.)

```ts
<DatePicker
  selected={selectedDate}
  className='datepicker'
  dateFormat='yy. MM. dd (eee)'
  disabledKeyboardNavigation
  onChangeRaw={inputReadOnlyHandler}
  onChange={dateChangeHandler}
  customInput={<input type='text' className={styles.datePickerInput} />}
  renderCustomHeader={({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div className={styles.datePickerHeader}>
      <button
        type='button'
        className={cx(styles.navigation, styles.prevBtn)}
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        <MdArrowBackIos />
      </button>
      <div className={styles.currentMonth}>
        {date.getFullYear()} {date.getMonth() + 1}
      </div>
      <button
        type='button'
        className={cx(styles.navigation, styles.nextBtn)}
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  )}
/>
```

<br/>

2. geolocation을 통해 현재 위치를 kakao map을 통해 보여줍니다.

```ts
const [lat, setLat] = useState(33.450701)
const [lng, setLng] = useState(126.570667)

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude)
    setLng(position.coords.longitude)
  })
}
```

</details>

<br/>

# 📌 추가 개발 목록
1. 일정 저장/편집/삭제
2. 메인 페이지 캘린더에 일정 있는 날짜 표시
3. 메인 페이지 스타일 수정
4. 카카오 MAP -> 구글 MAP 변경

<br/>

# 😥 아쉬운 점
### 1. 시간 부족
4일이란 시간동안 내 포트폴리오를 만드는게 쉽지 않았다. 그렇다고 해서 간단하게 만들고 싶진 않았다. 처음 써보는 것들도 많고 디자인에 신경을 쓰려고 하다 보니 시간이 많이 부족했다. 아직 실력이 많이 부족한데 욕심낸건 아닌가 싶었다. 아쉽게도 기간 내에 다 하진 못했지만 개인 과제 채점이 끝난 이후로 다시 개발을 시작할 예정이다.

### 2. 처음 써보는 라이브러리와 구현
firebase, datePicker, 캘린더 등등 처음 써보는 라이브러리와 직접 구현해본 것이 많았다. 물론 처음 하는건 모든지 익숙치 않지만 결국 이것도 시간 부족과 연관이 있는 것 같다. dataPicker와 캘린더 한다고 firebase 공부와 적용을 짧은 시간 내에 할 수가 없었다. firebase 제대로 공부해서 이 APP이 제대로 동작했으면 좋겠다. 그리고 이번엔 캘린더만 직접 구현해봤지만 다음엔 datePicker도 직접 구현해보고 싶다.

### 3. 메인 페이지 디자인
메인 페이지 제외한 다른 페이지는 내 기준에선 괜찮다고 생각한다. 근데 메인 페이지 디자인이 왜 이렇게 촌스러운지 이유를 모르겠다. 다른 페이지 디자인에 시간 많이 쏟아부은건 사실이다. 메인 페이지는 시간이 없어 지금 당장 수정하긴 어렵지만 나중에라도 꼭 수정해야겠다. 내 눈으로도 보기가 힘들다.

### 4. 카카오 MAP 길찾기
예전에 카카오 MAP 길찾기 기능이 있어서 당연하게 사용하려고 적용까지 했지만 길찾기 기능 지원이 종료됐다고 한다. 구글 MAP으로 변경하고 길찾기 기능을 구현하는 것 역시 시간 부족이였다. 지금 '약속 일정 추가' 페이지에 뜨는 지도는 현재 위치만 보이는데 추후에 구글 MAP으로 변경하여 현재 위치에서 약속 장소까지의 가는 방법을 나타나게 할 예정이다.