import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacters = (page: any) => {
  const { data, error, loading } = useQuery(GET_CHARACTERS, {
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
