1. Read about unwrap
    dispatch(asyncThunk()).unwrap()
    unwrap throws an Error if the API request is rejected
    Hence the above code can be put in a try catch to get the Error thrown by the dispatch function
    try {
    dispatch(asyncThunk()).unwrap()
    } catch (error) {
        console.log('Error throws by asyncThunk loading function fetchPosts/ fetchUsers in this case')
    }
    
2. onSave disabled
    check whether there is an already going Post Request using status, and avoid Save Button Enablement

3. unique Keys
    if you use same keys in map , you will get Error saying duplicate Keys 
    // specifically you get a warning "Encountered two children with the same key, `52`"
    using index while mapping will always give you unique keys for every Element of map
    check PostsList.js line 33
    but using index is an anti-pattern as suggested here , also using a random uuid function like uuid()
    VVIMP- Read this: 
    https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements
    dont use indexes and dont generate uuid on the fly - this is COMPLETELY WRONG

4. Replacing momentjs with datefns - Keep project light weight
    https://blog.bitsrc.io/date-fns-vs-momentjs-9833f7463751
    import 'moment' imports all the functions of the moment
    moment is a large library 280kb to 300kb vs datefns which is mere 8kb