import styled from "@emotion/styled";

export const Row = styled.div`
    display: block;
`;

export const MediaCard = styled.div`
    display: flex;
    max-height: 115px;
    text-align: center;
    margin-bottom: 15px;
    padding: 15px;
    background-color: #fff;
    border-radius: 4px;
    position: relative;
    box-shadow: 0 0 29px rgb(49 54 68 / 5%);
`;

export const CardImg = styled.img`
    height: 85px;
    max-width: 60px;
    margin-right: 10px;
    border-radius: 4px;
`;

export const CardTitle = styled.p`
    margin-top: 0;
    color: #000;
    font-weight: 600;
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.2;
    overflow: hidden;
    max-width: 220px;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const CardAllTitle = styled.p`
    margin: 0;
    line-height: 1;
    color: #5c728a;
    font-weight: 400;
    font-size: 16px;
    text-align: left;
    overflow: hidden;
    font-style: italic;
    line-height: 1.2;
    max-width: 280px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const IconWrapper = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 55px;
    display: flex;
    justify-content: space-between;
`;

