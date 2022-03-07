function login() {
  return (
    <>
      <div className="grid h-screen grid-cols-12 overflow-y-hidden bg-gray-100">
        <div className="fixed inset-0 z-50 flex flex-col items-end justify-start w-full px-4 py-6 pointer-events-none sm:p-6"></div>
        <div className="flex items-center justify-center w-full max-w-sm col-span-12 p-4 mx-auto text-gray-900 md:p-8 md:col-span-6 lg:col-span-4 flex-2 md:pb-48 md:pt-40">
          <div className="w-full">
            <svg
              width="156"
              height="23"
              viewBox="0 0 156 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3389 4.23145H11.8057V22H7.41113V4.23145H0.96582V0.671875H18.3389V4.23145ZM37.9678 11.8193C37.9678 13.9189 37.5967 15.7598 36.8545 17.3418C36.1123 18.9238 35.0479 20.1445 33.6611 21.0039C32.2842 21.8633 30.7021 22.293 28.915 22.293C27.1475 22.293 25.5703 21.8682 24.1836 21.0186C22.7969 20.1689 21.7227 18.958 20.9609 17.3857C20.1992 15.8037 19.8135 13.9873 19.8037 11.9365V10.8818C19.8037 8.78223 20.1797 6.93652 20.9316 5.34473C21.6934 3.74316 22.7627 2.51758 24.1396 1.66797C25.5264 0.808594 27.1084 0.378906 28.8857 0.378906C30.6631 0.378906 32.2402 0.808594 33.6172 1.66797C35.0039 2.51758 36.0732 3.74316 36.8252 5.34473C37.5869 6.93652 37.9678 8.77734 37.9678 10.8672V11.8193ZM33.5146 10.8525C33.5146 8.61621 33.1143 6.91699 32.3135 5.75488C31.5127 4.59277 30.3701 4.01172 28.8857 4.01172C27.4111 4.01172 26.2734 4.58789 25.4727 5.74023C24.6719 6.88281 24.2666 8.5625 24.2568 10.7793V11.8193C24.2568 13.9971 24.6572 15.6865 25.458 16.8877C26.2588 18.0889 27.4111 18.6895 28.915 18.6895C30.3896 18.6895 31.5225 18.1133 32.3135 16.9609C33.1045 15.7988 33.5049 14.1094 33.5146 11.8926V10.8525ZM55.9561 4.23145H49.4229V22H45.0283V4.23145H38.583V0.671875H55.9561V4.23145ZM75.585 11.8193C75.585 13.9189 75.2139 15.7598 74.4717 17.3418C73.7295 18.9238 72.665 20.1445 71.2783 21.0039C69.9014 21.8633 68.3193 22.293 66.5322 22.293C64.7646 22.293 63.1875 21.8682 61.8008 21.0186C60.4141 20.1689 59.3398 18.958 58.5781 17.3857C57.8164 15.8037 57.4307 13.9873 57.4209 11.9365V10.8818C57.4209 8.78223 57.7969 6.93652 58.5488 5.34473C59.3105 3.74316 60.3799 2.51758 61.7568 1.66797C63.1436 0.808594 64.7256 0.378906 66.5029 0.378906C68.2803 0.378906 69.8574 0.808594 71.2344 1.66797C72.6211 2.51758 73.6904 3.74316 74.4424 5.34473C75.2041 6.93652 75.585 8.77734 75.585 10.8672V11.8193ZM71.1318 10.8525C71.1318 8.61621 70.7314 6.91699 69.9307 5.75488C69.1299 4.59277 67.9873 4.01172 66.5029 4.01172C65.0283 4.01172 63.8906 4.58789 63.0898 5.74023C62.2891 6.88281 61.8838 8.5625 61.874 10.7793V11.8193C61.874 13.9971 62.2744 15.6865 63.0752 16.8877C63.876 18.0889 65.0283 18.6895 66.5322 18.6895C68.0068 18.6895 69.1396 18.1133 69.9307 16.9609C70.7217 15.7988 71.1221 14.1094 71.1318 11.8926V10.8525Z"
                fill="#FD3D57"
              />
              <path
                d="M89.8379 16.4043C89.8379 15.5742 89.5449 14.9395 88.959 14.5C88.373 14.0508 87.3184 13.582 85.7949 13.0938C84.2715 12.5957 83.0654 12.1074 82.1768 11.6289C79.7549 10.3203 78.5439 8.55762 78.5439 6.34082C78.5439 5.18848 78.8662 4.16309 79.5107 3.26465C80.165 2.35645 81.0977 1.64844 82.3086 1.14062C83.5293 0.632812 84.8965 0.378906 86.4102 0.378906C87.9336 0.378906 89.291 0.657227 90.4824 1.21387C91.6738 1.76074 92.5967 2.53711 93.251 3.54297C93.915 4.54883 94.2471 5.69141 94.2471 6.9707H89.8525C89.8525 5.99414 89.5449 5.2373 88.9297 4.7002C88.3145 4.15332 87.4502 3.87988 86.3369 3.87988C85.2627 3.87988 84.4277 4.10938 83.832 4.56836C83.2363 5.01758 82.9385 5.61328 82.9385 6.35547C82.9385 7.04883 83.2852 7.62988 83.9785 8.09863C84.6816 8.56738 85.7119 9.00684 87.0693 9.41699C89.5693 10.1689 91.3906 11.1016 92.5332 12.2148C93.6758 13.3281 94.2471 14.7148 94.2471 16.375C94.2471 18.2207 93.5488 19.6709 92.1523 20.7256C90.7559 21.7705 88.876 22.293 86.5127 22.293C84.8721 22.293 83.3779 21.9951 82.0303 21.3994C80.6826 20.7939 79.6523 19.9688 78.9395 18.9238C78.2363 17.8789 77.8848 16.668 77.8848 15.291H82.2939C82.2939 17.6445 83.7002 18.8213 86.5127 18.8213C87.5576 18.8213 88.373 18.6113 88.959 18.1914C89.5449 17.7617 89.8379 17.166 89.8379 16.4043ZM114.594 22H110.199V12.8594H101.63V22H97.2354V0.671875H101.63V9.31445H110.199V0.671875H114.594V22ZM135.966 11.8193C135.966 13.9189 135.595 15.7598 134.853 17.3418C134.11 18.9238 133.046 20.1445 131.659 21.0039C130.282 21.8633 128.7 22.293 126.913 22.293C125.146 22.293 123.568 21.8682 122.182 21.0186C120.795 20.1689 119.721 18.958 118.959 17.3857C118.197 15.8037 117.812 13.9873 117.802 11.9365V10.8818C117.802 8.78223 118.178 6.93652 118.93 5.34473C119.691 3.74316 120.761 2.51758 122.138 1.66797C123.524 0.808594 125.106 0.378906 126.884 0.378906C128.661 0.378906 130.238 0.808594 131.615 1.66797C133.002 2.51758 134.071 3.74316 134.823 5.34473C135.585 6.93652 135.966 8.77734 135.966 10.8672V11.8193ZM131.513 10.8525C131.513 8.61621 131.112 6.91699 130.312 5.75488C129.511 4.59277 128.368 4.01172 126.884 4.01172C125.409 4.01172 124.271 4.58789 123.471 5.74023C122.67 6.88281 122.265 8.5625 122.255 10.7793V11.8193C122.255 13.9971 122.655 15.6865 123.456 16.8877C124.257 18.0889 125.409 18.6895 126.913 18.6895C128.388 18.6895 129.521 18.1133 130.312 16.9609C131.103 15.7988 131.503 14.1094 131.513 11.8926V10.8525ZM143.554 14.4854V22H139.159V0.671875H147.479C149.081 0.671875 150.487 0.964844 151.698 1.55078C152.919 2.13672 153.856 2.97168 154.511 4.05566C155.165 5.12988 155.492 6.35547 155.492 7.73242C155.492 9.82227 154.774 11.4727 153.339 12.6836C151.913 13.8848 149.936 14.4854 147.406 14.4854H143.554ZM143.554 10.9258H147.479C148.642 10.9258 149.525 10.6523 150.131 10.1055C150.746 9.55859 151.054 8.77734 151.054 7.76172C151.054 6.7168 150.746 5.87207 150.131 5.22754C149.516 4.58301 148.666 4.25098 147.582 4.23145H143.554V10.9258Z"
                fill="#2B2D42"
              />
            </svg>

            <form id="loginForm" className="mt-12 text-left">
              <div className="relative w-full text-left mb-4">
                <label className="flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between">
                  <div>
                    Email <span className="text-sm text-red-500"> * </span>
                  </div>{" "}
                </label>
                <div className="flex flex-col mt-1">
                  <div
                    className="relative rounded-md shadow-sm font-base"
                    name="email"
                  >
                    {" "}
                    <input
                      name="email"
                      type="email"
                      className="font-base block w-full sm:text-sm p-2 border-gray-200 rounded-md text-black focus:ring-primary-400 focus:border-primary-400"
                    />{" "}
                  </div>{" "}
                </div>
              </div>
              <div className="relative w-full text-left mb-4">
                <label className="flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between">
                  <div>
                    Password <span className="text-sm text-red-500"> * </span>
                  </div>{" "}
                </label>
                <div className="flex flex-col mt-1">
                  <div
                    className="relative rounded-md shadow-sm font-base"
                    name="password"
                  >
                    {" "}
                    <input
                      name="password"
                      type="password"
                      className="font-base block w-full p-2 sm:text-sm border-gray-200 rounded-md text-black pr-10 focus:ring-primary focus:border-primary"
                    />{" "}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5 w-5 h-5 mr-1 text-gray-500 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="mt-5 mb-8">
                <div className="mb-4">
                  <a
                    href="/forgot-password"
                    className="text-sm text-primary-400 hover:text-gray-700"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button
                className="inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-sm leading-5 rounded-md border-transparent shadow-sm text-white bg-primary bg-primary-600 hover:bg-primary-700 focus:ring-primary-500"
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="pt-24 mt-0 text-sm not-italic font-medium leading-relaxed text-left text-gray-400 md:pt-40">
              <p className="mb-3"> Copyright @ ToTo Shop. 2022</p>
            </div>
          </div>
        </div>
        <div className="relative flex-col items-center justify-center hidden w-full h-full pl-10 bg-no-repeat bg-cover md:col-span-6 lg:col-span-8 md:flex content-box overflow-hidden">
          <svg
            viewBox="0 0 1012 1023"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="text-primary absolute h-full w-full"
          >
            <path
              d="M116.21 472.5C55.1239 693.5 78.5219 837.5 114.349 1023H1030.5V-1L0 -106C147.5 21.5 172.311 269.536 116.21 472.5Z"
              fill="url(#paint0_linear)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="515.25"
                y1="-106"
                x2="515.25"
                y2="1023"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="rgb(255,0,0)"></stop>
                <stop
                  offset="1"
                  stopColor="rgb(255,0,0), var(--tw-text-opacity))"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="422"
            height="290"
            viewBox="0 0 422 290"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-10 top-0 right-0 h-[300px] w-[420px]"
          >
            <path
              opacity="0.3"
              d="M220.111 290.223C341.676 290.223 440.223 191.676 440.223 70.1115C440.223 -51.4527 341.676 -150 220.111 -150C98.5473 -150 0 -51.4527 0 70.1115C0 191.676 98.5473 290.223 220.111 290.223Z"
              fill="white"
              fillOpacity="0.1"
            ></path>
            <path
              opacity="0.3"
              d="M220.111 246.513C317.535 246.513 396.513 167.535 396.513 70.1114C396.513 -27.3124 317.535 -106.29 220.111 -106.29C122.688 -106.29 43.71 -27.3124 43.71 70.1114C43.71 167.535 122.688 246.513 220.111 246.513Z"
              fill="white"
              fillOpacity="0.1"
            ></path>
            <path
              d="M97.0093 35.322C96.7863 35.991 96.5633 36.66 96.5633 37.3291C94.1101 46.4725 92.7721 55.6159 92.3261 64.5364C91.88 74.5718 92.7721 84.6073 94.5562 94.1968C103.477 140.137 137.374 179.387 185.545 192.991C224.794 204.141 265.159 195.444 295.712 173.143C309.538 163.107 321.358 150.172 330.278 135.231C335.854 125.864 340.314 115.606 343.436 104.678C346.335 94.6428 347.896 84.6073 348.119 74.7949C348.788 56.954 345.666 39.3362 339.422 23.2794C325.372 -12.6253 295.043 -41.8397 255.124 -52.9902C211.637 -65.2558 167.481 -53.6593 136.036 -26.452C117.749 -10.6182 103.923 10.3448 97.0093 35.322Z"
              fill="white"
              fillOpacity="0.1"
            ></path>
            <path
              d="M97.0095 35.3223C96.7865 35.9913 96.5635 36.6603 96.5635 37.3294L347.896 74.7952C348.565 56.9543 345.443 39.3365 339.199 23.2797L136.036 -26.4517C117.749 -10.6179 103.923 10.3451 97.0095 35.3223Z"
              fill="white"
              fillOpacity="0.05"
            ></path>
            <path
              d="M92.3261 64.7598C91.88 74.7952 92.7721 84.8307 94.5562 94.4202L295.489 173.366C309.315 163.33 321.135 150.396 330.055 135.454L92.3261 64.7598Z"
              fill="white"
              fillOpacity="0.05"
            ></path>
            <path
              d="M153.431 11.9056C151.424 19.265 152.316 26.8473 155.661 33.0916C159.229 39.7819 165.473 45.1342 173.279 47.3643C188.443 51.6015 204.5 42.6811 208.737 27.5163C209.853 23.9482 210.076 20.157 209.629 16.5888C208.514 5.21529 200.486 -4.82018 188.889 -7.94233C173.502 -12.1795 157.668 -3.25911 153.431 11.9056Z"
              className="fill-primary-700"
              fillOpacity="0.8"
            ></path>
            <path
              d="M156.553 22.3869C155.438 25.9551 155.215 29.7462 155.661 33.3144C159.229 40.0047 165.473 45.357 173.279 47.5871C188.443 51.8243 204.5 42.9039 208.737 27.7391C209.852 24.171 210.075 20.3798 209.629 16.8116C206.061 10.1213 199.817 4.76908 192.011 2.53897C176.624 -1.92124 160.79 6.99919 156.553 22.3869Z"
              className="fill-primary-500"
              fillOpacity="0.5"
            ></path>
            <path
              d="M270.735 95.5343C267.613 100.887 266.944 106.685 268.282 112.26C269.62 118.058 273.411 123.411 278.986 126.533C289.914 132.777 303.74 128.986 309.985 118.281C311.546 115.605 312.438 112.929 312.884 110.03C314.222 101.11 309.985 91.9661 301.733 87.0599C290.806 81.0386 276.979 84.8298 270.735 95.5343Z"
              className="fill-primary-700"
              fillOpacity="0.8"
            ></path>
            <path
              d="M270.958 104.232C269.397 106.908 268.505 109.584 268.059 112.483C269.397 118.281 273.188 123.634 278.764 126.756C289.691 133 303.518 129.209 309.762 118.504C311.323 115.828 312.215 113.152 312.661 110.253C311.323 104.455 307.532 99.1025 301.957 95.9804C291.252 89.5131 277.426 93.3043 270.958 104.232Z"
              className="fill-primary-500"
              fillOpacity="0.5"
            ></path>
            <path
              d="M250.663 130.771C247.54 133.001 245.533 136.123 244.864 139.468C243.972 143.036 244.641 147.051 247.094 150.396C251.555 156.863 260.252 158.647 266.942 154.187C268.503 153.072 269.842 151.734 270.734 150.396C273.856 145.712 274.079 139.468 270.734 134.562C265.827 127.872 257.13 126.311 250.663 130.771Z"
              className="fill-primary-700"
              fillOpacity="0.8"
            ></path>
            <path
              d="M248.433 135.677C246.872 136.792 245.534 138.13 244.642 139.468C243.75 143.036 244.419 147.051 246.872 150.396C251.332 156.863 260.03 158.647 266.72 154.187C268.281 153.072 269.619 151.734 270.511 150.396C271.403 146.828 270.734 142.813 268.281 139.468C263.821 132.778 254.901 131.217 248.433 135.677Z"
              className="fill-primary-500"
              fillOpacity="0.5"
            ></path>
            <path
              d="M215.651 14.8049C214.759 18.15 215.205 21.4952 216.543 24.1713C218.104 27.0704 220.78 29.5236 224.348 30.4156C231.038 32.4227 238.175 28.4085 240.182 21.4952C240.628 19.9341 240.851 18.15 240.628 16.5889C240.182 11.4597 236.614 6.99951 231.484 5.66145C224.571 4.10037 217.435 8.11456 215.651 14.8049Z"
              className="fill-primary-700"
              fillOpacity="0.8"
            ></path>
            <path
              d="M216.989 19.4876C216.543 21.0487 216.32 22.8328 216.543 24.3939C218.104 27.293 220.78 29.7461 224.348 30.6382C231.039 32.6453 238.175 28.6311 240.182 21.7177C240.628 20.1567 240.851 18.3726 240.628 16.8115C239.067 13.9124 236.391 11.4593 232.823 10.5672C225.91 8.78313 218.773 12.5743 216.989 19.4876Z"
              className="fill-primary-500"
            ></path>
            <path
              d="M122.209 124.526C121.763 125.864 121.986 127.202 122.655 128.54C123.324 129.878 124.439 130.77 126.001 131.216C128.9 132.108 131.799 130.324 132.468 127.648C132.691 126.979 132.691 126.31 132.691 125.641C132.468 123.634 130.907 121.627 128.9 121.181C126.001 120.066 123.101 121.85 122.209 124.526Z"
              className="fill-primary-700"
              fillOpacity="0.8"
            ></path>
            <path
              d="M122.878 126.533C122.655 127.202 122.655 127.871 122.655 128.54C123.324 129.878 124.439 130.77 126 131.216C128.899 132.108 131.798 130.324 132.468 127.648C132.691 126.979 132.691 126.31 132.691 125.641C132.021 124.303 130.906 123.411 129.345 122.965C126.446 122.073 123.547 123.634 122.878 126.533Z"
              className="fill-primary-500"
              fillOpacity="0.5"
            ></path>
            <path
              d="M169.487 123.188C168.149 123.411 166.811 124.08 166.142 125.195C165.25 126.31 164.804 127.648 165.027 129.209C165.473 132.108 168.149 134.116 171.048 133.67C171.717 133.67 172.386 133.224 172.832 133C174.617 131.885 175.732 129.878 175.286 127.648C175.063 124.749 172.386 122.742 169.487 123.188Z"
              className="fill-primary-700"
              fillOpacity="0.8"
            ></path>
            <path
              d="M167.926 124.526C167.257 124.526 166.588 124.972 166.142 125.195C165.25 126.31 164.804 127.648 165.027 129.209C165.473 132.108 168.149 134.115 171.048 133.669C171.717 133.669 172.386 133.223 172.832 133C173.724 131.885 174.17 130.547 173.947 128.986C173.501 126.087 170.825 124.08 167.926 124.526Z"
              className="fill-primary-500"
              fillOpacity="0.5"
            ></path>

            <defs>
              <clipPath id="clip0">
                <rect
                  width="440"
                  height="440"
                  fill="white"
                  transform="translate(0 -150)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <svg
            width="1122"
            height="1017"
            viewBox="0 0 1122 1017"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-full w-full right-[7.5%]"
          >
            <path
              d="M226.002 466.5C164.935 687.5 188.326 831.5 224.141 1017H1140V-7L0 -109.5C142.5 -7.5 282.085 263.536 226.002 466.5Z"
              fill="url(#paint0_linear)"
              fillOpacity="0.1"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="649.5"
                y1="-7"
                x2="649.5"
                y2="1017"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="rgb(255,0,0), var(--tw-text-opacity))"></stop>
                <stop
                  offset="1"
                  stopColor="rgb(255,0,0), var(--tw-text-opacity))"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="md:pl-10 xl:pl-0 relative z-50 w-7/12 xl:w-5/12 xl:w-5/12">
            <h1 className="hidden mb-3 text-3xl leading-normal text-left text-white xl:text-5xl xl:leading-tight md:none lg:block">
              Simple Invoicing for Individuals Small Businesses
            </h1>
            <p className="hidden text-sm not-italic font-normal leading-normal text-left text-gray-100 xl:text-base xl:leading-6 md:none lg:block">
              Crater helps you track expenses, record payments &amp; generate
              beautiful invoices &amp; estimates.
            </p>
          </div>
          <svg
            viewBox="0 0 1170 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-50 w-full bg-no-repeat content-bottom h-[15vw] lg:h-[22vw] right-[32%] bottom-0"
          >
            <path
              d="M690 4.08004C518 -9.91998 231 4.08004 -6 176.361L231 197.08L1170 219.08C1113.33 175.747 909.275 21.928 690 4.08004Z"
              fill="white"
              fillOpacity="0.1"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default login;
