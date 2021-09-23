import './Hanjul.css'

function Home() {
  return (
    <div className="hanjul">
      <p className="hanjul-title">ㅎㅏㄴㅈㅜㄹ</p>
      <div className="hanjul-input">
        <input type="text" placeholder="입력" autoFocus/>
        <i class="fas fa-search"></i>
      </div>
        <h2 className="hanjul-description">"당신의 인생을 한 줄로 표현한다면?"</h2>
    </div>
  )
}

export default Home