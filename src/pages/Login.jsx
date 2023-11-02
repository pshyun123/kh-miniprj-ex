// 로그인 페이지
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgLogo from "../images/tier_logo.png";
import imgBottom from "../images/nedbank_s.png";
import AxiosAPI from '../api/AxiosAPI';
import {Input, Button, Container, Items} from "../component/LoginComponent";

const Login = () => {
    // 1.화면 이동을 위해 사용하는 hook(link / useNavigate->이벤트 있을 때)
    const navigate = useNavigate();

    // 2.키보드 입력(로그인: 아이디와 패스워드로 구성)
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    // 3.오류 메시지
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");

    // 4.유효성 검사
    const [isId, setIsId] = useState("");
    const [isPw, setIsPw] = useState("");

    // 5.팝업 처리
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
    setModalOpen(false);
    };

    // 6.5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
    const onChangeId = (e) => {
        const regexId = /^\w{5,20}$/; // 아이디 검사 5~20자 미만
        setInputId(e.target.value); // input 창의 내용 쭉 받아서
        // setInputId(inputId)로 하면 안됨 
        if (!regexId.test(e.target.value)) { // 정규식 체크 올바른 형식인지 
        setIdMessage("5자리 이상 20자리 미만으로 입력해 주세요.");
        setIsId(false);
        } else {
        setIdMessage("올바른 형식 입니다."); // 정상
        setIsId(true);
        }
    };

    const onChangePw = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/; // 대소문자 숫자 8자,25자
        const passwordCurrent = e.target.value;
        setInputPw(passwordCurrent);
        if (!passwordRegex.test(passwordCurrent)) {
          setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
          setIsPw(false);
        } else {
          setPwMessage("안전한 비밀번호에요 : )");
          setIsPw(true);
        }
      };

      const onClickLogin = async () => { // 비동기 함수 구간
        //로그인을 위한 axios 호출,서버에다 로그인 시킬지 말지 결정
        const res = await AxiosAPI.memberLogin(inputId, inputPw); // 대기 걸림 서버 다녀옴
        console.log(res.data);
        if (res.data === true) {
            // 브라우저에서 임시로 값을 저장하는 기술
            //브라우저 내부저장소(5MB)에 키와 밸류값 저장, 임시저장 - 보안용으로는 X, 종합프로젝트 땐 자바 웹토큰 사용할 예정 
          window.localStorage.setItem("userId", inputId); 
          window.localStorage.setItem("userPw", inputPw);
          window.localStorage.setItem("isLogin", "TRUE"); // memberlist의 Window.localStorage.getItem("isLogin");과 연결
          navigate("/home"); // 홈으로 이동, 링크는 중간에 코드를 못넣어서 사용하지말고 이걸 사용
        } else {
          setModalOpen(true); // 실패하면 팝업, 
        }
      };
      return(
        // 컴포넌트 만들기
        <Container>
      <Items className="item1">
        <img src={imgLogo} alt="Logo" />
      </Items>

      <Items className="item2">
        <Input placeholder="이름" value={inputId} onChange={onChangeId} />
      </Items>
      <Items className="hint">
        {inputId.length > 0 && (
          <span className={`${isId ? "success" : "error"}`}>{idMessage}</span>
        )}
      </Items>

      <Items className="item2">
        <Input placeholder="패스워드" value={inputPw} onChange={onChangePw} />
      </Items>
      <Items className="hint">
        {inputPw.length > 0 && (
          <span className={`${isPw ? "success" : "error"}`}>{pwMessage}</span>
        )}
      </Items>
      <Items className="item2">
        {isId && isPw ? (
          <Button enabled onClick={onClickLogin}>
            SIGN IN
          </Button>
        ) : (
          <Button disabled>SIGN IN</Button>
        )}
      </Items>
      {/* <Modal open={modalOpen} close={closeModal} header="오류">
        아이디 및 패스워드를 재확인해 주세요.
      </Modal> */}
      <Items className="signup">
        <Link to="/Signup" className="link_style">
          <span>Sign Up</span>
        </Link>
      </Items>
      <Items className="bdlogo">
        <img src={imgBottom} alt="NedBank" />
      </Items>
    </Container>
      );
};
export default Login;