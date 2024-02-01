import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";

export function FacebookIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
         <Rect width={67} height={70} rx={15} fill="#A72024" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.4544 2H3.54562C2.69214 2.00034 2.00034 2.69214 2 3.54562V28.4544C2.00034 29.3079 2.69214 29.9997 3.54562 30H16V19H12.6531V15H16V11.8125C16 8.19625 18.5081 6.2275 21.7388 6.2275C23.2844 6.2275 24.9469 6.34375 25.3331 6.395V10.1719H22.7594C21.0019 10.1719 20.6669 11.0031 20.6669 12.2281V15H24.8544L24.3075 19H20.6669V30H28.4544C29.3079 29.9997 29.9997 29.3079 30 28.4544V3.54562C29.9997 2.69214 29.3079 2.00034 28.4544 2Z"
        fill="#323755"
      />
    </Svg>
  );
}

export function TwitterIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.5725 13.8425L29.4312 13.2431H16.4038V18.7569H24.1875C23.3794 22.5944 19.6294 24.6144 16.5662 24.6144C14.3375 24.6144 11.9881 23.6769 10.4331 22.17C8.77617 20.5387 7.83623 18.3152 7.82062 15.99C7.82062 13.6675 8.86438 11.3444 10.3831 9.81625C11.9019 8.28813 14.1956 7.43313 16.4762 7.43313C19.0881 7.43313 20.96 8.82 21.66 9.4525L25.5781 5.555C24.4287 4.545 21.2712 2 16.35 2C12.5531 2 8.9125 3.45438 6.25125 6.10687C3.625 8.71875 2.26562 12.4956 2.26562 16C2.26562 19.5044 3.55187 23.0925 6.09687 25.725C8.81625 28.5325 12.6675 30 16.6331 30C20.2413 30 23.6612 28.5863 26.0987 26.0212C28.495 23.4963 29.7344 20.0025 29.7344 16.34C29.7344 14.7981 29.5794 13.8825 29.5725 13.8425Z"
        fill="#323755"
      />
    </Svg>
  );
}

export function InstagramIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0535 4.30375C18.0785 3.05688 19.8285 2.10188 21.3285 2C21.5835 3.70563 20.886 5.36813 19.966 6.54125C19.011 7.77375 17.376 8.73563 15.7785 8.73563H15.6585C15.3585 7.11 16.1235 5.43375 17.0535 4.30375ZM18.712 9.23612C19.5684 8.91105 20.5097 8.55374 21.8834 8.55374L21.8771 8.55624C23.7815 8.55624 25.8015 9.59874 27.239 11.3987C22.5296 13.9869 23.2946 20.7375 28.0565 22.545C27.4065 24.0044 27.0915 24.6519 26.244 25.9419C25.0665 27.7356 23.4096 29.9731 21.3471 29.995H21.3096C20.4858 29.995 19.9384 29.7435 19.3488 29.4727C18.6609 29.1567 17.9157 28.8144 16.6071 28.8144H16.5696C15.2418 28.8218 14.4744 29.1653 13.7693 29.4809C13.1644 29.7516 12.6054 30.0019 11.7778 30.0019H11.7403C9.67777 29.98 8.10527 27.9606 6.92777 26.16C3.63589 21.13 3.29089 15.2256 5.32339 12.0906C6.77089 9.86749 9.05027 8.56249 11.1878 8.56249C12.3324 8.56249 13.2542 8.89049 14.1314 9.20263C14.9277 9.48597 15.6872 9.75624 16.5434 9.75624C17.3417 9.75624 17.9973 9.5074 18.712 9.23612Z"
        fill="#323755"
      />
    </Svg>
  );
}

export function SvgLocation(props) {
    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={90}
        height={100}
        viewBox="0 0 67 70"
        fill="none"
        {...props}
      >
        
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.203 29.588c0 5.676 10.277 22.21 10.277 22.21s10.277-16.534 10.277-22.21c0-5.675-4.6-10.276-10.276-10.276s-10.278 4.6-10.278 10.276zm4.697-.707a5.58 5.58 0 1111.16 0 5.58 5.58 0 01-11.16 0z"
          fill="#A72024"
        />
      </Svg>
    );
  }