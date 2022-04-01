import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
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