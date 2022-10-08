import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      name
      id
      image
      status
      species
      type
      gender
      episode {
        name
        episode
        air_date
      }
    }
  }
`;

export const useCharacter = (id: string) => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};
