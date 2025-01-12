fn reverse(pair: (i32, bool)) -> (bool, i32) {
    let (int_param, bool_param) = pair;
    (bool_param, int_param)
}

// The following struck is for the activity.
#[derive(Debug)]
struct Matrix(f32, f32, f32, f32);

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

    //
    // Tuples
    //

    let long_tuple = (
        1u8, 2u16, 3u32, 4u64, -1i8, -2i16, -3i32, -4i64, 0.1f32, 0.2f64, 'a', true,
    );

    // Values can be extracted for the tuple using tuple indexing.
    println!("Long tuple frist value: {}", long_tuple.0);
    println!("Long tuple second value: {}", long_tuple.1);

    // Tuples can be tuples members:
    let tuple_of_tuples = ((1u8, 2u16, 2u32), (4u64, -1i8), (-2i16));

    // But long tuples (more than 12 elements cannot be printed)
    let too_long_tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
    // println!("Too long tuple: {:?}", too_long_tuple);

    let pair = (1, true);
    println!("Pair is {:?}", pair);

    println!("The reversed pair is {:?}", reverse(pair));

    // To create one element tuples, the comma is required to tell them appart\
    // from a literal surrounded by parentheses
    println!("One element tuple: {:?}", (5u32,));
    println!("Just an integer: {:?}", (5u32));

    // Tuples can be deconstructed to create bindings.
    let tuple = (1, "hellow", 4.5, true);

    let (a, b, c, d) = tuple;
    println!("{:?}, {:?}, {:?}, {:?}", a, b, c, d);

    let matrix = Matrix(1.1, 1.2, 2.1, 2.2);
    println!("{:?}", matrix);
}
