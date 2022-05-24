import styled from "@emotion/styled";

export const BannerAnime = styled.div`
    height: 210px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const CoverWrapper = styled.div`
    padding: 0 15px 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

export const CoverAnime = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: -90px;
`;

export const AnimeTitle = styled.h1`
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.01em;
    padding-top: 15px;
    margin: 0;
    width: 100%;
`;

export const AnimeImgCover = styled.img`
    border-radius: 4px;
    margin-right: 30px;
    background-color: rgba(212, 230, 245, 0.5);
    box-shadow: 0 0 29px rgb(49 54 68 / 25%);
`;

export const AddToCollection = styled.button`
    height: 38px;
    width: 100%;
    background-color: #3db4f2;
    border: none;
    color: #fff;
    border-radius: 4px;
`;

export const ContentWrapper = styled.div`
    background-color: #f4f4f4;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;
`;

export const SegmentTitle = styled.h4`
    margin-top: 0;
    padding-top: 25px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
`;

export const SegmentContent = styled.article`
    padding: 15px;
    font-size: 16px;
    background-color: #ffffff;
`;

export const ListOverview = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    list-style-type: none;
    flex-direction: column;
    justify-content: space-between;
`;

export const ListItemOverview = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    width: 100%;
`;

export const ItemTitleOverview = styled.p`
    width: 50%;
    color: #707070;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0;
    margin: 0;
`;

export const ItemValueOverview = styled.p`
    width: 50%;
    color: #000000;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0;
    margin: 0;
    text-align: right;
`;

export const PopupContentWrapper = styled.div`
    height: 260px;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-right: 15px;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const ListCollection = styled.ul`
    width: 100%;
    display: flex;
    list-style-type: none;
    flex-direction: column;
    justify-content: space-between;
`;

export const ListItemCollection = styled.li`
    width: 100%;
    display: flex;
    margin-bottom: 12px;
    align-items: center;
    justify-content: space-between;
`;

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
