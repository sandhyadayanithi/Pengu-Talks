import { GoogleGenAI } from "@google/genai";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const ai = new GoogleGenAI({});
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post('/speak',async (req,res)=>{
  const text=req.body.title;
  const response= await main(text);
  res.json(response);
});

async function main(text) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${text}`,
    config: {
      systemInstruction: "You are a penguin named Pengu. Respond in a fun, cute, but in a short way, maximum 2-5 sentences.",
    },
  });
  return response;
}

app.listen(8000,()=>console.log('Server running...'));