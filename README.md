# Moody Player

Moody Player is a web application that detects a user's facial expression using the device camera and recommends music based on the detected emotion. It is developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and utilizes `face-api.js` for real-time facial expression analysis.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Model Information](#model-information)
- [Sample Data](#sample-data)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- Real-time facial expression detection using face-api.js  
- Emotion classification (e.g., happy, sad, angry)  
- Song recommendation based on detected mood  
- Responsive user interface built with React  
- Backend REST API with Express.js  
- Songs stored and retrieved from MongoDB  

## Architecture

1. The frontend prompts the user to grant camera access.  
2. `face-api.js` detects facial landmarks and classifies expressions.  
3. Based on the detected mood, a request is sent to the backend.  
4. The backend queries MongoDB for songs associated with that emotion.  
5. The matched songs are displayed to the user in the UI.

## Technologies Used

### Frontend

- React.js  
- Axios  
- face-api.js  
- CSS or Tailwind CSS  

### Backend

- Node.js  
- Express.js  
- MongoDB with Mongoose  

## Getting Started

### Prerequisites

- Node.js and npm  
- MongoDB (local instance or MongoDB Atlas)

### Clone the Repository

```bash
git clone https://github.com/your-username/moody-player.git
cd moody-player
