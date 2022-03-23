import styled from 'styled-components';


export const Content = styled.div`
    padding: 1rem;
    margin-left: 5rem;
    display: flex;
    gap: 3rem;
    align-items: center;

    p {
        margin-top: 1rem;
    }

    ul {
        display: flex;
        gap: 2rem;
        margin-top: 2rem;
    }

    img {
        width: 100%;
        min-width: 30%;
        max-width: 300px;
        margin-top: 1rem;
        border: 1px solid #add8e6;
        box-shadow: 0px 15px 30px #000000;
        transition: 0.3s;
        border-radius: 20px;

        &:hover {
            transform: scale(105%);
            box-shadow: 0px 15px 45px #000000;
        }


    }

    @media (max-width: 870px) {
        display: block;
        margin-left: 2rem;
    }
    @media (max-width: 350px) {
        margin-left: 0.2rem;
    }

`








