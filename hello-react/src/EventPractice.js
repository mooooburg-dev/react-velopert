import React, { useState } from "react"

const EventPractice = () => {
  // const [username, setUsername] = useState("")
  // const [message, setMessage] = useState("")

  // const onChangeUsername = (e) => setUsername(e.target.value)
  // const onChangeMessage = (e) => setMessage(e.target.value)

  const [form, setForm] = useState({
    username: "",
    message: "",
  })

  const { username, message } = form

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    }

    setForm(nextForm)
  }

  const onClick = () => {
    alert(username + ":" + message)
    // setUsername("")
    // setMessage("")

    setForm({
      username: "",
      message: "",
    })
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick()
    }
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChange}></input>
      <input type="text" name="message" placeholder="아무거나 입력해 보세요" value={message} onChange={onChange} onKeyPress={onKeyPress}></input>
      <button onClick={onClick}>확인</button>
    </div>
  )
}

/*
class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = (e) => {
    alert(this.state.username + ": " + this.state.message)
    this.setState({
      username: "",
      message: "",
    })
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick()
    }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="username" placeholder="사용자명" value={this.state.username} onChange={this.handleChange}></input>
        <input type="text" name="message" placeholder="아무거나 입력해 보세요" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    )
  }
}
*/

export default EventPractice
