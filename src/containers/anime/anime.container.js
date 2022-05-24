import React, { useState } from "react";
import { Wrapper } from "./anime.styled";
import { Card, Navs, Search, Loading, Pagination } from "../../components";

import { usePages } from "../../hooks/usePages";

const AnimeContainer = () => {
    const dataPerPage = 10;
    const [search, setSearch] = useState("");
    const [keyword, setKeyword] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    let totalData = 0;
    let currentPosts = [];
    const { loading, error, data } = usePages(currentPage, search);

    if (error) console.error(error);
    if (!loading) {
        currentPosts = data.Page.media;
        totalData = data.Page.pageInfo.total;
    }

    const handleSearch = () => {
        if (keyword.length > 2) setSearch(keyword);
    };

    const handlePaginate = (page) => setCurrentPage(page);

    if (loading) return <Loading />;
    return (
        <Wrapper>
            <Navs title="Anime" />
            <Search onChange={setKeyword} value={keyword} handleSearch={handleSearch} />
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
