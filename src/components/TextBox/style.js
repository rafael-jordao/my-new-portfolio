import styled from "styled-components";

export const TextBoxx = styled.div`
        width: 100%;
        max-width: 250px;
        background: #006ba6;
        padding: 0.7rem;
        border-radius: 10px 10px 10px 0px;
        box-shadow: 0px 15px 30px #141414;
        opacity: 0.8;
        z-index: 1;
        position: absolute;
        transform: translate(200px, 0px);
        transition: 1s;

        span {
            font-size: 0.rem;
        }

        @media (min-width: 880px) {
            transform: translate(200px, -180px);
        }
        @media (max-width: 500px) {
            max-width: 170px;
        }
        @media (max-width: 320px) {
          
            transform: translate(130px, 0px);
        }

        p {
            margin-top: 0;
            font-size: 0.7rem;
        }
`