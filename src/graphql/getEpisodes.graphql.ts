import { gql } from "@apollo/client";

const GET_EPISODES = gql`
  query getEpisodes {
    episodes {
      results {
        id
        name
        air_date
      }
    }
  }
`;

export default GET_EPISODES;
