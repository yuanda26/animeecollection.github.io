import React, { useState } from "react";
import { Wrapper, PageTitle } from "./anime.styled";
import { Card, Search, Loading, Pagination } from "../../components";

import { usePages } from "../../hooks/usePages";

const AnimeContainer = () => {
    const dataPerPage = 10;
    const [keyword, setKeyword] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    let totalData = 0;
    let currentPosts = [];
    const { loading, error, data } = usePages(currentPage);

    if (error) console.error(error);
    if (!loading) {
        currentPosts = data.Page.media;
        totalData = data.Page.pageInfo.total;
    }

    const handleSearch = () => {
        if (keyword.length > 2) console.log(keyword);
    };

    const handlePaginate = (page) => setCurrentPage(page);

    if (loading) return <Loading />;
    return (
        <Wrapper>
            <PageTitle>Anime</PageTitle>
            <Search onChange={setKeyword} handleSearch={handleSearch} />
            <Card data={currentPosts} />
            <Pagination
                currentPage={currentPage}
                dataPerPage={dataPerPage}
                handlePaginate={handlePaginate}
                totalData={totalData}
            />
        </Wrapper>
    );
};

export default AnimeContainer;
