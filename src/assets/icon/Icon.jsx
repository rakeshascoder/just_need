export const VerticalVilotSvg = ({ pathName, currentpath }) => {
  return (
    <svg
      width="5"
      height="24"
      viewBox="0 0 5 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 24V0.0600569C1.37545 -0.220183 2.82973 0.527461 3.87493 1.32548C4.65571 1.92161 5 2.8951 5 3.87744V19.6481C5 20.1674 4.91611 20.6928 4.64389 21.135C3.456 23.0648 1.12283 23.8475 0 24Z"
        fill={pathName === currentpath ? "#6c4def" : "white"}
      />
    </svg>
  );
};
export const DasboardSvg = ({ pathName }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13H10C10.2652 13 10.5196 12.8946 10.7071 12.7071C10.8946 12.5196 11 12.2652 11 12V4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V12ZM3 20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H10C10.2652 21 10.5196 20.8946 10.7071 20.7071C10.8946 20.5196 11 20.2652 11 20V16C11 15.7348 10.8946 15.4804 10.7071 15.2929C10.5196 15.1054 10.2652 15 10 15H4C3.73478 15 3.48043 15.1054 3.29289 15.2929C3.10536 15.4804 3 15.7348 3 16V20ZM13 20C13 20.2652 13.1054 20.5196 13.2929 20.7071C13.4804 20.8946 13.7348 21 14 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11H14C13.7348 11 13.4804 11.1054 13.2929 11.2929C13.1054 11.4804 13 11.7348 13 12V20ZM14 3C13.7348 3 13.4804 3.10536 13.2929 3.29289C13.1054 3.48043 13 3.73478 13 4V8C13 8.26522 13.1054 8.51957 13.2929 8.70711C13.4804 8.89464 13.7348 9 14 9H20C20.2652 9 20.5196 8.89464 20.7071 8.70711C20.8946 8.51957 21 8.26522 21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H14Z"
        fill={pathName == "/dashboard" ? "#6c4def" : "black"}
        fillOpacity={pathName == "/dashboard" ? "1" : "0.6"}
      />
    </svg>
  );
};
export const CustomerSvg = ({ pathName }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3923 17.8597C21.0038 17.4772 16.2961 15.6562 15.4418 15.3127C14.5921 14.9752 14.2531 14.04 14.2531 14.04C14.2531 14.04 13.8706 14.2515 13.8706 13.6575C13.8706 13.0627 14.2531 14.04 14.6356 11.7465C14.6356 11.7465 15.6968 11.4487 15.4861 8.9865H15.2311C15.2311 8.9865 15.8686 6.35399 15.2311 5.463C14.5913 4.572 14.3408 3.978 12.9361 3.552C11.5336 3.12675 12.0436 3.2115 11.0251 3.255C10.0051 3.29775 9.1561 3.84975 9.1561 4.146C9.1561 4.146 8.5186 4.18875 8.2651 4.44375C8.0101 4.69875 7.5856 5.88674 7.5856 6.18374C7.5856 6.48074 7.79785 8.47874 8.0101 8.90175L7.75735 8.98424C7.5451 11.4472 8.60635 11.7457 8.60635 11.7457C8.98885 14.0392 9.37135 13.062 9.37135 13.6567C9.37135 14.2507 8.98885 14.0392 8.98885 14.0392C8.98885 14.0392 8.6491 14.9737 7.8001 15.312C6.9511 15.6517 2.2381 17.4772 1.85485 17.859C1.47235 18.249 1.5151 20.031 1.5151 20.031H10.5421L11.2006 17.436L10.6156 16.851L11.6228 15.8422L12.6301 16.8502L12.0451 17.4352L12.7036 20.0302H21.7306C21.7306 20.0302 21.7778 18.2467 21.3909 17.8575L21.3923 17.8597Z"
        fill={pathName == "/dashboard/users" ? "#6c4def" : "black"}
        fillOpacity={pathName == "/dashboard/users" ? "1" : "0.6"}
      />
    </svg>
  );
};
export const SubsciptionSvg = ({ pathName }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 19.214L11.942 15.656L12.65 14.948L15.5 17.798L21.189 12.11L21.896 12.817L15.5 19.214ZM20 9.99999H19V5.61599C19 5.46199 18.936 5.32066 18.808 5.19199C18.68 5.06332 18.5387 4.99932 18.384 4.99999H16V7.22999H8V4.99999H5.616C5.462 4.99999 5.32067 5.06399 5.192 5.19199C5.06333 5.31999 4.99933 5.46132 5 5.61599V18.385C5 18.5383 5.064 18.6793 5.192 18.808C5.32 18.9367 5.461 19.0007 5.615 19H11V20H5.616C5.168 20 4.78667 19.8427 4.472 19.528C4.15733 19.2133 4 18.8323 4 18.385V5.61499C4 5.16832 4.15733 4.78732 4.472 4.47199C4.78667 4.15732 5.168 3.99999 5.616 3.99999H10.252C10.3453 3.60932 10.553 3.28099 10.875 3.01499C11.197 2.74832 11.572 2.61499 12 2.61499C12.436 2.61499 12.814 2.74832 13.134 3.01499C13.454 3.28032 13.6607 3.60866 13.754 3.99999H18.384C18.832 3.99999 19.2133 4.15732 19.528 4.47199C19.8427 4.78666 20 5.16799 20 5.61599V9.99999ZM12 5.22999C12.232 5.22999 12.4247 5.15366 12.578 5.00099C12.7313 4.84766 12.808 4.65499 12.808 4.42299C12.808 4.19099 12.7313 3.99832 12.578 3.84499C12.4247 3.69166 12.232 3.61499 12 3.61499C11.768 3.61499 11.5753 3.69166 11.422 3.84499C11.2687 3.99832 11.192 4.19099 11.192 4.42299C11.192 4.65499 11.2687 4.84766 11.422 5.00099C11.5753 5.15432 11.768 5.22999 12 5.22999Z"
        fill={pathName == "/dashboard/subscription" ? "#6c4def" : "black"}
        fillOpacity={pathName == "/dashboard/subscription" ? "1" : "0.6"}
      />
    </svg>
  );
};
export const ServiceRequestSvg = ({ pathName }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 16H16V15H8V16H6V15H2V20H22V15H18V16ZM20 8H17V6C17 4.9 16.1 4 15 4H9C7.9 4 7 4.9 7 6V8H4C2.9 8 2 8.9 2 10V14H6V12H8V14H16V12H18V14H22V10C22 8.9 21.1 8 20 8ZM15 8H9V6H15V8Z"
        fill={pathName == "/dashboard/serviceRequest" ? "#6c4def" : "black"}
        fillOpacity={pathName == "/dashboard/serviceRequest" ? "1" : "0.6"}
      />
    </svg>
  );
};
export const ComplaintsSvg = ({ pathName }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9955 9.013H17.0035M17.0035 7.009V4.505M7.5015 22H4.7175C4.3945 22 4.0695 21.954 3.7725 21.827C2.8065 21.412 2.3155 20.863 2.0875 20.52C2.02563 20.425 1.99522 20.3129 2.00061 20.1997C2.00599 20.0864 2.04689 19.9777 2.1175 19.889C3.2375 18.401 5.8335 17.503 7.5015 17.503M7.50651 22H10.2895C10.6135 22 10.9375 21.954 11.2345 21.827C12.2015 21.412 12.6915 20.863 12.9205 20.52C12.9824 20.425 13.0128 20.3129 13.0074 20.1997C13.002 20.0864 12.9611 19.9777 12.8905 19.889C11.7705 18.401 9.1745 17.503 7.50651 17.503M21.9995 6.792C21.9995 9.438 19.7595 11.584 16.9955 11.584C16.6702 11.584 16.3475 11.554 16.0275 11.494C15.7975 11.451 15.6835 11.43 15.6025 11.442C15.5225 11.454 15.4085 11.514 15.1825 11.636C14.5352 11.9811 13.7901 12.0971 13.0685 11.965C13.3425 11.627 13.5285 11.222 13.6115 10.788C13.6615 10.523 13.5375 10.265 13.3515 10.076C12.483 9.20339 11.9942 8.02314 11.9915 6.792C11.9915 4.146 14.2315 2 16.9955 2C19.7595 2 21.9995 4.146 21.9995 6.792ZM10.2845 12.289C10.2834 13.0249 9.99023 13.7303 9.46931 14.2501C8.94839 14.7698 8.2424 15.0615 7.50651 15.061C7.14196 15.0615 6.78087 14.9902 6.44387 14.8512C6.10687 14.7122 5.80055 14.5082 5.5424 14.2508C5.28426 13.9934 5.07934 13.6876 4.93935 13.351C4.79935 13.0144 4.72703 12.6535 4.72651 12.289C4.7269 11.9244 4.79913 11.5634 4.93906 11.2267C5.07899 10.89 5.28389 10.5841 5.54205 10.3266C5.80021 10.0691 6.10657 9.86496 6.44364 9.72587C6.78071 9.58679 7.14187 9.51547 7.50651 9.516C8.24257 9.51547 8.94872 9.80729 9.46967 10.3273C9.99061 10.8473 10.2837 11.5529 10.2845 12.289Z"
        fill={pathName == "/dashboard/complaints" ? "#6c4def" : "black"}
        fillOpacity={pathName == "/dashboard/complaints" ? "1" : "0.6"}
      />
    </svg>
  );
};
export const ServicesSvg = ({ pathName }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_240_1611)">
        <path
          d="M13.8867 13.8164C13.1992 13.2305 12.4375 12.7812 11.6016 12.4688C10.7656 12.1563 9.89844 12 9 12C8.3125 12 7.64844 12.0898 7.00781 12.2695C6.36719 12.4492 5.76953 12.6992 5.21484 13.0195C4.66016 13.3398 4.15625 13.7305 3.70312 14.1914C3.25 14.6523 2.85938 15.1602 2.53125 15.7148C2.20312 16.2695 1.94922 16.8672 1.76953 17.5078C1.58984 18.1484 1.5 18.8125 1.5 19.5H0C0 18.5625 0.136719 17.6602 0.410156 16.793C0.683594 15.9258 1.07812 15.125 1.59375 14.3906C2.10938 13.6562 2.71875 13.0039 3.42188 12.4336C4.125 11.8633 4.92188 11.4141 5.8125 11.0859C4.92969 10.5078 4.24219 9.78125 3.75 8.90625C3.25781 8.03125 3.00781 7.0625 3 6C3 5.17188 3.15625 4.39453 3.46875 3.66797C3.78125 2.94141 4.20703 2.30469 4.74609 1.75781C5.28516 1.21094 5.92187 0.78125 6.65625 0.46875C7.39063 0.15625 8.17188 0 9 0C9.82812 0 10.6055 0.15625 11.332 0.46875C12.0586 0.78125 12.6953 1.20703 13.2422 1.74609C13.7891 2.28516 14.2188 2.92187 14.5312 3.65625C14.8437 4.39063 15 5.17188 15 6C15 6.51562 14.9375 7.01953 14.8125 7.51172C14.6875 8.00391 14.5 8.46875 14.25 8.90625C14 9.34375 13.707 9.74609 13.3711 10.1133C13.0352 10.4805 12.6406 10.8047 12.1875 11.0859C12.6953 11.2812 13.1797 11.5195 13.6406 11.8008C14.1016 12.082 14.5352 12.3984 14.9414 12.75L13.8867 13.8164ZM4.5 6C4.5 6.625 4.61719 7.20703 4.85156 7.74609C5.08594 8.28516 5.40625 8.76172 5.8125 9.17578C6.21875 9.58984 6.69531 9.91406 7.24219 10.1484C7.78906 10.3828 8.375 10.5 9 10.5C9.61719 10.5 10.1992 10.3828 10.7461 10.1484C11.293 9.91406 11.7695 9.59375 12.1758 9.1875C12.582 8.78125 12.9063 8.30469 13.1484 7.75781C13.3906 7.21094 13.5078 6.625 13.5 6C13.5 5.38281 13.3828 4.80078 13.1484 4.25391C12.9141 3.70703 12.5938 3.23047 12.1875 2.82422C11.7812 2.41797 11.3008 2.09375 10.7461 1.85156C10.1914 1.60938 9.60938 1.49219 9 1.5C8.375 1.5 7.79297 1.61719 7.25391 1.85156C6.71484 2.08594 6.23828 2.40625 5.82422 2.8125C5.41016 3.21875 5.08594 3.69922 4.85156 4.25391C4.61719 4.80859 4.5 5.39062 4.5 6ZM20.25 9C20.7656 9 21.25 9.09766 21.7031 9.29297C22.1563 9.48828 22.5508 9.75781 22.8867 10.1016C23.2227 10.4453 23.4922 10.8437 23.6953 11.2969C23.8984 11.75 24 12.2344 24 12.75C24 13.2656 23.9023 13.75 23.707 14.2031C23.5117 14.6563 23.2422 15.0547 22.8984 15.3984C22.5547 15.7422 22.1563 16.0117 21.7031 16.207C21.25 16.4023 20.7656 16.5 20.25 16.5C20.0703 16.5 19.8945 16.4883 19.7227 16.4648L12.8438 23.3438C12.6328 23.5547 12.3906 23.7148 12.1172 23.8242C11.8437 23.9336 11.5547 23.9922 11.25 24C10.9375 24 10.6445 23.9414 10.3711 23.8242C10.0977 23.707 9.85938 23.5469 9.65625 23.3438C9.45312 23.1406 9.29297 22.9023 9.17578 22.6289C9.05859 22.3555 9 22.0625 9 21.75C9 21.4531 9.05469 21.168 9.16406 20.8945C9.27344 20.6211 9.4375 20.375 9.65625 20.1562L16.5352 13.2773C16.5117 13.1055 16.5 12.9297 16.5 12.75C16.5 12.2344 16.5977 11.75 16.793 11.2969C16.9883 10.8437 17.2539 10.4492 17.5898 10.1133C17.9258 9.77734 18.3242 9.50781 18.7852 9.30469C19.2461 9.10156 19.7344 9 20.25 9ZM20.25 15C20.5625 15 20.8555 14.9414 21.1289 14.8242C21.4023 14.707 21.6406 14.5469 21.8438 14.3438C22.0469 14.1406 22.207 13.9023 22.3242 13.6289C22.4414 13.3555 22.5 13.0625 22.5 12.75C22.5 12.4297 22.4258 12.1094 22.2773 11.7891L20.5664 13.5H19.5V12.4336L21.2109 10.7227C20.8906 10.5742 20.5703 10.5 20.25 10.5C19.9375 10.5 19.6445 10.5586 19.3711 10.6758C19.0977 10.793 18.8594 10.9531 18.6562 11.1562C18.4531 11.3594 18.293 11.5977 18.1758 11.8711C18.0586 12.1445 18 12.4375 18 12.75C18 13.0703 18.0742 13.3906 18.2227 13.7109L10.7227 21.2227C10.5742 21.3711 10.5 21.5469 10.5 21.75C10.5 21.9531 10.5742 22.1289 10.7227 22.2773C10.8711 22.4258 11.0469 22.5 11.25 22.5C11.4531 22.5 11.6289 22.4258 11.7773 22.2773L19.2891 14.7773C19.6094 14.9258 19.9297 15 20.25 15Z"
          fill={pathName == "/dashboard/services" ? "#6c4def" : "black"}
          fillOpacity={pathName == "/dashboard/services" ? "1" : "0.6"}
        />
      </g>
      <defs>
        <clipPath id="clip0_240_1611">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const SettingSvg = ({ pathName }) => {
  return (
    <svg
      className="setting_svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={pathName == "/dashboard/setting" ? "#6c4def" : "black"}
        strokeOpacity={pathName == "/dashboard/setting" ? "1" : "0.6"}
        strokeWidth="1.5"
      />
      <path
        d="M13.765 2.152C13.398 2 12.932 2 12 2C11.068 2 10.602 2 10.235 2.152C9.99214 2.25251 9.77151 2.3999 9.58569 2.58572C9.39986 2.77155 9.25248 2.99218 9.15196 3.235C9.05996 3.458 9.02296 3.719 9.00896 4.098C9.00273 4.37199 8.92696 4.6399 8.78877 4.87657C8.65059 5.11324 8.45451 5.31091 8.21896 5.451C7.97986 5.58504 7.71061 5.6561 7.4365 5.6575C7.16239 5.6589 6.89242 5.59059 6.65196 5.459C6.31596 5.281 6.07296 5.183 5.83196 5.151C5.30628 5.08187 4.77466 5.22431 4.35396 5.547C4.03996 5.79 3.80596 6.193 3.33996 7C2.87396 7.807 2.63996 8.21 2.58896 8.605C2.5546 8.86545 2.57188 9.13012 2.63983 9.38389C2.70778 9.63767 2.82505 9.87556 2.98496 10.084C3.13296 10.276 3.33996 10.437 3.66096 10.639C4.13396 10.936 4.43796 11.442 4.43796 12C4.43796 12.558 4.13396 13.064 3.66096 13.36C3.33996 13.563 3.13196 13.724 2.98496 13.916C2.82505 14.1244 2.70778 14.3623 2.63983 14.6161C2.57188 14.8699 2.5546 15.1345 2.58896 15.395C2.64096 15.789 2.87396 16.193 3.33896 17C3.80596 17.807 4.03896 18.21 4.35396 18.453C4.5624 18.6129 4.8003 18.7302 5.05407 18.7981C5.30784 18.8661 5.57251 18.8834 5.83296 18.849C6.07296 18.817 6.31596 18.719 6.65196 18.541C6.89242 18.4094 7.16239 18.3411 7.4365 18.3425C7.71061 18.3439 7.97986 18.415 8.21896 18.549C8.70196 18.829 8.98896 19.344 9.00896 19.902C9.02296 20.282 9.05896 20.542 9.15196 20.765C9.25248 21.0078 9.39986 21.2284 9.58569 21.4143C9.77151 21.6001 9.99214 21.7475 10.235 21.848C10.602 22 11.068 22 12 22C12.932 22 13.398 22 13.765 21.848C14.0078 21.7475 14.2284 21.6001 14.4142 21.4143C14.6001 21.2284 14.7474 21.0078 14.848 20.765C14.94 20.542 14.977 20.282 14.991 19.902C15.011 19.344 15.298 18.828 15.781 18.549C16.0201 18.415 16.2893 18.3439 16.5634 18.3425C16.8375 18.3411 17.1075 18.4094 17.348 18.541C17.684 18.719 17.927 18.817 18.167 18.849C18.4274 18.8834 18.6921 18.8661 18.9459 18.7981C19.1996 18.7302 19.4375 18.6129 19.646 18.453C19.961 18.211 20.194 17.807 20.66 17C21.126 16.193 21.36 15.79 21.411 15.395C21.4453 15.1345 21.428 14.8699 21.3601 14.6161C21.2921 14.3623 21.1749 14.1244 21.015 13.916C20.867 13.724 20.66 13.563 20.339 13.361C20.1047 13.2186 19.9105 13.019 19.7746 12.7809C19.6386 12.5428 19.5655 12.2741 19.562 12C19.562 11.442 19.866 10.936 20.339 10.64C20.66 10.437 20.868 10.276 21.015 10.084C21.1749 9.87556 21.2921 9.63767 21.3601 9.38389C21.428 9.13012 21.4453 8.86545 21.411 8.605C21.359 8.211 21.126 7.807 20.661 7C20.194 6.193 19.961 5.79 19.646 5.547C19.4375 5.38709 19.1996 5.26981 18.9459 5.20187C18.6921 5.13392 18.4274 5.11664 18.167 5.151C17.927 5.183 17.684 5.281 17.347 5.459C17.1066 5.59042 16.8368 5.65862 16.5629 5.65722C16.289 5.65582 16.0199 5.58486 15.781 5.451C15.5454 5.31091 15.3493 5.11324 15.2112 4.87657C15.073 4.6399 14.9972 4.37199 14.991 4.098C14.977 3.718 14.941 3.458 14.848 3.235C14.7474 2.99218 14.6001 2.77155 14.4142 2.58572C14.2284 2.3999 14.0078 2.25251 13.765 2.152Z"
        stroke={pathName == "/dashboard/setting" ? "#6c4def" : "black"}
        strokeOpacity={pathName == "/dashboard/setting" ? "1" : "0.6"}
        strokeWidth="1.5"
      />
    </svg>
  );
};
export const LogoutSvg = ({ pathName }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H11C11.2833 3 11.521 3.096 11.713 3.288C11.905 3.48 12.0007 3.71733 12 4C11.9993 4.28267 11.9033 4.52033 11.712 4.713C11.5207 4.90567 11.2833 5.00133 11 5H5V19H11C11.2833 19 11.521 19.096 11.713 19.288C11.905 19.48 12.0007 19.7173 12 20C11.9993 20.2827 11.9033 20.5203 11.712 20.713C11.5207 20.9057 11.2833 21.0013 11 21H5ZM17.175 13H10C9.71667 13 9.47933 12.904 9.288 12.712C9.09667 12.52 9.00067 12.2827 9 12C8.99933 11.7173 9.09533 11.48 9.288 11.288C9.48067 11.096 9.718 11 10 11H17.175L15.3 9.125C15.1167 8.94167 15.025 8.71667 15.025 8.45C15.025 8.18333 15.1167 7.95 15.3 7.75C15.4833 7.55 15.7167 7.44567 16 7.437C16.2833 7.42833 16.525 7.52433 16.725 7.725L20.3 11.3C20.5 11.5 20.6 11.7333 20.6 12C20.6 12.2667 20.5 12.5 20.3 12.7L16.725 16.275C16.525 16.475 16.2877 16.571 16.013 16.563C15.7383 16.555 15.5007 16.4507 15.3 16.25C15.1167 16.05 15.0293 15.8127 15.038 15.538C15.0467 15.2633 15.1423 15.034 15.325 14.85L17.175 13Z"
        fill={pathName == "/dashboard/logout" ? "#6c4def" : "black"}
        fillOpacity={pathName == "/dashboard/logout" ? "1" : "0.6"}
      />
    </svg>
  );
};
export const SearchIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M21 21L16.657 16.657M16.657 16.657C17.3998 15.9141 17.9891 15.0322 18.3912 14.0615C18.7932 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.9494 18.7932 8.90908 18.3912 7.93845C17.9891 6.96782 17.3998 6.08589 16.657 5.343C15.9141 4.60011 15.0321 4.01082 14.0615 3.60877C13.0909 3.20673 12.0506 2.99979 11 2.99979C9.94936 2.99979 8.90905 3.20673 7.93842 3.60877C6.96779 4.01082 6.08585 4.60011 5.34296 5.343C3.84263 6.84333 2.99976 8.87821 2.99976 11C2.99976 13.1218 3.84263 15.1567 5.34296 16.657C6.84329 18.1573 8.87818 19.0002 11 19.0002C13.1217 19.0002 15.1566 18.1573 16.657 16.657Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const MessageIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="25" fill="#F1F1F1" />
      <path
        d="M17 33C16.45 33 15.9793 32.8043 15.588 32.413C15.1967 32.0217 15.0007 31.5507 15 31V19C15 18.45 15.196 17.9793 15.588 17.588C15.98 17.1967 16.4507 17.0007 17 17H33C33.55 17 34.021 17.196 34.413 17.588C34.805 17.98 35.0007 18.4507 35 19V31C35 31.55 34.8043 32.021 34.413 32.413C34.0217 32.805 33.5507 33.0007 33 33H17ZM25 26L17 21V31H33V21L25 26ZM25 24L33 19H17L25 24ZM17 21V19V31V21Z"
        fill="black"
      />
    </svg>
  );
};
export const NotificationIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="25" fill="#F1F1F1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9999 22C17.9999 20.1435 18.7374 18.363 20.0502 17.0503C21.3629 15.7375 23.1434 15 24.9999 15C26.8564 15 28.6369 15.7375 29.9497 17.0503C31.2624 18.363 31.9999 20.1435 31.9999 22V25.764L33.8219 29.408C33.9058 29.5757 33.9454 29.7621 33.937 29.9494C33.9286 30.1368 33.8724 30.3188 33.7738 30.4783C33.6752 30.6379 33.5375 30.7695 33.3737 30.8608C33.2099 30.9521 33.0255 31 32.8379 31H28.8739C28.6515 31.8582 28.1504 32.6183 27.4492 33.1609C26.748 33.7035 25.8865 33.9979 24.9999 33.9979C24.1133 33.9979 23.2518 33.7035 22.5507 33.1609C21.8495 32.6183 21.3484 31.8582 21.1259 31H17.1619C16.9744 31 16.79 30.9521 16.6262 30.8608C16.4624 30.7695 16.3247 30.6379 16.2261 30.4783C16.1275 30.3188 16.0713 30.1368 16.0629 29.9494C16.0545 29.7621 16.0941 29.5757 16.1779 29.408L17.9999 25.764V22ZM23.2679 31C23.4435 31.304 23.6959 31.5565 24 31.732C24.304 31.9075 24.6489 31.9999 24.9999 31.9999C25.351 31.9999 25.6959 31.9075 25.9999 31.732C26.3039 31.5565 26.5564 31.304 26.7319 31H23.2679ZM24.9999 17C23.6738 17 22.4021 17.5268 21.4644 18.4645C20.5267 19.4021 19.9999 20.6739 19.9999 22V25.764C19.9999 26.0743 19.9277 26.3804 19.7889 26.658L18.6189 29H31.3819L30.2119 26.658C30.0728 26.3805 30.0003 26.0744 29.9999 25.764V22C29.9999 20.6739 29.4731 19.4021 28.5355 18.4645C27.5978 17.5268 26.326 17 24.9999 17Z"
        fill="black"
      />
    </svg>
  );
};
export const BackArrowIcon = () => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_9421)">
        <path
          d="M8.74995 3.5156C8.46241 3.22815 8.07247 3.06667 7.66589 3.06667C7.2593 3.06667 6.86936 3.22815 6.58182 3.5156L-0.31818 10.4156C-0.605637 10.7031 -0.76712 11.0931 -0.76712 11.4997C-0.76712 11.9063 -0.605637 12.2962 -0.31818 12.5837L6.58182 19.4837C6.87101 19.763 7.25833 19.9176 7.66037 19.9141C8.0624 19.9106 8.44698 19.7494 8.73127 19.4651C9.01557 19.1808 9.17683 18.7962 9.18032 18.3942C9.18381 17.9921 9.02926 17.6048 8.74995 17.3156L4.59922 13.033H19.1659C19.5726 13.033 19.9626 12.8715 20.2501 12.5839C20.5377 12.2963 20.6992 11.9063 20.6992 11.4997C20.6992 11.093 20.5377 10.703 20.2501 10.4154C19.9626 10.1279 19.5726 9.96634 19.1659 9.96634H4.59922L8.74995 5.68374C9.03741 5.3962 9.19889 5.00626 9.19889 4.59967C9.19889 4.19309 9.03741 3.80315 8.74995 3.5156Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_9421">
          <rect width="23" height="23" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const DisalbleIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25 5.25L18.75 18.75M21.75 12C21.75 14.5859 20.7228 17.0658 18.8943 18.8943C17.0658 20.7228 14.5859 21.75 12 21.75C9.41414 21.75 6.93419 20.7228 5.10571 18.8943C3.27723 17.0658 2.25 14.5859 2.25 12C2.25 9.41414 3.27723 6.93419 5.10571 5.10571C6.93419 3.27723 9.41414 2.25 12 2.25C14.5859 2.25 17.0658 3.27723 18.8943 5.10571C20.7228 6.93419 21.75 9.41414 21.75 12Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const FilterIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.953 2.25H19.047C19.714 2.25 20.284 2.25 20.74 2.307C21.223 2.368 21.69 2.505 22.074 2.865C22.464 3.232 22.619 3.689 22.687 4.164C22.75 4.601 22.75 5.144 22.75 5.764V6.54C22.75 7.029 22.75 7.45 22.714 7.803C22.674 8.183 22.589 8.538 22.383 8.879C22.178 9.218 21.903 9.464 21.585 9.684C21.286 9.892 20.905 10.107 20.455 10.36L17.513 12.016C16.843 12.393 16.61 12.529 16.454 12.664C16.097 12.974 15.892 13.319 15.796 13.75C15.755 13.935 15.75 14.167 15.75 14.873V17.605C15.75 18.506 15.75 19.271 15.657 19.86C15.559 20.485 15.33 21.085 14.73 21.46C14.143 21.827 13.498 21.793 12.87 21.644C12.265 21.501 11.52 21.209 10.626 20.86L10.54 20.826C10.12 20.662 9.754 20.519 9.464 20.369C9.152 20.208 8.862 20.008 8.641 19.696C8.416 19.38 8.327 19.042 8.286 18.696C8.25 18.381 8.25 18.003 8.25 17.581V14.873C8.25 14.167 8.246 13.935 8.204 13.75C8.11344 13.3241 7.88155 12.9414 7.546 12.664C7.39 12.529 7.156 12.393 6.487 12.016L3.545 10.36C3.095 10.107 2.714 9.892 2.415 9.684C2.097 9.464 1.822 9.218 1.617 8.879C1.411 8.538 1.326 8.182 1.287 7.803C1.25 7.451 1.25 7.029 1.25 6.54V5.764C1.25 5.144 1.25 4.601 1.313 4.164C1.381 3.689 1.536 3.232 1.926 2.865C2.31 2.505 2.776 2.368 3.26 2.307C3.716 2.25 4.286 2.25 4.953 2.25ZM3.448 3.796C3.114 3.838 3.008 3.906 2.953 3.959C2.903 4.005 2.839 4.086 2.797 4.377C2.752 4.695 2.75 5.129 2.75 5.815V6.505C2.75 7.039 2.75 7.383 2.778 7.649C2.804 7.896 2.848 8.015 2.902 8.104C2.957 8.195 3.049 8.298 3.27 8.452C3.504 8.614 3.823 8.795 4.31 9.069L7.223 10.709L7.303 10.754C7.863 11.069 8.243 11.283 8.529 11.531C9.10742 12.019 9.50823 12.6845 9.669 13.424C9.75 13.791 9.75 14.204 9.75 14.784V17.543C9.75 18.015 9.751 18.305 9.777 18.523C9.799 18.721 9.836 18.788 9.863 18.827C9.893 18.869 9.953 18.934 10.152 19.037C10.364 19.146 10.657 19.261 11.119 19.442C12.08 19.818 12.727 20.069 13.216 20.185C13.695 20.299 13.853 20.24 13.934 20.189C14.002 20.146 14.107 20.059 14.176 19.626C14.248 19.169 14.25 18.523 14.25 17.542V14.784C14.25 14.204 14.25 13.791 14.332 13.424C14.4925 12.6847 14.893 12.0191 15.471 11.531C15.757 11.283 16.138 11.068 16.696 10.754L16.777 10.709L19.69 9.069C20.177 8.795 20.496 8.614 20.73 8.452C20.951 8.298 21.043 8.195 21.098 8.104C21.152 8.015 21.196 7.896 21.221 7.649C21.249 7.383 21.25 7.039 21.25 6.504V5.814C21.25 5.129 21.248 4.694 21.203 4.377C21.161 4.086 21.096 4.005 21.048 3.959C20.992 3.907 20.886 3.838 20.552 3.796C20.202 3.751 19.727 3.75 19 3.75H5C4.273 3.75 3.799 3.751 3.448 3.796Z"
        fill="white"
      />
    </svg>
  );
};
export const DottedIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.5C12.3978 16.5 12.7794 16.658 13.0607 16.9393C13.342 17.2206 13.5 17.6022 13.5 18C13.5 18.3978 13.342 18.7794 13.0607 19.0607C12.7794 19.342 12.3978 19.5 12 19.5C11.6022 19.5 11.2206 19.342 10.9393 19.0607C10.658 18.7794 10.5 18.3978 10.5 18C10.5 17.6022 10.658 17.2206 10.9393 16.9393C11.2206 16.658 11.6022 16.5 12 16.5ZM12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5ZM12 4.5C12.3978 4.5 12.7794 4.65804 13.0607 4.93934C13.342 5.22064 13.5 5.60218 13.5 6C13.5 6.39782 13.342 6.77936 13.0607 7.06066C12.7794 7.34196 12.3978 7.5 12 7.5C11.6022 7.5 11.2206 7.34196 10.9393 7.06066C10.658 6.77936 10.5 6.39782 10.5 6C10.5 5.60218 10.658 5.22064 10.9393 4.93934C11.2206 4.65804 11.6022 4.5 12 4.5Z"
        fill="black"
      />
    </svg>
  );
};
export const ArrowIcon = () => {
  return (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_484_2010)">
        <path
          d="M8.74995 4.01535C8.46241 3.72789 8.07247 3.56641 7.66589 3.56641C7.2593 3.56641 6.86936 3.72789 6.58182 4.01535L-0.31818 10.9153C-0.605637 11.2029 -0.76712 11.5928 -0.76712 11.9994C-0.76712 12.406 -0.605637 12.7959 -0.31818 13.0835L6.58182 19.9835C6.87101 20.2628 7.25833 20.4173 7.66037 20.4138C8.0624 20.4104 8.44698 20.2491 8.73127 19.9648C9.01557 19.6805 9.17683 19.2959 9.18032 18.8939C9.18381 18.4919 9.02926 18.1045 8.74995 17.8153L4.59922 13.5327H19.1659C19.5726 13.5327 19.9626 13.3712 20.2501 13.0836C20.5377 12.7961 20.6992 12.4061 20.6992 11.9994C20.6992 11.5927 20.5377 11.2027 20.2501 10.9152C19.9626 10.6276 19.5726 10.4661 19.1659 10.4661H4.59922L8.74995 6.18348C9.03741 5.89594 9.19889 5.506 9.19889 5.09941C9.19889 4.69283 9.03741 4.30289 8.74995 4.01535Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_484_2010">
          <rect
            width="23"
            height="23"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const Resolve_Issue = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.4842 4.575C20.5559 4.50581 20.613 4.42306 20.6523 4.33155C20.6916 4.24005 20.7123 4.14164 20.7132 4.04205C20.714 3.94247 20.6951 3.84371 20.6574 3.75153C20.6196 3.65936 20.564 3.57562 20.4935 3.5052C20.4231 3.43478 20.3394 3.37909 20.2472 3.34138C20.155 3.30367 20.0563 3.2847 19.9567 3.28556C19.8571 3.28643 19.7587 3.30712 19.6672 3.34642C19.5757 3.38573 19.4929 3.44287 19.4237 3.5145L18.8747 4.0635C17.5936 2.95378 16.0629 2.17069 14.4134 1.78112C12.7639 1.39155 11.0446 1.40709 9.40234 1.8264C7.76012 2.24571 6.24382 3.05634 4.98297 4.18903C3.72213 5.32171 2.75422 6.74279 2.16195 8.33084C1.56968 9.91889 1.37064 11.6267 1.58184 13.3084C1.79305 14.9901 2.40821 16.5957 3.37479 17.988C4.34136 19.3802 5.63061 20.5178 7.13239 21.3036C8.63417 22.0893 10.3038 22.4998 11.9987 22.5C11.6398 22.0225 11.3391 21.5038 11.1032 20.955C9.69987 20.8147 8.34914 20.3465 7.15997 19.5882C5.9708 18.8299 4.97648 17.8027 4.25722 16.5896C3.53795 15.3764 3.11386 14.0112 3.01916 12.604C2.92447 11.1968 3.1618 9.78706 3.71204 8.48846C4.26227 7.18985 5.10999 6.03874 6.18684 5.12796C7.26369 4.21717 8.53951 3.57222 9.91141 3.2451C11.2833 2.91798 12.7129 2.91786 14.0849 3.24475C15.4568 3.57165 16.7327 4.21639 17.8097 5.127L16.7447 6.192C15.8594 5.4691 14.8205 4.95811 13.7075 4.69807C12.5945 4.43804 11.4368 4.43583 10.3228 4.69162C9.2088 4.94741 8.168 5.45443 7.27991 6.17395C6.39182 6.89346 5.67992 7.80645 5.19861 8.84315C4.7173 9.87986 4.47931 11.0129 4.50281 12.1556C4.52631 13.2983 4.81068 14.4206 5.33421 15.4366C5.85773 16.4527 6.60656 17.3356 7.52348 18.018C8.4404 18.7004 9.50117 19.1642 10.6247 19.374C10.5292 18.8587 10.488 18.3349 10.5017 17.811C9.09124 17.4425 7.86306 16.5733 7.04643 15.3656C6.2298 14.158 5.88055 12.6944 6.06386 11.2481C6.24717 9.80188 6.95051 8.47174 8.04261 7.50601C9.1347 6.54028 10.5409 6.00497 11.9987 6C13.3315 5.99751 14.6268 6.44106 15.6782 7.26L14.6057 8.331C13.6861 7.67522 12.5535 7.38926 11.4328 7.52987C10.3121 7.67049 9.28529 8.2274 8.55619 9.09004C7.82709 9.95269 7.44905 11.058 7.49713 12.1864C7.54521 13.3149 8.0159 14.384 8.81574 15.1815C8.88537 15.2512 8.96806 15.3066 9.05907 15.3443C9.15009 15.3821 9.24766 15.4016 9.34621 15.4017C9.44475 15.4017 9.54235 15.3824 9.63342 15.3447C9.72449 15.3071 9.80725 15.2519 9.87699 15.1823C9.94672 15.1126 10.0021 15.0299 10.0398 14.9389C10.0776 14.8479 10.0971 14.7503 10.0972 14.6518C10.0972 14.5532 10.0779 14.4556 10.0402 14.3646C10.0026 14.2735 9.94737 14.1907 9.87774 14.121C9.3615 13.6047 9.05128 12.9178 9.00523 12.1891C8.95917 11.4604 9.18045 10.7399 9.62758 10.1627C10.0747 9.5855 10.717 9.19115 11.4341 9.0536C12.1511 8.91604 12.8937 9.04471 13.5227 9.4155L12.3872 10.551C12.0683 10.4655 11.73 10.4877 11.4249 10.614C11.1199 10.7403 10.865 10.9638 10.6999 11.2498C10.5348 11.5358 10.4686 11.8682 10.5117 12.1956C10.5548 12.523 10.7047 12.827 10.9382 13.0605C11.1717 13.294 11.4757 13.4439 11.8031 13.487C12.1305 13.5301 12.463 13.464 12.7489 13.2989C13.0349 13.1337 13.2584 12.8789 13.3847 12.5738C13.5111 12.2687 13.5332 11.9305 13.4477 11.6115L15.1802 9.879L18.8702 6.189C20.0489 7.57736 20.7762 9.2921 20.9552 11.1045C21.5057 11.3415 22.0247 11.6445 22.4987 12C22.4987 9.546 21.6437 7.0935 19.9337 5.124L20.4842 4.575ZM23.9987 18C23.9987 19.5913 23.3666 21.1174 22.2414 22.2426C21.1162 23.3679 19.59 24 17.9987 24C16.4074 24 14.8813 23.3679 13.7561 22.2426C12.6309 21.1174 11.9987 19.5913 11.9987 18C11.9987 16.4087 12.6309 14.8826 13.7561 13.7574C14.8813 12.6321 16.4074 12 17.9987 12C19.59 12 21.1162 12.6321 22.2414 13.7574C23.3666 14.8826 23.9987 16.4087 23.9987 18ZM21.5297 15.969C21.6703 16.1096 21.7493 16.3004 21.7493 16.4993C21.7493 16.6981 21.6703 16.8889 21.5297 17.0295L17.7797 20.7795C17.7101 20.8493 17.6273 20.9048 17.5362 20.9426C17.4451 20.9804 17.3474 20.9998 17.2487 20.9998C17.1501 20.9998 17.0524 20.9804 16.9613 20.9426C16.8702 20.9048 16.7874 20.8493 16.7177 20.7795L15.2177 19.2795C15.0771 19.1387 14.9982 18.9477 14.9983 18.7487C14.9985 18.5497 15.0777 18.3589 15.2185 18.2183C15.3593 18.0776 15.5502 17.9987 15.7493 17.9988C15.9483 17.999 16.1391 18.0782 16.2797 18.219L17.2487 19.1895L20.4677 15.969C20.5374 15.8992 20.6202 15.8437 20.7113 15.8059C20.8024 15.7681 20.9001 15.7487 20.9987 15.7487C21.0974 15.7487 21.1951 15.7681 21.2862 15.8059C21.3773 15.8437 21.4601 15.8992 21.5297 15.969Z"
        fill="white"
      />
    </svg>
  );
};
export const BlackDisableIcon = () => {
  return (
    <svg
      width="88"
      height="87"
      viewBox="0 0 88 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5312 19.0312L68.4688 67.9688M79.3438 43.5C79.3437 52.8737 75.62 61.8636 68.9918 68.4918C62.3636 75.12 53.3737 78.8438 44 78.8438C34.6263 78.8438 25.6364 75.12 19.0082 68.4918C12.38 61.8636 8.65625 52.8737 8.65625 43.5C8.65625 34.1263 12.38 25.1364 19.0082 18.5082C25.6364 11.88 34.6263 8.15625 44 8.15625C53.3737 8.15625 62.3636 11.88 68.9918 18.5082C75.62 25.1364 79.3437 34.1263 79.3438 43.5Z"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const BlackEnableIcon = () => {
  return (
    <svg
      width="88"
      height="87"
      viewBox="0 0 88 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44 76.1248C39.4953 76.1248 35.2589 75.2669 31.2908 73.551C27.3226 71.8328 23.8704 69.5055 20.9341 66.5693C17.9955 63.6306 15.6682 60.1772 13.9524 56.209C12.2341 52.2408 11.375 48.0044 11.375 43.4998C11.375 36.2232 13.5621 29.6994 17.9362 23.9284C22.3104 18.1574 27.9775 14.2339 34.9375 12.158V16.0476C28.9756 18.0051 24.1616 21.4972 20.4955 26.5239C16.8294 31.5506 14.9976 37.2092 15 43.4998C15 51.5956 17.8094 58.4529 23.4281 64.0716C29.0469 69.6904 35.9042 72.4998 44 72.4998C52.0958 72.4998 58.9531 69.6904 64.5719 64.0716C70.1906 58.4529 73 51.5956 73 43.4998C73 37.2068 71.1682 31.5469 67.5045 26.5203C63.8408 21.4936 59.0268 18.0027 53.0625 16.0476V12.158C60.0225 14.2363 65.6896 18.1598 70.0638 23.9284C74.4379 29.697 76.625 36.2208 76.625 43.4998C76.625 48.0044 75.7671 52.2408 74.0513 56.209C72.333 60.1772 70.0058 63.6294 67.0695 66.5656C64.1308 69.5043 60.6774 71.8316 56.7092 73.5474C52.7411 75.2656 48.5047 76.1248 44 76.1248ZM44 55.4188L28.3835 39.8059L30.95 37.2394L42.1875 48.4551V10.9473H45.8125V48.4588L57.05 37.243L59.6165 39.8095L44 55.4188Z"
        fill="black"
      />
    </svg>
  );
};
