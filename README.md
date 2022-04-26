# graphql-yoga-circular

Demo project demonstrating circular reference bug with @graphql-yoga/node

## Usage

- Run: `npm start`
  - then visit http://localhost:4000/graphql
- Check: `npm check` 
  - the circular constraint error (originating with `@envelop/types/utils.d.ts#SpreadTwo`)