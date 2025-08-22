
    // 1. Arithmetic Operators
    console.log("=== Arithmetic Operators ===");
    let a = 10, b = 3;
    console.log("a + b =", a + b); // Addition
    console.log("a - b =", a - b); // Subtraction
    console.log("a * b =", a * b); // Multiplication
    console.log("a / b =", a / b); // Division
    console.log("a % b =", a % b); // Modulus (remainder)
    console.log("a ** b =", a ** b); // Exponentiation

    // 2. Assignment Operators
    console.log("=== Assignment Operators ===");
    let c = 5;
    console.log("c =", c);
    c += 2; // c = c + 2
    console.log("c += 2 =>", c);
    c -= 1; // c = c - 1
    console.log("c -= 1 =>", c);
    c *= 3; // c = c * 3
    console.log("c *= 3 =>", c);
    c /= 2; // c = c / 2
    console.log("c /= 2 =>", c);
    c %= 3; // c = c % 3
    console.log("c %= 3 =>", c);

    // 3. Comparison Operators
    console.log("=== Comparison Operators ===");
    console.log("a == b ?", a == b); // Equal
    console.log("a === b ?", a === b); // Strict Equal (value + type)
    console.log("a != b ?", a != b); // Not Equal
    console.log("a !== b ?", a !== b); // Strict Not Equal
    console.log("a > b ?", a > b); // Greater than
    console.log("a < b ?", a < b); // Less than
    console.log("a >= b ?", a >= b); // Greater or equal
    console.log("a <= b ?", a <= b); // Less or equal

    // 4. Logical Operators
    console.log("=== Logical Operators ===");
    let x = true, y = false;
    console.log("x && y =", x && y); // AND
    console.log("x || y =", x || y); // OR
    console.log("!x =", !x); // NOT

    // 5. Unary Operators
    console.log("=== Unary Operators ===");
    let d = 5;
    console.log("++d =", ++d); // Pre-increment
    console.log("d++ =", d++); // Post-increment
    console.log("--d =", --d); // Pre-decrement
    console.log("d-- =", d--); // Post-decrement
    console.log("typeof d =", typeof d); // Typeof
    console.log("+d =", +d); // Unary plus
    console.log("-d =", -d); // Unary minus

    // 6. Ternary Operator
    console.log("=== Ternary Operator ===");
    let age = 18;
    let canVote = (age >= 18) ? "Yes" : "No";
    console.log("Can vote? ", canVote);

    // 7. String Operators
    console.log("=== String Operators ===");
    let str1 = "Hello", str2 = "World";
    console.log("str1 + str2 =", str1 + " " + str2); // Concatenation
    str1 += " Everyone";
    console.log("str1 += ' Everyone' =>", str1);

    // 8. Bitwise Operators
    console.log("=== Bitwise Operators ===");
    let e = 5, f = 3; // 5=0101, 3=0011
    console.log("e & f =", e & f); // AND
    console.log("e | f =", e | f); // OR
    console.log("e ^ f =", e ^ f); // XOR
    console.log("~e =", ~e); // NOT
    console.log("e << 1 =", e << 1); // Left shift
    console.log("e >> 1 =", e >> 1); // Right shift
    console.log("e >>> 1 =", e >>> 1); // Unsigned right shift

    // 9. Logical Nullish Assignment
    console.log("=== Logical Nullish Assignment ===");
    let g = null;
    g ??= 10; // Assign if null or undefined
    console.log("g ??= 10 =>", g);

    // 10. Optional Chaining (?.)
    console.log("=== Optional Chaining ===");
    const user = { name: "Pranjal", address: { city: "Mumbai" } };
    console.log("user?.address?.city =", user?.address?.city);
    console.log("user?.contact?.phone =", user?.contact?.phone); // doesn't throw error

    // 11. Comma Operator
    console.log("=== Comma Operator ===");
    let h = (1, 2, 3);
    console.log("h =", h); // Last value of expression

    // 12. Exponentiation Assignment
    console.log("=== Exponentiation Assignment **= ===");
    let i = 2;
    i **= 3; // i = i ** 3
    console.log("i **= 3 =>", i);

    
 
