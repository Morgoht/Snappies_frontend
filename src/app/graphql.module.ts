import { NgModule } from '@angular/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost:8080/graphql'; // Remplacez par l'URL de votre backend Spring

export function createApollo(httpLink: HttpLink): any {
    return {
        link: httpLink.create({ uri }),
        cache: new InMemoryCache(),
    };
}

@NgModule({
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink],
        },
    ],
})
export class GraphQLModule {}
