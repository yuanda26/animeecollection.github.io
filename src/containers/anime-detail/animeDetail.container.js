import React, { useState } from "react";
import { css } from "@emotion/css";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

import {
    CoverAnime,
    AnimeTitle,
    BannerAnime,
    CoverWrapper,
    SegmentTitle,
    AnimeImgCover,
    ContentWrapper,
    AddToCollection,
    SegmentContent,
    ListOverview,
    ListItemOverview,
    ItemTitleOverview,
    ItemValueOverview,
    PopupContentWrapper,
    ListCollection,
    ListItemCollection,
    PageTitle,
    Wrapper,
} from "./animeDetail.styled";

import { ParseDate } from "../../utils/utils";
import { useAnime } from "../../hooks/useAnime";
import { Popup, Loading } from "../../components";

const AnimeDetailContainer = () => {
    const { id } = useParams();
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => setShowPopup(!showPopup);

    let currentAnime = {}
    const { loading, error, data } = useAnime(id);

    if (error) console.error(error);
    if (!loading) currentAnime = data.Media;

    const collectionStorage = JSON.parse(localStorage.getItem("collection"))

    const collections = collectionStorage && collectionStorage.length > 0
        ? collectionStorage
        : [{ id: uuidv4(), title: "New Collection", items: [] }];

    const [checkedState, setCheckedState] = useState(
        new Array(collections.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    const handleSave = () => {
        const updateCollection = collections.map((data, index) => {
            if (checkedState[index]) {
                return {
                    ...data,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    items: [...data.items, currentAnime],
                }
            } else {
                return data
            }        
        });

        // Update to LocalStorage
        localStorage.setItem("collection", JSON.stringify(updateCollection));
        const updatedCheckedState = checkedState.map((item) => item = false);

        setCheckedState(updatedCheckedState);
        // Close Popup
        togglePopup();
    };

    if (loading) return <Loading />;
    return (
        <>
            <Wrapper>
                <PageTitle>Anime</PageTitle>
            </Wrapper>
            <BannerAnime
                className={css`
                    background-image: url(${currentAnime.bannerImage ? currentAnime.bannerImage : currentAnime.coverImage.extraLarge});
                `}
            />
            <CoverWrapper>
                <CoverAnime>
                    <AnimeImgCover src={currentAnime.coverImage.medium} />
                    <AddToCollection type="button" onClick={togglePopup}>
                        Add to Collections
                    </AddToCollection>
                </CoverAnime>
                <AnimeTitle>{currentAnime.title.userPreferred}</AnimeTitle>
            </CoverWrapper>
            <ContentWrapper>
                <SegmentTitle>Description</SegmentTitle>
                <SegmentContent>{currentAnime.description}</SegmentContent>
                <SegmentTitle>Overview</SegmentTitle>
                <SegmentContent>
                    <ListOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>Format</ItemTitleOverview>
                            <ItemValueOverview>{currentAnime.format}</ItemValueOverview>
                        </ListItemOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>Episodes</ItemTitleOverview>
                            <ItemValueOverview>{currentAnime.episodes}</ItemValueOverview>
                        </ListItemOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>
                                Episodes Duration
                            </ItemTitleOverview>
                            <ItemValueOverview>{currentAnime.duration} Mins</ItemValueOverview>
                        </ListItemOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>Status</ItemTitleOverview>
                            <ItemValueOverview>{currentAnime.status}</ItemValueOverview>
                        </ListItemOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>Start Date</ItemTitleOverview>
                            <ItemValueOverview>{ParseDate(currentAnime.startDate)}</ItemValueOverview>
                        </ListItemOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>End Date</ItemTitleOverview>
                            <ItemValueOverview>{ParseDate(currentAnime.endDate)}</ItemValueOverview>
                        </ListItemOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>Seasons</ItemTitleOverview>
                            <ItemValueOverview>{currentAnime.season} {currentAnime.seasonYear}</ItemValueOverview>
                        </ListItemOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>Avarage Score</ItemTitleOverview>
                            <ItemValueOverview>{currentAnime.averageScore}%</ItemValueOverview>
                        </ListItemOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>Genres</ItemTitleOverview>
                            <ItemValueOverview>{currentAnime.genres.join(", ")}</ItemValueOverview>
                        </ListItemOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>Romaji</ItemTitleOverview>
                            <ItemValueOverview>{currentAnime.title.romaji}</ItemValueOverview>
                        </ListItemOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>English</ItemTitleOverview>
                            <ItemValueOverview>{currentAnime.title.english}</ItemValueOverview>
                        </ListItemOverview>
                        <ListItemOverview>
                            <ItemTitleOverview>Native</ItemTitleOverview>
                            <ItemValueOverview>{currentAnime.title.native}</ItemValueOverview>
                        </ListItemOverview>
                    </ListOverview>
                </SegmentContent>
            </ContentWrapper>
            <Popup
                show={showPopup}
                handleSave={handleSave}
                handleClose={togglePopup}
                title="Add To Collection"
            >
                <PopupContentWrapper>
                    <ListCollection>
                        {collections.map(({ title }, index) => (
                            <ListItemCollection key={index}>
                                <label htmlFor={`custom-checkbox-${index}`}>
                                    {title}
                                </label>
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={title}
                                    value={title}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                            </ListItemCollection>
                        ))}
                    </ListCollection>
                </PopupContentWrapper>
            </Popup>
        </>
    );
};

export default AnimeDetailContainer;
