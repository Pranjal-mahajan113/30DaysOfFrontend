🔹 Lexical Environment Kya Hai?

Lexical Environment = Local Memory + Parent Environment ka reference

👉 Jab bhi function run hota hai, JS ek naya Lexical Environment banata hai.
👉 Ye batata hai: “Agar variable local scope mai nahi mila, toh kahan search karna hai?”

🔹 Step by Step Execution:

1. Global Execution Context (GEC)

Memory:

a → function

Lexical Environment: parent = null (kyunki global ka koi parent nahi hota).

2. Jab hum a(); call karte hai → a ka execution context banta hai.

Local Memory of a:

b = 10

c → function

Lexical Environment of a: parent = Global (kyunki a globally likha gaya hai).

3. Jab c(); call hota hai → c ka naya execution context banta hai.

Local Memory of c: empty (kyunki andar kuch nahi hai).

Lexical Environment of c: parent = a (kyunki c, a ke andar define hai).

👉 Isiliye c ke andar agar console.log(b) likhe toh 10 print hoga, kyunki wo parent a ke variable ko access kar lega.

4. Jab a() ka kaam khatam ho gaya

b aur c dono destroy ho gaye (local memory free).

Ab global scope mai console.log(b) likha toh ❌ ReferenceError aayega, kyunki b global mai exist hi nahi karta.

🔹 Visual Scope Chain
Global Scope
 ├─ function a()
     ├─ var b = 10
     └─ function c()
          └─ c can access b (parent env se)

✅ Interview Points (One-Liner)

Variables search hote hai Scope Chain se.

c ko b milega, kyunki uska parent a hai.

Global ko b nahi milega, kyunki wo sirf a ke andar tha.



<!-- 🔹 What is Lexical Environment?

Lexical Environment = Local Memory + Reference to Parent Environment

Every time a function is executed, JS creates a Lexical Environment for it.

This helps JS know “Where to find variables if they’re not in the current scope?” -->