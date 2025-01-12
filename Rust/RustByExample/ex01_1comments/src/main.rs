fn main() {
    // Line comments which go to the end of the line.
    /* Block comments which go to the closing delimiter */

    // This is an exam0ple of a line comments.
    // There are two slashes at the beginning of the line.
    // And nothing written after these will be read by the compiler

    println!("Hellow comments");

    /*
    * This is another type of comment, a block comment. In general,
    * line comments are the recommended comment style. Block comments
    * are extremely useful for temporally disabling chunk of code.
    * /*Block comments can be /* nested */ */ so it takes only a few
    keystrokes to comment out everything in this main() function.
    /*/*/*Try it yourself! */ */ */
    */

    /*
    Note: the previous column of `*` was entirely for style, there's
    no actual need for it.
      */

    //   You can manipulate expressions more easily with block comments
    // than with line comments. Try deleting the comment delimiters
    // to change the result:
    let x = 5 /*+ 90*/ + 5;
    println!("Is `x` 10 or 100 = {}", x);
}
