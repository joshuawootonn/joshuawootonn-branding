import React, {useRef} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const Root = styled.div`
  font-family: "Josefin Sans", sans-serif;
  position: fixed;
  bottom: 10px;
  right: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const A = styled(motion.a)`
  font-family: "Josefin Sans", sans-serif;
  font-size: 25px;
  background-color: rgb(68, 109, 246);
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 8px;
  margin-right: 10px;
  cursor: pointer;
  text-decoration: none;
`;

const randomRotationAmount = (isNegative) => {
    const magnitude = Math.random() * 15 + 5;
    return Math.floor(isNegative ? magnitude : -1 * magnitude);
};


export const Branding = () => {

    const activeRef = useRef(randomRotationAmount(true));
    const hoverRef = useRef(randomRotationAmount(false));

    console.log(activeRef.current, hoverRef.current
    )
    return (
        <Root>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
            </style>
            <A target="_blank" rel="noopener" href="https://www.joshuawootonn.com"
               whileHover={{
                   rotate: hoverRef.current,
                   scale: 1.1,
               }}
               whileFocus={{
                   rotate: activeRef.current,
                   scale: .95,
               }}>
                more from me >
            </A>
            <svg
                width="100"
                height="100"
                viewBox="0 0 302 302"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M179.448 208.335C179.448 249.565 145.745 283.133 103.722 284.303C102.967 284.303 102.212 284.341 101.457 284.341C92.1768 284.354 82.9658 282.747 74.2389 279.592C44.5448 268.825 23.4048 240.988 23.4048 208.335C23.4214 197.77 25.6704 187.328 30.0044 177.693C34.3385 168.058 40.6597 159.448 48.5538 152.427C56.1275 145.635 64.9481 140.378 74.5258 136.949C82.2624 134.208 90.3764 132.68 98.5801 132.419C99.5163 132.382 100.468 132.359 101.419 132.359C112.488 132.34 123.438 134.636 133.567 139.101C139.495 141.71 145.075 145.047 150.177 149.037C156.519 153.972 162.05 159.87 166.568 166.515C174.959 178.847 179.447 193.418 179.448 208.335Z"
                    fill="#CFCFCF"
                />
                <path
                    d="M292.566 144.57C295.9 152.153 292.455 161.004 284.872 164.338L248.855 180.173L213.076 195.907L180.869 210.06C173.284 213.394 164.433 209.946 161.101 202.359L156.119 191.015L105.722 76.3682C105.664 76.2347 105.725 76.0791 105.858 76.0205L223.338 24.3754C230.922 21.0415 239.772 24.4866 243.106 32.0703L262.581 76.3682L278.383 112.306L292.566 144.57Z"
                    fill="#EFEFEF"
                />
                <path
                    d="M35.9604 22.7708C32.3462 19.4183 27.579 17.5876 22.6498 17.6594C17.6668 17.6459 12.8632 19.5177 9.20323 22.8991C7.33849 24.4692 5.84909 26.437 4.84439 28.6581C3.8397 30.8791 3.34522 33.297 3.39728 35.7341C3.37697 38.1623 3.89764 40.5645 4.9215 42.7663C5.94535 44.9681 7.44668 46.9142 9.31648 48.4635C13.0067 51.8036 17.8238 53.6242 22.8008 53.5597C27.7357 53.5926 32.492 51.7149 36.0737 48.32C37.8881 46.7268 39.3332 44.7571 40.3086 42.5483C41.2839 40.3394 41.7659 37.9445 41.7211 35.5303C41.7444 33.1129 41.2413 30.7193 40.2465 28.5159C39.2517 26.3125 37.7891 24.3521 35.9604 22.7708ZM102.582 200.075C95.7866 185.262 89.354 170.313 82.7553 155.439C80.0222 149.289 77.2866 143.135 74.5485 136.98C69.3943 125.363 64.2301 113.736 59.0559 102.099C55.2305 93.4766 51.4002 84.862 47.5648 76.255L17.9084 76.6627L48.5614 152.435L75.8169 219.705C84.3408 238.905 81.9399 263.246 74.2238 279.569C82.9507 282.725 92.1617 284.332 101.442 284.318C102.197 284.318 102.952 284.318 103.707 284.28C117.78 259.048 114.231 225.602 102.582 200.075Z"
                    fill="#333333"
                />
                <path
                    d="M262.581 76.3683H262.257L226.017 165.096L187.338 76.3683H159.403L170.796 100.883L144.205 163.027L105.866 76.3683H74.0957L140.43 227.927L156.119 191.015L182.166 129.86L213.076 195.885L248.856 180.151L278.384 112.284L262.581 76.3683Z"
                    fill="#333333"
                />
            </svg>
        </Root>
    );
};