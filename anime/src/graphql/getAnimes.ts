import { gql } from "@apollo/client";

const ANIME_QUERY = gql`
  query ($search: String!, $page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(search: $search, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        type
        genres
        description
        startDate {
          year
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        rankings {
          rank
          type
          allTime
        }
        studios {
          edges {
            node {
              id
              name
            }
          }
        }
        episodes
      }
    }
  }
`;

export default ANIME_QUERY;