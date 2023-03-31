Describe: beep()

Test: "It should return warning if number is empty." 
Code: if (inputNumber < 1) 
Expected Output: "Please enter a number > 0"

Test: "It should return "beep!" for any number containing the number 1 in the index." An index with 12 numbers were created.
Code: beep(13)
Expected Output: [0, beep!, 2, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, beep!, 13]

Test: "It should return "boop!" for any number containing the number 2 in the index." An index with 13 numbers were created.
Code: beep(13)
Expected Output: [0, beep!, boop, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, 13]

Test: "It should return "boop!" for any number containing the number 2 in the index." An index with 13 numbers were created.
Code: beep(21)
Expected Output: [0, beep!, boop!, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, boop!]

Test: "It should return "boop!" for any number containing the number 2 in the index." An index with 13 numbers were created.
Code: beep(22)
Expected Output: [0, beep!, boop!, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, boop!, boop!]

Test: "It should return "boop!" for any number containing the number 2 in the index." An index with 13 numbers were created.
Code: beep(33)
Expected Output: [0, beep!, boop!, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, boop!, boop!, boop!, boop!, boop!, boop!, boop!, boop!, boop!, boop!, 30, beep!, boop!]

Test: "It should return "Won't you be my neighbor?" for any number containing the number 3 in the index." An index with 13 numbers were created.
Code: beep(13)
Expected Output: [0, beep!, 2, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, Won't you be my neighbor?]

Test: "It should return "boop!" for any number containing the number 2 in the index." An index with 13 numbers were created.
Code: beep(21)
Expected Output: [0, beep!, boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, Won't you be my neighbor?, beep!, beep!, beep!, beep!, beep!, beep!, boop!]

Test: "It should return "boop!" for any number containing the number 2 in the index." An index with 13 numbers were created.
Code: beep(22)
Expected Output: [0, beep!, boop!, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, boop!, boop!]

Test: "It should return "boop!" for any number containing the number 2 in the index." An index with 13 numbers were created.
Code: beep(33)
Expected Output: [0, beep!, boop!, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, beep!, beep!, beep!, beep!, beep!, beep!, beep!, boop!, boop!, boop!, Won't you be my neighbor?, boop!, boop!, boop!, boop!, boop!, boop!, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?]