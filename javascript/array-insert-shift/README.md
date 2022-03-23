# Array Insert Shift
This challenge was to take an array and display it with a value added to the center index of the original array.

## Whiteboard Process
![Screen Shot 2022-03-22 at 9 16 28 PM](https://user-images.githubusercontent.com/90294860/159602832-311e68a0-6357-4652-9b24-f3f825df6c37.png)

## Approach & Efficency

Micha Davis helped to reach a solution for the problem domain. During this collaborative effort, we broke down the problem domain into a logical algorithm of executable functions.
We chose to move backwards when iterating the array to target the middle index assuming the length was divisble by two. Using that logic made it easier to place the number in the middle of the array, becuase an odd length would offset the added value, no longer creating the option of a 'middle' index.
I would say the loop impact is low, without a nested loop present, making the time and space fairly reasonable. There weren't many varibales created either. This method is scalable for divisible by 2 length arrays.
