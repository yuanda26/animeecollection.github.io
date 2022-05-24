import styled from "@emotion/styled";

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
`;

export const MediaCard = styled.div`
    width: 49%;
    position: relative;
    text-align: center;
    margin-bottom: 25px;
`;

export const CardImg = styled.img`
    max-width: 100%;
    height: 265px;
    margin-bottom: 5px;
`;

export const CardTitle = styled.p`
    margin: 0;
    font-weight: 600;
    text-align: left;
    font-size: 1.2rem;
    line-height: 17px;
    text-decoration: none;
    color: rgb(116, 136, 153);
`;

export const DeleteIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 30px;
    width: 30px;
    background-color: #ffffff;
    border-bottom-left-radius: 4px;
`;