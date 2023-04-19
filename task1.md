## Function description:

Find the length of the longest substring without repeating characters in the given string `s`.

---

| Input                               | Output | Description                                                                                                |
| ----------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| "abcabcbb"                          | 3      | Basic happy path                                                                                           |
| ""                                  | 0      | Empty string input                                                                                         |
| "a"                                 | 1      | Single character input                                                                                     |
| "bbbbabbb"                          | 2      | 2-length string surrounded with chars                                                                      |
| "qwertyuiop"                        | 10     | Simple long string                                                                                         |
| "abcasd"                            | 5      | Simple result with prefix                                                                                  |
| "abcasdab"                          | 5      | Simple result with prefix and postifx                                                                      |
| "abcasdabxc"                        | 6      | Result at the end                                                                                          |
| "qweabcasdab"                       | 6      | Result at the start                                                                                        |
| "qwertyuiopapadddaawszczczttyyyhhh" | 11     | Very long string for performance test. This string would have the maximum length that specification allows |
