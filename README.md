QOTD – Two Sum (Frontend)
📌 Project Overview

This project implements a Question of the Day (QOTD) frontend experience for an edtech platform like TechLearn Solutions.
The goal is to motivate students to solve one coding problem daily using a clean, focused, and engaging UI.

The featured problem is Two Sum, a popular DSA question.

🧩 Problem Description

Given an array of integers nums and an integer target, return the indices of two numbers such that they add up to the target.

Exactly one valid solution exists

The same element cannot be reused

🧠 Solution Approach

A hash map is used to store previously visited numbers and their indices.
For each number, its complement (target - current) is checked in constant time.

Time Complexity: O(n)

Space Complexity: O(n)

<img width="822" height="465" alt="Screenshot (85)" src="https://github.com/user-attachments/assets/8dd7ed8d-38e6-4eec-91d9-40a98dee8d32" />

Result:-

<img width="1920" height="855" alt="Screenshot (88)" src="https://github.com/user-attachments/assets/81c3ce24-8b1f-4ad7-943f-75b2f02a52a6" />

How to Run the Project Locally:-
1)) Install Dependencies
npm install
2)) Start the Development Server
npm run dev





🎨 UI & Design Decisions

Monotone blue theme to maintain focus and trust

Clear separation of problem, code area, and engagement sections

Strong primary CTA (Run / Submit)

Responsive layout for mobile and desktop users

🛠️ Tech Stack

React – UI development

Vite – Fast build tool

Tailwind CSS – Styling and responsiveness

🚀 Future Enhancements

Real-time code execution

User login and streak tracking

Backend-driven daily questions

Leaderboard persistence
