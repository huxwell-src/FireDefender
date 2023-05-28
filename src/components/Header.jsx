import { } from 'react';
import PropTypes from 'prop-types';

const Header = ({ name }) => {
  return (
    <header className="flex h-10 w-full justify-between p-4">
      <h3 className="text-xl text-[#191919]">
        ¡Hola, <span className="font-semibold text-[#191919]">{name}!</span>
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-list text-[#191919]"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </header>
  );
};

Header.propTypes = {
    name: PropTypes.string.isRequired,
  };
  

export default Header;
