import PropTypes from "prop-types";
import React from "react";

export const IconHamburgerSearch = ({ className, width, height, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 14"
      fill="none"
      width={width}
      height={height}
      className={className}
      style={style}
      stroke="currentColor"
    >
      <g clipPath="url(#clip0_829_15255)">
        <path
          d="M14.38 5.41333C14.38 4.99333 14.71 4.66333 15.13 4.66333H19.25C19.67 4.66333 20 4.99333 20 5.41333C20 5.83333 19.67 6.16333 19.25 6.16333H15.13C14.71 6.16333 14.38 5.83333 14.38 5.41333ZM20 12.9133C20 13.3333 19.67 13.6633 19.25 13.6633H10.25C9.83 13.6633 9.5 13.3333 9.5 12.9133C9.5 12.4933 9.83 12.1633 10.25 12.1633H19.25C19.67 12.1633 20 12.4933 20 12.9133Z"
          fill="currentColor"
        />
        <path
          d="M8.10747 1C10.7975 1 12.9775 3.18 12.9775 5.88C12.9775 8.58 10.7975 10.75 8.09747 10.75C7.01747 10.75 6.02747 10.4 5.21747 9.81L2.24747 12.78C1.95747 13.07 1.47747 13.07 1.18747 12.78C0.897471 12.49 0.897471 12.01 1.18747 11.72L4.15747 8.75C3.56747 7.94 3.21747 6.95 3.21747 5.87C3.23747 3.18 5.41747 1 8.10747 1ZM11.0375 7.56C11.6375 6.52 11.6375 5.23 11.0375 4.18C10.4375 3.13 9.31747 2.49 8.11747 2.49C6.91747 2.49 5.79747 3.13 5.19747 4.18C4.59747 5.23 4.59747 6.51 5.19747 7.56C5.79747 8.61 6.91747 9.25 8.11747 9.25C9.31747 9.25 10.4375 8.61 11.0375 7.56Z"
          fill="currentColor"
        />
        <path
          d="M13.6299 9.22339C13.6299 8.80339 13.9599 8.47339 14.3799 8.47339H19.2599C19.6799 8.47339 20.0099 8.80339 20.0099 9.22339C20.0099 9.64339 19.6799 9.97339 19.2599 9.97339H14.3799C13.9599 9.97339 13.6299 9.64339 13.6299 9.22339Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_829_15255">
          <rect
            width="19.03"
            height="12.99"
            fill="white"
            transform="translate(0.969971 0.67334)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

IconHamburgerSearch.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
