## React Query or Tanstack Query Introduction - Dave Gray
https://www.youtube.com/watch?v=lLWfZL-Y8lM

Its used in case when you dont use redux for state management
if you are using redux prefer RTK Query

QueryClient - Object
QueryClientProvider - wraps App and provides QueryClient Object

useQueryClient - can be used to access QueryClient in other components of the App

create apis using axios or fetch for creating/updating/deleting a todo

useQuery - used to fetch data requires two hooks: a key (cache name), fetchFunction

useMutation - handle mutations like POST, PUT, DELETE requests
takes an async axios func for POST, PUT, DELETE, gives options onSuccess, onFailure, etc where we can manage cache

executing Mutation
returns an object which has mutate function to execute mutation

Command to start a json server
npx json-server -w data/db.json -p 3500

use select in useQuery to transform data, 
select takes the response data as input and you can sort the data or transform it





# ReactQueryDevTools helps developers understand, debug, and optimize their usage of React Query
