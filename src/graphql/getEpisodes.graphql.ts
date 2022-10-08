import { gql, useQuery } from "@apollo/client";

const GET_EPISODES = gql`
  query getEpisodes($page: Int!) {
    episodes(page: $page) {
      results {
        id
        name
        air_date
        characters {
          name
          image
        }
      }
    }
  }
`;

export const useEpisodes = (page: any) => {
  const { data, error, loading } = useQuery(GET_EPISODES, {
    variables: {
      page,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
