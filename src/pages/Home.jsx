// Home 화면
import { useNavigate } from "react-router-dom/dist"; // 화면이동하기 위해
import {ButtonContainer, TransBtn} from "../component/ButtonContainer";
import imgButton from "../images/nedbank_s.png";

const Home = () => {
    const navigate = useNavigate();
    const onClickBtn = (num) => {
        switch(num) {
            case 1:
                navigate("/memberlist");
                 break;
            case 2:

                break;
            case 3:

                break;
            case 4:
                navigate("/setting"); 
                break;
            default:
        }
    };

    return (
        <>
            <div>
                <ButtonContainer>
                    <TransBtn onClick={() => onClickBtn(1)}>회원리스트</TransBtn>
                    <TransBtn onClick={() => onClickBtn(2)}>뉴스보기</TransBtn>
                    <TransBtn onClick={() => onClickBtn(3)}>사진 업로드</TransBtn>
                    <TransBtn onClick={() => onClickBtn(4)}>테마 변경</TransBtn>
                </ButtonContainer>
                <div className="bdlogo">
                    <img src={imgButton} alt="NedBank" />
                </div>
            </div>
        </>
    );
};
export default Home;