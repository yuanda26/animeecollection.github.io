import { gql, useQuery } from "@apollo/client";

export const GET_PAGES = gql`
    query GET_PAGES(
        $page: Int = 1
        $search: String
        $type: MediaType = ANIME
    ) {
        Page(page: $page, perPage: 10) {
            pageInfo {
                total
                perPage
                currentPage
                lastPage
                hasNextPage
            }
            media (type: $type, search: $search) {
                id
                title {
                    romaji
                    english
                    native
                    userPreferred
                }
                genres
                status
                coverImage {
                    extraLarge
                    large
                    medium
                    color
                }
                bannerImage
            }
        }
    }
`;

export const usePages = (page, search) => {
    const variables = {
        page: page
    };
    if (search !== "") variables["search"] = search

    const { loading, error, data } = useQuery(GET_PAGES, {
        variables: variables
    });

    return { loading, error, data };
};
