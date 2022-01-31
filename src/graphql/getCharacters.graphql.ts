import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default GET_CHARACTERS;
