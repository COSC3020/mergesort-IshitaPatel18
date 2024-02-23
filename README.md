[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

My answer: <br>

The breaking down of the original array into subarrays (dividing into half part subarrays) would be log(n) because of the divide and conquer idea as it is splitting in half each time ( $log_2(n)$ ). Creating and initializing the variables like size, first, tmp, second, etc, take constant time, which means they can be dropped because asymptotically, constants aren't impactful. Now the code that is in charge of sorting the elements by checking if the current element on the left is less than or equal to the current right element, then incrementing the position of the left element if it is or moving the current element on the right into the current position of the left and pushing all of the other elements over one spot, is essentially in the worst case going through n number of elements n number of times, like insertion sort, which makes this $n^2$. Since the code is nested we would have $n^2log(n)$, so the worst case $\Theta$ bound would be $\Theta(n^2log(n))$.
