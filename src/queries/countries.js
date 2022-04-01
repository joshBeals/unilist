import { gql } from "@apollo/client";

export const FETCH_COUNTRIES = gql`
    query($code: ID!) {
        continent (code: $code) {
            code
            name
            countries {
                code
                name
                native
                capital
                languages {
                  name
                }
            }
        }
    }
`;