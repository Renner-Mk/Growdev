import express from "express";
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid'
import { validateUserRestration } from "../middlewares/validation";

const router = express.Router();

export const users = []

router.post('/signup', validateUserRestration, async (request, response) =>{
    const {name, email, password} = request.body
})