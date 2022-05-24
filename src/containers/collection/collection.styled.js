import styled from "@emotion/styled";

export const Wrapper = styled.div`
    padding-right: 15px;
    padding-left: 15px;
`;

export const PageTitle = styled.h1`
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    padding: 25px 0 5px;
    margin: 0;
`;

export const AddNewButton = styled.button`
    height: 38px;
    width: 100%;
    background-color: #3db4f2;
    border: none;
    color: #fff;
    border-radius: 4px;
    margin-bottom: 15px;
`;

export const PopupContentWrapper = styled.div`
    height: 70px;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-right: 15px;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const InputCollection = styled.input`
    position: relative;
    flex: 1 1 auto;
    min-width: 0;
    width: 100%;
    margin-bottom: 0;
    display: block;
    height: 26px;
    padding: 5px;
    font-size: 16px;
    line-height: 1.5;
    color: #495057;
    background-clip: padding-box;
    border: 1px solid #f4f4f4;
    border-radius: 0.25rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

export const ErrorText = styled.p`
    color: #dc3545;
    font-size: 12px;
    font-style: italic;
    margin-top: 5px;
    margin-bottom: 0;
`;

export const WarningText = styled.p`
    font-size: 16px;
    font-style: italic;
    margin-top: 5px;
    margin-bottom: 0;
`;
