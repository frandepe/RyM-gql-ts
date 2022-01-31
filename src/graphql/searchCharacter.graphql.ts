import { gql } from "@apollo/client";

const SEARCH_CHARACTER = gql`
  query searchCharacter($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        status
        species
        type
        gender
      }
    }
  }
`;

export default SEARCH_CHARACTER;
