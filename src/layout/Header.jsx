import "../assets/style/Header.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logoDark from "../assets/images/logo_light.png";  
import logoLight from "../assets/images/logo_dark.png";  
//import { Link } from "react-router-dom";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
        {/* 로고 */}
        <div className="header_logo">
            <img src={isDarkMode ? logoDark : logoLight}  // ✅ 현재 테마 상태에 따라 로고 변경 
            className="header_logo-image"
            alt="logo"/>   
        </div>

      {/* 네비게이션 메뉴 */}
      <nav className="header_nav">
        <div className="header_nav-item">공지사항</div>
        <div className="header_nav-item">체크리스트</div>
        <div className="header_nav-item">순위</div>
        <div className="header_nav-item">효율분석</div>
        <div className="header_nav-item">커뮤니티</div>
      </nav>

      {/* 유틸리티 메뉴 */}
      <div className="header_utils">
        <div className="header_utils-item">문의사항</div>
        {/* 다크모드 버튼 */}
        <div className="header_utils-item" onClick={toggleTheme} style={{ cursor: "pointer" }}>
          {isDarkMode ? "라이트 모드" : "다크 모드"}
        </div>
        <div className="header_utils-item">로그인</div>
      </div>
    </header>
  );
};

export default Header;
