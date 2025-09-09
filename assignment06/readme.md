<!-- question number 1 -->
1) What is the difference between var, let, and const?

<!-- answer 01 -->
1. 
* javascript এ  let  হলো function scoped। যেই ফাংশনের ভেতরে ডিক্লেয়ার করা হয় পুরো ফাংশনে ব্যবহার করা যায়। ফাংশনের বাইরে করলে global হয়ে যায়।
* let হলো  block scoped।  let দিয়ে যেই ভেরিয়েবলের মধ্যে কোন মান রাখা যায় তার মান পরবর্তীতে পরিবর্তন করা যায়।
* const হলো block scoped। const দিয়ে যেই ভেরিয়েবলের মধ্যে কোন মান রাখা যায় তার মান পরবর্তীতে পরিবর্তন করা যায় না


<!-- question number 02 -->
2) What is the difference between map(), forEach(), and filter()?

<!-- answer 02 -->
2. 
* forEach() এর মাধ্যমে শুধু loop চালানো জন্য ব্যয়হার করা হয়। কিন্তু এর থেকে কোন কিছু রিটার্ন করেনা।
* map() এর মাধ্যমে প্রতিটি element এর উপরে কাজ করে এবং একটি নতুন array রির্টান করে।  length আগের মতোই থাকে।
* filter() এর মাধ্যমে প্রতিটি element condition এর মাধ্যমে চেক করে। এবং condition সত্য হলে return করে



<!-- question number 02 -->
3) What are arrow functions in ES6?
<!-- answer 02 -->
3.
* arrow function হলো  javascript মাধ্যমে শর্টকাট   function লেখার পদ্ধতি। এটি => ব্যবহার করে লেখা হয়। এর জন্য function  keyword লিখতে হয় না। এক লাইন হলে {},  return লেখার প্রয়োজন পরে না



<!-- question number 02 -->
4) How does destructuring assignment work in ES6?
<!-- answer 02 -->
4.
* Destructyring assignment হলো ES6 এর একটা ফিচার যার মাধ্যমে  কোন  array,  object এর ভেতরে থেকে মান বের করে আনা হয় খুব সহজে। আলাদা করে  index বা property access করার দরকার পড়ে না। array এর জন্য  index অনুযায়ী মান বের করে।  objects এর জন্য property অনুযায়ী মান বের করে।




<!-- question number 02 -->
5) Explain template literals in ES6. How are they different from string concatenation?
<!-- answer 02 -->
5. 
* Template Literals হলো ES6 এ আসা নতুৃন ফিচার যার মাধ্যমে string বানানো অনেক সহজ হয়েছে। এগুলো backtick(`) দিয়ে লেখা হয়। আর এর মাধ্যমে variable expression সরাসরি বসানো যায়। এর জন্য ${} এর মাধ্যে   property name দিয়ে property নেওয়া যায়
