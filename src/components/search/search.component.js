import React from "react";
import { Images } from "../../assets";
import { SearchWrapper, InputSearch, ButtonSearch } from "./search.styled";

const Search = (props) => {
    return (
        <div>
            <SearchWrapper>
                <InputSearch
                    type="search"
                    name="search"
                    autoComplete="off"
                    value={props.value}
                    placeholder="Coba 'Naruto Shippuden'"
                    onChange={(e) => props.onChange(e.target.value)}
                />
                <ButtonSearch onClick={props.handleSearch}>
                    <img src={Images.search} alt="search" />
                </ButtonSearch>
            </SearchWrapper>
        </div>
    );
};

export default Search;
