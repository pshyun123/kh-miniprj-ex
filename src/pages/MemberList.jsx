// 회원리스트 보기
import { useState, useEffect, useContext } from "react";
import AxiosAPI from "../api/AxiosAPI";
import { useNavigate } from "react-router-dom/dist";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 40px;
`;

const MemberInfoWrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
  min-width: 240px;
  background-color: antiquewhite;
`;

const MemberId = styled.p`
  font-weight: bold;
`;

const MemberName = styled.p`
  font-style: italic;
`;

const MemberEmail = styled.p`
  color: #555;
`;

const MemberJoinDate = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

const MemberList = () => {
    const navigate = useNavigate();
    const [memberList, setMemberList] = useState("");
    const isLogin = window.localStorage.getItem("isLogin"); //로그인인지 아닌지
    if(isLogin !=="TRUE") navigate("/");

    useEffect(()=> {
        const memberList = async() => {
            try{
            const resp = await AxiosAPI.memberList("ALL"); // all이란 id는 없지만 전체조회라고 약속만 하면됨. where 조건절 없이 만들면 됨.  조회하기 귀찮으니까
            if(resp.status === 200) setMemberList(resp.data); // 데이터 읽음
            console.log(resp.data); // 서버에 다녀옴
            } catch (e) {
                console.log(e);
            }
        };
        memberList();
    },[]); // 화면이 최초로 진입시에만 불러줌, 의존성 배열


    // 특정회원 눌렀을때 상세페이지로 진입
    const onClickMember = id => {
        console.log("onClick member ID : " + id);
    };
    return(// 멤버리스트에서 멤버 꺼내서 ()구현부, key 값 필수
        <>
            <Container> 
                {memberList && memberList.map(member => (
                    <MemberInfoWrapper key={member.id} onClick={() => onClickMember(member.id)}>
                        <MemberId>ID: {member.id}</MemberId>
                        <MemberName>이름 : {member.name}</MemberName>
                        <MemberEmail>이메일 : {member.email}</MemberEmail>
                        <MemberJoinDate>가입일 : {member.join}</MemberJoinDate>
                    </MemberInfoWrapper>
                ))

                }
            </Container>
        </>
    );
};

export default MemberList;