import styled from "@emotion/styled";

export const PopupModalContainer = styled.div`
    position: fixed;
    display: block;
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    background-color: #ffffff;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    box-shadow: 0 0 29px rgb(49 54 68 / 25%);

    &.show {
        height: ${(p) => p.height ? p.height : '400px'};
        transition: height 500ms ease-in-out;
    }
    &.hide {
        height: 0;
        transition: height 500ms ease-in-out;
    }
`;

export const PopupWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 15px;
    height: 100%;
`;

export const PopupTitle = styled.h1`
    margin: 0 15px;
    font-size: 22px;
`;

export const ButtonWrapper = styled.div`
    display: none;
    justify-content: space-between;
    width: 100%;

    &.show {
        display: flex;
        transition: display 1000ms ease-in-out;
    }
    &.hide {
        display: none;
        transition: display 100ms ease-in-out;
    }
`;

export const PopupButton = styled.button`
    width: 49%;
    height: 38px;

    &.save {
        color: #fff;
        background-color: #3db4f2;
    }
    &.cancel {
        color: #5c728a;
        background-color: #f4f4f4;
    }
    &.delete {
        color: #ffffff;
        background-color: #dc3545;
    }
`;
