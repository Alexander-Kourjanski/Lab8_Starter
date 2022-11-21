# Lab 8 - Starter

Alexander Kourjanski

1) I would fit my tests in Github actions for the Recipe project development pipeline because it automatically tests the code once it is pushed and before it is added to the repo, and there are no complications of having the code run on different computers.
2) I would not use an end to end test check if a specific function is returning the correct output because an end to end test is meant to test features of the UI all the way through, which is more broad than just one function. This would be something a unit test is a better fit for.
3) I would not use a unit test to test the message feature of an application since this is something that would fit an end to end test better. There is simply to many steps which would be better to check from the beginning to end across all the steps, which is something that unit tests are made for.
4) I would use a unit test for the “max message length” because it is just a comparison of the length of the string and 80. This component fits within what unit tests are best at, small scale tests and without many moving parts.