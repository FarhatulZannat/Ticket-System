# React 

## What is JSX, and why is it used?

JSX (JavaScript XML) হলো JavaScript-এর একটি syntax extension, যা HTML-এর মতো দেখতে কিন্তু JavaScript-এর ভেতরে লেখা হয়।
কেন ব্যবহার করা হয়:

UI কোড লেখা সহজ ও readable হয়
JavaScript আর HTML একসাথে লেখা যায়
React কম্পোনেন্ট তৈরিতে ব্যবহৃত হয়
Browser সরাসরি JSX বোঝে না, তাই Babel এটাকে regular JavaScript-এ convert করে।
##  What is the difference between State and Props?

Props → Parent থেকে Child-এ data পাঠানো হয়, read-only (পরিবর্তন করা যায় না)
State → Component-এর নিজস্ব data, mutable (পরিবর্তন করা যায়)
## What is the useState hook, and how does it work? chuto kore dao

useState হলো React-এর একটি hook যা component-এ data store ও update করতে দেয়। setValue() call করলে component re-render হয় . State সরাসরি change করা যাবে না → count = 5 [NO], setCount(5) [YES]
## How can you share state between components in React?

React-এ state share করার সবচেয়ে common উপায় হলো "Lifting State Up" — state-টা common parent-এ রাখো, তারপর props দিয়ে নিচে পাঠাও।
## How is event handling done in React?

React event handling-এ camelCase ব্যবহার করা হয় (onClick, onChange)। Function reference দিতে হয়, call করা যাবে না — onClick={handleClick} [YES], onClick={handleClick()} [NO]। Event object থেকে value পেতে e.target.value ব্যবহার করো। বড় logic-এর জন্য আলাদা handler function বানানো ভালো। HTML-এর onclick আর React-এর onClick দেখতে একই কিন্তু কাজের ধরন আলাদা।
