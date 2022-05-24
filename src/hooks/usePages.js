import { gql, useQuery } from "@apollo/client";

export const GET_PAGES = gql`
    query GET_PAGES($page: Int) {
        Page(page: $page, perPage: 10) {
            pageInfo {
                total
                perPage
                currentPage
                lastPage
                hasNextPage
            }
            media {
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

export const usePages = (page) => {
    const { loading, error, data } = useQuery(GET_PAGES, {
        variables: {
            page: page,
        },
    });

    return { loading, error, data };
};