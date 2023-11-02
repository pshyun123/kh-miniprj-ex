import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";//변경불가 용도-> 대문자로, 포트번호 넣는 곳에 KH_DOMAIN으로 넣으면 됨


const AxiosAPI = {
// 로그인 , json방식 객체 만들어서 쏙 넣어줌
// 객체의 속성이 함수
    memberLogin: async (id,pw) => {
        const login = {
            id: id,//객체 만듦
            pwd: pw
        };
        return await axios.post(KH_DOMAIN + "/users/login", login);// 백앤드 컨트롤러 주소 /users/login, post는 내부로 숨겨서 넘김(JSON으로 바꿔서 백으로 넘김)



    },
    // 회원정보 조회 get방식, url창에 보임
    memberList: async(id) => {
        return await axios.get(KH_DOMAIN + `/users/member/?id=${id}`)
    }
};

export default AxiosAPI;