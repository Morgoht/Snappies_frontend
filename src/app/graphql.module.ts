// graphql.module.ts

import { NgModule } from '@angular/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

const uri = 'http://localhost:8080'; // Replace with your GraphQL server endpoint

@NgModule({
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    link: httpLink.create({ uri }),
                    cache: new InMemoryCache(),
                };
            },
            deps: [HttpLink],
        },
        Apollo, // Include Apollo in the providers array
    ],
})
export class GraphQLModule {
    constructor(apollo: Apollo, httpLink: HttpLink) {
        apollo.create({
            link: httpLink.create({ uri }),
            cache: new InMemoryCache(),
        });
    }
}
