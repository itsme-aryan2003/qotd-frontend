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

qotd-frontend/
│
├── index.html              # Entry HTML file
├── package.json            # Project metadata & scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── package-lock.json       # Dependency lock file
│
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main QOTD UI layout
│   └── index.css           # Global styles (Tailwind)
│
└── README.md               # Project documentation

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