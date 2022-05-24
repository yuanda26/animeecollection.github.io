import styled from "@emotion/styled";

export const PageList = styled.ul`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    padding-bottom: 25px;
    flex-wrap: wrap;
`;

export const PageListItem = styled.li`
    cursor: pointer;
    font-size: 14px;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;

    &.active {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    &.inactive {
        color: rgb(92, 114, 138);
    }

    &.disabled {
        cursor: not-allowed;
        color: rgb(92, 114, 138);
        background-color: #f4f4f4;
    }
`;
