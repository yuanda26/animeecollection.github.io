import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
    width: 100%;
    margin-bottom: 25px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
`;

export const InputSearch = styled.input`
    position: relative;
    flex: 1 1 auto;
    min-width: 0;
    margin-bottom: 0;
    display: block;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-clip: padding-box;
    border: none;
    border-radius: 0.25rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

export const ButtonSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    padding: 0;
    border: none;
    background-color: #327ab7 !important;
`;
