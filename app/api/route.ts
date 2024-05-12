// import mysql from "mysql2/promise";

// pages/api/data.js

// import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";
import db from './config/db';
// export async function connectToDatabase() {
//     return await mysql.createConnection({
//         host: 'localhost',
//         user: 'hansarts_admin',
//         password: 'Hansartss@123',
//         database: 'hansarts_shop',
//     });
// }


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const db = await connectToDatabase(); // Function to connect to your database
//         const data = await db.query('SELECT * FROM Billboard'); // Your SQL query
//         res.status(200).json(data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// }
export async function GET() {

    try {
        const results = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM Billboard', (err: any, results: []) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        console.log(results);
       return  NextResponse.json(results);
    } catch (error) {
        console.log("could not fetch required data");
        return NextResponse.json({
            message: error
        },
       );
    }
}

