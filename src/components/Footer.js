import React from "react";

export const Footer = () => {
  return (
    <div className="mx-auto w-full ">
      <p className="text-md md:text-lg mb-2 font-serif text-[#1c1c1c]">
        Welcome to Hamsi, your new go-to destination for chic and stylish
        women’s fashion!
      </p>
      <p className="text-md md:text-lg mb-2 font-serif text-[#1c1c1c]">
        We're counting down the days to the grand launch of Hamsi...!
      </p>
      <p className="text-md md:text-lg mb-2 font-serif text-[#1c1c1c]">
        Get ready to elevate your wardrobe with our stunning collection designed
        for every woman who loves to express her unique style.
      </p>
      <h3 className="text-xl md:text-2xl font-bold font-serif text-[#d42d2d] font-bold my-4">
        ✨ What to Expect:
      </h3>
      <ul class="list-disc px-12 text-md md:text-lg mb-2 font-serif">
        <li>Chic, versatile pieces</li>
        <li>Exclusive launch day offers</li>
        <li>A celebration of fashion and femininity</li>
      </ul>
      <p className="text-md md:text-lg mb-2 font-serif text-[#1c1c1c]  mx-auto">
        Follow us for updates and sneak peeks leading up to the big day. We
        can’t wait to celebrate with you!
      </p>
      <div className="w-full flex mt-10 space-x-6 justify-center items-center ">
        <a href="https://facebook.com/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-7 w-7 md:h-10 md:w-10 hover:cursor-pointer"
            fill="#d42d2d"
          >
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
          </svg>
        </a>
        <a href="https://twitter.com/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-7 w-7 md:h-10 md:w-10 hover:cursor-pointer"
            fill="#d42d2d"
          >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
        </a>
      </div>
      <p className="text-xl mt-12 font-serif text-[#1c1c1c] text-center mx-auto">
        <strong>Hamsi – Where Your Style Begins!</strong>
      </p>
    </div>
  );
};
