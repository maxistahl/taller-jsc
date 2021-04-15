# JS Challenge

Having a list of n digits (0 <= digit <= 9), where n
less than or equal to 100, arrange it to move all 0 to
right in O (n) time.

Example **[4, 8, 0, 9, 2, 5, 0, 3, 3, 0]** -> **[4, 8, 9, 2, 5, 3, 3, 0, 0, 0]**

You must display this list in the console.

After this, the previous list without zeros (**[4, 8, 9, 2, 5, 3, 3]**) will represent a fictitious integer (**4892533**). You should add 1 unit to it, leaving the final list as **[4, 8, 9, 2, 5, 3, 4]**.
You must display this list in the console.

Finally, multiply by -1 each digit in odd position of the array without zeros. After this, detect the sub-array, whose sum of digits is the maximum and return this sum. Example: [4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9] -> 13.
You must display the sum in the console.