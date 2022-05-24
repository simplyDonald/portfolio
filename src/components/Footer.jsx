const Footer = () => {
  return (
    <div className=" text-xs grid justify-items-center font-body">
      with
      <span className="hover:text-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </span>
      from Toronto
      <img src="toronto.png" alt="toronto icon" className="w-8 invert pb-2" />
      <small>
        Designed and built by:{" "}
        <a href="https://donaldabuah.com/" className="italic">
          Donald Abuah
        </a>
      </small>
      <small>
        Photo by:{" "}
        <a
          href="https://unsplash.com/@theherregods_loppa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          rel="noreferrer"
          target={"_blank"}
          className="italic"
        >
          Natalie Herregods
        </a>{" "}
        on Unsplash
      </small>
      {/* <small>
        Inspiration:{" "}
        <cite>
          <a
            href="https://brittanychiang.com/"
            rel="noreferrer"
            target={"_blank"}
          >
            Brittany Chiang
          </a>
        </cite>
      </small> */}
    </div>
  );
}
 
export default Footer;