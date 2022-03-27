# Array binary search challenge

This challenge consists of a function that takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to JavaScript, I had to return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Whiteboard 

![array-binary-search](https://user-images.githubusercontent.com/90294860/160266744-50ae1ddc-ec0f-498c-aefe-7e74a2d10518.png)

## Approach and efficiency

I started by considering the big o and doing research to make sure I was using the proper reference to it during the whiteboarding process via the (DEV)[https://dev.to/b0nbon1/understanding-big-o-notation-with-javascript-25mc] website. I realized I would want to try to get the efficency to reflect a function that iterated less times than the length of the array. In order to do that I took an approach that would split the array in half, including a round down assuming the array was odd, and iterate forward or backward pending the location of the desired values index. 
