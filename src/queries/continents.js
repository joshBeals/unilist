import { gql } from "@apollo/client";

export const ALL_COUNTINENTS = gql`
    query {
        continents {
            code
            name
            countries {
                code
                name
                native
                capital
            }
        }
    }
`;