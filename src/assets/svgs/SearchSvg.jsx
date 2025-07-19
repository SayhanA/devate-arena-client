const SearchSvg = ({
  width = 16,
  height = 16,
  strokeWidth = 1.2,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M10.8359 10.6152L14.9999 14.6949"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.14099 11.7391C11.8699 10.6029 13.142 7.51474 11.9822 4.84141C10.8224 2.16808 7.67004 0.921938 4.94113 2.05808C2.21222 3.19421 0.940171 6.2824 2.09993 8.95573C3.25969 11.6291 6.41208 12.8752 9.14099 11.7391Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchSvg;
