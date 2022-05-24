import { gql, useQuery } from "@apollo/client";

const GET_ANIME = gql`
    query GET_ANIME($id: Int) {
        Media(id: $id) {
            id
            title {
                romaji
                english
                native
                userPreferred
            }
            bannerImage
            coverImage {
                extraLarge
                large
                medium
                color
            }
            format
            episodes
            duration
            status
            description
            startDate {
                year
                month
                day
            }
            endDate {
                year
                month
                day
            }
            season
            seasonYear
            averageScore
            genres
        }
    }
`;

export const useAnime = (id) => {
    const { loading, error, data } = useQuery(GET_ANIME, {
        variables: {
            id: id,
        },
    });

    return { loading, error, data };
};
