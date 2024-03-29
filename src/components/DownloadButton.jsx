import React from "react";

const DownloadButton = () => {
  return (
    <a
      href="https://chrome.google.com/webstore/detail/unfunnelizer/bdjkbgejocjhchdjmckgegngdaghnfbl"
      target="_blank"
      rel="noreferrer"
      className=" mt-10 drop-shadow-md group inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-black text-white  focus:ring-4 focus:ring-gray-100 dark:bg-white dark:text-black transition-all duration-500 hover:shadow-2xl hover:shadow-blue-300/75 hover:scale-110  hover:text-white hover:bg-gradient-to-r from-blue-500 to-cyan-500"
    >
      <svg
        className="transition-all  duration-500 group-hover:rotate-360"
        fill="none"
        height="45"
        viewBox="0 0 63 63"
        width="45"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="34.9087"
          x2="7.63224"
          y1="61.029"
          y2="13.7847"
        >
          <stop offset="0" stop-color="#1e8e3e" />
          <stop offset="1" stop-color="#34a853" />
        </linearGradient>
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="26.9043"
          x2="54.1808"
          y1="63.0788"
          y2="15.8345"
        >
          <stop offset="0" stop-color="#fcc934" />
          <stop offset="1" stop-color="#fbbc04" />
        </linearGradient>
        <linearGradient
          id="c"
          gradientUnits="userSpaceOnUse"
          x1="4.22145"
          x2="58.7745"
          y1="19.6884"
          y2="19.6884"
        >
          <stop offset="0" stop-color="#d93025" />
          <stop offset="1" stop-color="#ea4335" />
        </linearGradient>
        <path
          d="m31.499 47.2466c8.6985 0 15.75-7.0515 15.75-15.75s-7.0515-15.75-15.75-15.75-15.75 7.0515-15.75 15.75 7.0515 15.75 15.75 15.75z"
          fill="#fff"
        />
        <path
          d="m17.8591 39.3751-13.63772-23.6212c-2.76527 4.788-4.22118922 10.2197-4.22137998 15.7489s1.45535998 10.961 4.22028998 15.7492c2.76494 4.7882 6.74181 8.7641 11.53071 11.5279 4.7889 2.7637 10.221 4.2179 15.7502 4.2164l13.6377-23.6212v-.0041c-1.3813 2.3954-3.369 4.3848-5.7632 5.7681s-5.1104 2.1118-7.8755 2.1122-5.4816-.7272-7.8762-2.1099c-2.3945-1.3826-4.3829-3.3714-5.7649-5.7663z"
          fill="url(#a)"
        />
        <path
          d="m45.1379 39.3741-13.6376 23.6212c5.5292.0008 10.9611-1.4542 15.7496-4.2187 4.7885-2.7644 8.7648-6.7408 11.5291-11.5294 2.7642-4.7887 4.219-10.2207 4.2181-15.7499-.001-5.5292-1.4577-10.9606-4.2237-15.7483h-27.2754l-.0034.0021c2.7651-.0014 5.4818.7254 7.8769 2.1071 2.3951 1.3818 4.3841 3.3698 5.767 5.7643 1.3829 2.3944 2.1109 5.1108 2.1109 7.8758-.0001 2.7651-.7283 5.4814-2.1113 7.8758z"
          fill="url(#b)"
        />
        <path
          d="m31.499 43.9688c6.8863 0 12.4688-5.5825 12.4688-12.4688s-5.5825-12.4688-12.4688-12.4688-12.4687 5.5825-12.4687 12.4688 5.5824 12.4688 12.4687 12.4688z"
          fill="#1a73e8"
        />
        <path
          d="m31.4991 15.75h27.2754c-2.764-4.7888-6.74-8.76553-11.5283-11.53029-4.7883-2.76475-10.2202-4.22010235-15.7494-4.21970992s-10.9608 1.45650992-15.7487 4.22194992c-4.788 2.76543-8.76341 6.74275-11.52666 11.53185l13.63766 23.6212.0035.0019c-1.3837-2.394-2.1127-5.11-2.1136-7.8751s.7264-5.4817 2.1086-7.8765c1.3821-2.3948 3.3706-4.3835 5.7652-5.7659 2.3947-1.3825 5.1112-2.11 7.8763-2.1094z"
          fill="url(#c)"
        />
      </svg>

      <svg
        className="transition-all duration-500 group-hover:rotate-360 ml-2 mr-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="50px"
        height="50px"
      >
        <path
          fill="#1de9b6"
          d="M4,23.481C4,15.673,10.557,4,24.014,4C37.452,4,44,13.923,44,20.905c0,5.604-4.429,9.732-9.992,9.732	c-4.245,0-6.759-1.408-6.759-2.53c0-0.726,1.755-1.837,1.755-3.982c0-2.565-1.986-5.137-5.045-5.137	c-2.934,0-4.974,2.442-4.974,4.905c0,5.952,5.63,11.644,13.931,11.644c4.959,0,6.759-1.828,7.403-1.828	c0.196,0,0.647,0.08,0.647,0.603c0,0.5-5.486,9.686-16.94,9.686C12.632,44,4,35.023,4,23.481z"
        />
        <radialGradient
          id="2pm2zgLwrfHW4PMfqfOjYa"
          cx="17.993"
          cy="32.825"
          r="21.348"
          gradientTransform="matrix(1 0 0 1.1083 0 -3.529)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".652" stop-color="#0083de" />
          <stop offset=".822" stop-color="#006aac" />
          <stop offset=".944" stop-color="#005a8c" />
        </radialGradient>
        <path
          fill="url(#2pm2zgLwrfHW4PMfqfOjYa)"
          d="M4,23.481c0-7.808,7.615-12.04,12.73-12.04c13.439,0,17.277,2.483,17.277,9.465	c0,5.604-5.003,5.366-5.003,3.221c0-2.565-1.986-5.137-5.045-5.137c-2.934,0-4.974,2.442-4.974,4.905	c0,5.952,5.63,11.644,13.931,11.644c4.959,0,6.759-1.828,7.403-1.828c0.196,0,0.647,0.08,0.647,0.603c0,0.5-5.486,9.686-16.94,9.686	C12.632,44,4,35.023,4,23.481z"
        />
        <radialGradient
          id="2pm2zgLwrfHW4PMfqfOjYb"
          cx="28.082"
          cy="29.295"
          r="16.478"
          gradientTransform="matrix(1 0 0 1.0028 0 -.067)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".69" stop-color="#05509b" />
          <stop offset=".717" stop-color="#054e98" />
          <stop offset="1" stop-color="#033e78" />
        </radialGradient>
        <path
          fill="url(#2pm2zgLwrfHW4PMfqfOjYb)"
          d="M18.985,23.894c0-2.298,1.775-4.575,4.395-4.871c-4.104,0.349-8.798,4.375-8.798,11.831	c0,7.963,6.864,13.465,13.943,12.628c8.386-1.927,12.441-8.74,12.441-9.168c0-0.523-0.451-0.603-0.647-0.603	c-0.643,0-2.444,1.828-7.403,1.828C24.615,35.539,18.985,29.847,18.985,23.894z"
        />
        <radialGradient
          id="2pm2zgLwrfHW4PMfqfOjYc"
          cx="47.648"
          cy="16.079"
          r="61.532"
          gradientTransform="matrix(-1 0 0 -1.5084 95.296 40.31)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#5eeb69" />
          <stop offset=".214" stop-color="#4bc958" />
          <stop offset=".225" stop-color="#4ac862" />
          <stop offset=".272" stop-color="#47c68b" />
          <stop offset=".323" stop-color="#44c4ae" />
          <stop offset=".376" stop-color="#41c2cb" />
          <stop offset=".433" stop-color="#3fc1e1" />
          <stop offset=".495" stop-color="#3ec0f1" />
          <stop offset=".565" stop-color="#3dbffa" />
          <stop offset=".664" stop-color="#3dbffd" />
        </radialGradient>
        <path
          fill="url(#2pm2zgLwrfHW4PMfqfOjYc)"
          d="M4,23.481C4,15.673,10.557,4,24.014,4C37.452,4,44,13.923,44,20.905	c0,5.604-4.429,9.732-9.992,9.732c-4.245,0-6.759-1.408-6.759-2.53c0-0.726,1.755-1.837,1.755-3.982	c0-2.565-2.076-10.678-12.628-10.678C13.442,13.448,5.256,14.745,4,23.481z"
        />
      </svg>
      <p className="font-thin sm:text-md lg:text-2xl max-w-4/5">
        get it on chrome web store
      </p>
    </a>
  );
};

export default DownloadButton;
