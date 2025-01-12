fn main() {
    //
    // Primitives
    //

    // Variables can be type anotated.
    let logical: bool = true;

    let a_float: f64 = 1.0; //Regular annotation
    let a_integer = 5i32; // Suffix annotation

    // Or a default will be used
    let default_float = 3.0;
    let default_integer = 7;

    // A type can also be inferred from contex
    let mut inferred_type = 12;
    inferred_type = 4294967296i64;

    // A mutable variable's vaule can be changed
    let mut mutable = 21;
    mutable = 21;

    // Error! The type of a variable can not be changed
    // mutable = true;

    let mutable = true;

    // Array signature consists of type T amd Lengetas [T; length]
    let my_array: [i32; 5] = [1, 2, 3, 4, 5];

    // Tuple is a collection of values of different types
    // and is constructed using parentheses ().
    let my_tuple = (5u32, 1u8, true, -5.04f32);

    //
    // Literals and operators
    //

    // Integer addition:
    println!("1 + 2 = {}", 1u32 + 2);

    // Integer substraction:
    println!("1- 2 = {}", 1i32 - 2);

    // Scientific notation:
    println!("1e4 is {}, -2.5e-3 is {}", 1e4, -2.5e-3);

    //short-circuiting boolean logic
    println!("true AND false is {}", true && false);
    println!("true OR false is {}", true || false);
    println!("NOT true is {}", !true);

    // Bitwise operations
    println!("0011 AND 0101 is {:04b}", 0b0011u32 & 0b0101);
    println!("0011 OR 0101 is {:04b}", 0b0011u32 | 0b0101);
    println!("0011 XOR 0101 is {:04b}", 0b0011u32 ^ 0b0101);
    println!("1 << 5 is {}", 1u32 < 5);
    println!("0x80 >> 2 is {}", 0x80u32 >> 2);

    // Use underscores to improve readability
    println!("One million is written as {}", 1_000_000);
}
