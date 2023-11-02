// 설정페이지
import { ButtonContainer, TransBtn } from "../component/ButtonContainer"
import { useContext } from "react"; //hook 이름
import { UserContext } from "../context/UserStore"; // 만들어 준 아이

const Setting = () => {
    const context = useContext(UserContext);
    const {setColor} = context;
   
    return (
        <>
            <ButtonContainer>
                <TransBtn>테마설정</TransBtn>
            </ButtonContainer>
            <ButtonContainer>
                <TransBtn color = "orange" onClick={()=>setColor("orange")}>오렌지</TransBtn>
                <TransBtn color = "green" onClick={()=>setColor("green")}>그린</TransBtn>
                <TransBtn color = "darkgray" onClick={()=>setColor("darkgray")}>다크그레이</TransBtn>
                <TransBtn color = "royalblue" onClick={()=>setColor("royalblue")}>로얄블루</TransBtn>
            </ButtonContainer>
        </>
    );
};

export default Setting;