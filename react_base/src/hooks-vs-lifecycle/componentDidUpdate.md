# 1 How to mimic componentDidUpdate using React hooks
https://dev.to/savagepixie/how-to-mimic-componentdidupdate-with-react-hooks-3j8c

# 2 How react componentDidUpdate Works
https://linguinecode.com/post/how-react-componentdidupdate-works

# componentDidUpdate vs useEffect
https://linguinecode.com/post/react-componentdidupdate-vs-useeffect

# 3 Implement componentWillUnmount using useEffect
https://stackoverflow.com/questions/55786061/how-can-we-implement-componentwillunmount-using-react-hooks

sol0 - https://stackoverflow.com/a/55139745
https://codesandbox.io/s/48w5m9pkwx

sol1 - https://stackoverflow.com/a/58650152

closest is the return (cleanUp) function of useEffect, but the return function runs
AFTER the unmount of the component. But in case of componentWillUnmount , componentWillUnmount will run BEFORE the unmount of the component.

sol2 - https://stackoverflow.com/a/64950939
useLayoutEffect Hook - (read about this)
the new useLayoutEffect hook is equivalent to componentWillUnmount


