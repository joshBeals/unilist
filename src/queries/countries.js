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

export const FETCH_COUNTRY = gql`
    query($code: ID!) {
        country (code: $code) {
            code
            name
            continent {
                code
            }
        }
    }
`;