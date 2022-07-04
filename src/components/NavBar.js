import { IoIosArroArrowBack } from 'react-icons/io';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navContainer">
      {location.pathname !== '/' && (
        <div className="backButton">
          <IoIosArroArrowBack
            onclick={() => {
              navigate(-1);
            }}
          />
        </div>
      )}

      <h1 className="title">COVID-19 WORLDWIDE INFORMATION</h1>

      <div className="icons">
        <BsMic />
        <AiOutlineSetting />
      </div>
    </nav>
  );
};

export default Nav;
