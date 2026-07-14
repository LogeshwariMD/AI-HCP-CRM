# AI-First CRM HCP Module

## Overview

This project is an AI-powered Customer Relationship Management (CRM) module designed for Healthcare Professional (HCP) interactions.

Instead of manually filling the interaction form, the sales representative communicates with an AI Assistant using natural language. The AI Assistant extracts the required information using an LLM and LangGraph, automatically populates the CRM form, and stores the interaction.

This project was developed as part of the Round-1 Technical Assignment.

---

# Tech Stack

## Frontend

- React.js
- Redux Toolkit
- Material UI
- Axios

## Backend

- FastAPI
- Python
- LangGraph
- LangChain
- Groq API
- Llama 3.3 70B Versatile

## Database

- PostgreSQL

---

# Features

### AI First Interaction Logging

Instead of manually filling the form, users simply type:

> Today I met Dr Smith and discussed Product X. The sentiment was positive and brochures were shared.

The AI automatically fills

- HCP Name
- Date
- Time
- Topics
- Materials Shared
- Samples
- Sentiment
- Outcome
- Follow-up

---

# LangGraph Tools

This project contains five AI tools.

## 1. Log Interaction

Extracts CRM information from natural language.

---

## 2. Edit Interaction

Allows users to modify previously logged information.

Example

> Change the doctor to Dr John and sentiment to negative.

---

## 3. Summarize Interaction

Generates a concise meeting summary.

---

## 4. Suggest Follow-up

Suggests the next action for the sales representative.

---

## 5. Extract Entities

Extracts

- Doctor Name
- Products
- Materials
- Sentiment
- Dates

---

# Folder Structure

AI-HCP-CRM

frontend/

components/

pages/

redux/

styles/

backend/

agents/

database/

services/

tools/

main.py

README.md

---

# Installation

## Backend

Create Virtual Environment

```
python -m venv venv
```

Activate

Windows

```
venv\Scripts\activate
```

Install Packages

```
pip install -r requirements.txt
```

Run Backend

```
uvicorn main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

## Frontend

Install Packages

```
npm install
```

Run

```
npm start
```

Frontend URL

```
http://localhost:3000
```

---

# Environment Variables

Create a .env file inside backend.

```
GROQ_API_KEY=YOUR_GROQ_KEY
```

---

# Sample Prompt

```
Today I met Dr Smith.

We discussed Product X efficacy.

The sentiment was positive.

I shared brochures.

Please log this interaction.
```

---

# Architecture

User

↓

React Frontend

↓

FastAPI

↓

LangGraph Agent

↓

Groq LLM

↓

Tools

↓

Database

↓

Response to Frontend

---

# Future Improvements

Voice-to-Text Interaction

Calendar Integration

Email Follow-up

Meeting Scheduler

Multi-agent Workflow

Role-based Authentication

Analytics Dashboard

